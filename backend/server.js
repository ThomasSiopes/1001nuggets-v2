const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./mongo/schemas");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("build"));

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend/build/index.html"));
});

db.once("open", () => {
    app.listen(PORT, ()=> {
        console.log(`API server running on port ${PORT}...`);
        console.log(`Playground at http://localhost:${PORT}${server.graphqlPath}`);
    })
})