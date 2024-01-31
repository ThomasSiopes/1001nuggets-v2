const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const fs = require("fs")

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

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
}

app.get("/", function(req, response) {
    console.log("Home page visited.")
    const filePath = path.resolve(__dirname, "../frontend/build", "index.html");
    
    fs.readFile(filePath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        result = data.replace(/\$TWITTER_DESCRIPTION/g, "The application 1001nuggets!");
        response.send(result);
    })
})

app.get("/topics", function(req, response) {
    console.log("Topics page visited.")
    const filePath = path.resolve(__dirname, "../frontend/build", "topics.html");
    
    fs.readFile(filePath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        result = data.replace(/\$TWITTER_DESCRIPTION/g, "This is the topics page.")
        response.send(result);
    })
})

app.get("/quote", function(req, response) {
    console.log("Quote page visited.")
    const filePath = path.resolve(__dirname, "../frontend/build", "index.html");
    
    fs.readFile(filePath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        result = data.replace(/\$TWITTER_DESCRIPTION/g, "This is a quote page.")
        response.send(result);
    })
})

app.use(express.static("../frontend/build"));

app.get("*", function(req, response) {
    response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

db.once("open", () => {
    app.listen(PORT, ()=> {
        console.log(`API server running on port ${PORT}...`);
        console.log(`Playground at http://127.0.0.1:${PORT}${server.graphqlPath}`);
    })
})