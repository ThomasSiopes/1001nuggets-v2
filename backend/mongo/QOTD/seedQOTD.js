const db = require("../../config/connection");
const { QOTD } = require("../models");
const QOTDseed = require("./QOTD.json");

db.once("open", async () => {
    try {
        await QOTD.deleteMany({});
        await QOTD.create({
            index: QOTDseed[Math.floor(Math.random() * QOTDseed.length)].realID
        });
        
    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.log("QOTD set");
    process.exit(0);
})