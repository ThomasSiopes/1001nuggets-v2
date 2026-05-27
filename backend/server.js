const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const path = require("path");

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const { typeDefs, resolvers } = require("./mongo/schemas");
const { Author, Topic, Quote, Collection, People, Thing, Everywhere } = require("./mongo/models");
const { createLoaders } = require("./mongo/schemas/loaders");

const db = require("./config/connection");

const BASE_URL = "https://www.1001nuggets.com";
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

app.use(cors({
    origin: [
        "http://localhost:3000", //web
        "capacitor://localhost", //IOS cap
        "http://localhost", //Android cap
    ],
    credentials: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

async function middleWare() {
    await server.start();
    server.applyMiddleware({ app });
}

middleWare();

app.get("/sitemap.xml", async (req, res) => {
    try {
        const [authors, topics, quotes, collections, people, things, places] = await Promise.all([
            Author.find({}, "realID").lean(),
            Topic.find({}, "realID").lean(),
            Quote.find({}, "realID").lean(),
            Collection.find({}, "realID").lean(),
            People.find({}, "realID").lean(),
            Thing.find({}, "realID").lean(),
            Everywhere.find({}, "realID").lean(),
        ]);

        const links = [
            { url: "/",            changefreq: "weekly",  priority: 1.0 },
            { url: "/topics",      changefreq: "weekly",  priority: 0.8 },
            { url: "/collections", changefreq: "weekly",  priority: 0.8 },
            { url: "/authors",     changefreq: "weekly",  priority: 0.8 },
            { url: "/everyone",    changefreq: "weekly",  priority: 0.7 },
            { url: "/everything",  changefreq: "weekly",  priority: 0.7 },
            { url: "/everywhere",  changefreq: "weekly",  priority: 0.7 },
            { url: "/glossary",    changefreq: "monthly", priority: 0.6 },
            ...authors.map(a =>     ({ url: `/author/${a.realID}`,     changefreq: "monthly", priority: 0.7 })),
            ...topics.map(t =>      ({ url: `/topic/${t.realID}`,      changefreq: "weekly",  priority: 0.8 })),
            ...quotes.map(q =>      ({ url: `/quote/${q.realID}`,      changefreq: "never",   priority: 0.5 })),
            ...collections.map(c => ({ url: `/collection/${c.realID}`, changefreq: "monthly", priority: 0.6 })),
            ...people.map(p =>      ({ url: `/person/${p.realID}`,     changefreq: "monthly", priority: 0.6 })),
            ...things.map(t =>      ({ url: `/thing/${t.realID}`,      changefreq: "monthly", priority: 0.6 })),
            ...places.map(p =>      ({ url: `/place/${p.realID}`,      changefreq: "monthly", priority: 0.6 })),
        ];

        const stream = new SitemapStream({ hostname: BASE_URL });
        const xml = await streamToPromise(Readable.from(links).pipe(stream));

        res.header("Content-Type", "application/xml");
        res.header("Cache-Control", "public, max-age=86400"); // cache 24h
        res.send(xml.toString());
    } catch (err) {
        console.error("Sitemap error:", err);
        res.status(500).end();
    }
});

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