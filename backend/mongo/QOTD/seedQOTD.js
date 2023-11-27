const db = require("../../config/connection");
const { QOTD } = require("../models");
const QOTD = require("./QOTD.json");

db.once("open", async () => {
    try {
        await QOTD.deleteMany({});
        await QOTD.create(QOTD[0]);
        
    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.log("QOTD set");
    process.exit(0);
})