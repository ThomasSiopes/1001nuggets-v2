const db = require("../config/connection");
const { Author, Topic, Quote, GenLink, Scoreboard, Score, QOTD, Collection } = require("../models");
const authorSeeds = require("./authorSeeds.json");
const topicSeeds = require("./topicSeeds.json");
const quoteSeeds = require("./quoteSeeds.json");
const collectionSeeds = require("./collectionSeeds.json");
const linkSeeds = require("./linkSeeds.json");
const scoreboardSeeds = require("./scoreboardSeeds.json");
const scoreSeeds = require("./scoreSeeds.json");

db.once("open", async () => {
    try {
        await Quote.deleteMany({});
        await Author.deleteMany({});
        await Topic.deleteMany({});
        await GenLink.deleteMany({});
        await Scoreboard.deleteMany({});
        await Score.deleteMany({});
        await QOTD.deleteMany({});
        await Collection.deleteMany({});

        await Author.create(authorSeeds);
        await Topic.create(topicSeeds);
        await Collection.create(collectionSeeds);
        await GenLink.create(linkSeeds);
        await Scoreboard.create(scoreboardSeeds);
        await Score.create(scoreSeeds);
        
        let letsGo = false;
        for(let i = 0; i < quoteSeeds.length; i++) {
            const { _id, author, topics, collections } = await Quote.create(quoteSeeds[i]);

            if((Math.random() < 0.5) || ((i === quoteSeeds.length-1) && letsGo === false)) {
                await QOTD.deleteMany({});
                await QOTD.create([{storedID: _id}])
                letsGo = true;
            }

            const currentAuthor = await Author.findOneAndUpdate(
                { name: author },
                {
                    $addToSet: {
                        quotes: _id,
                    },
                }
            );
            for(let n = 0; n < topics.length; n++)
            {
                const topic = await Topic.findOneAndUpdate(
                    { name: topics[n] },
                    {
                        $addToSet: {
                            quotes: _id,
                        },
                    }
                );
            }
            for(let n = 0; n < collections.length; n++)
            {
                const collection = await Collection.findOneAndUpdate(
                    { name: collections[n] },
                    {
                        $addToSet: {
                            quotes: _id,
                        },
                    }
                );
            }
        }
    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Seed complete");
    process.exit(0);
});