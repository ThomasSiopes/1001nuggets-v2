const DataLoader = require('dataloader');
const { Author, Topic } = require('../models');

async function batchAuthorsByName(names) {
    const authors = await Author.find({ name: { $in: names } }, { name: 1, realID: 1 });
    const authorMap = new Map(authors.map(a => [a.name, a]));
    return names.map(name => authorMap.get(name) || null);
}

async function batchTopicsByName(names) {
    const topics = await Topic.find({ name: { $in: names } }, { name: 1, realID: 1 });
    const topicMap = new Map(topics.map(t => [t.name, t]));
    return names.map(name => topicMap.get(name) || null);
}

function createLoaders() {
    return {
        authorByName: new DataLoader(batchAuthorsByName),
        topicByName: new DataLoader(batchTopicsByName),
    };
}

module.exports = { createLoaders };
