const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./mongo/schemas");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
          'editor.theme': 'light',
        }
    },
});

async function middleWare() {
    await server.start();

    server.applyMiddleware({ app });
}

middleWare();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
}

app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

db.once("open", () => {
    app.listen(PORT, ()=> {
        console.log(`API server running on port ${PORT}...`);
        console.log(`Playground at http://127.0.0.1:${PORT}${server.graphqlPath}`);
    })
})