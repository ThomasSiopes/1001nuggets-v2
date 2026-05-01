const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cors = require("cors");

const { typeDefs, resolvers } = require("./mongo/schemas");
const { createLoaders } = require("./mongo/schemas/loaders");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        loaders: createLoaders(),
    }), 
    cache: "bounded"
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(cors({
    origin: [
        "http://localhost:3000", //web
        "capacitor://localhost", //IOS cap
        "http://localhost", //Android cap
    ],
    credentials: true
}));

async function middleWare() {
    await server.start();
    server.applyMiddleware({ app });
}

middleWare();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (request, response) => {
        response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    });
}

db.once("open", () => {
    app.listen(PORT, ()=> {
        console.log(`API server running on port ${PORT}...`);
        console.log(`Playground at http://127.0.0.1:${PORT}${server.graphqlPath}`);
    })
})