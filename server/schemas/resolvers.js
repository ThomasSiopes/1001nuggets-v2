const { AuthenticationError } = require("apollo-server-express");
const { Author, Topic, Quote, GenLink, Scoreboard, Score, QOTD, Collection } = require("../models");

const resolvers = {
    Query: {
        authors: async() => {
            return Author.find().populate('quotes');
        },
        authorName: async (parent, { name }) => {
            return Author.findOne({ name }).populate('quotes');
        },
        authorID: async (parent, { authorId }) => {
            return Author.findOne({ _id: authorId }).populate('quotes');
        },
        authorR: async (parent, { authorRealId }) => {
            return Author.findOne({ realID: authorRealId }).populate('quotes');
        },
        topics: async () => {
            return Topic.find().populate('quotes');
        },
        topicName: async (parent, { name }) => {
            return Topic.findOne({ name }).populate('quotes');
        },
        topicID: async (parent, { topicId }) => {
            return Topic.findOne({ _id: topicId }).populate('quotes');
        },
        topicR: async (parent, { topicRealId }) => {
            return Topic.findOne({ realID: topicRealId }).populate('quotes');
        },
        collections: async () => {
            return Collection.find().populate('quotes');
        },
        collectionName: async (parent, { name }) => {
            return Collection.findOne({ name }).populate('quotes');
        },
        collectionID: async (parent, { collectionId }) => {
            return Collection.findOne({ _id: collectionId }).populate('quotes');
        },
        quotes: async () => {
            return Quote.find();
        },
        quote: async (parent, { quoteId }) => {
            return Quote.findOne({ _id: quoteId })
        },
        quoteR: async (parent, { quoteRealId }) => {
            return Quote.findOne({ realID: quoteRealId })
        },
        genLinks: async () => {
            return GenLink.find();
        },
        scoreboard: async () => {
            return Scoreboard.find();
        },
        scores: async () => {
            return Score.find();
        },
        QOTD: async () => {
            return QOTD.find();
        }
    },

    Mutation: {
        modScore: async(parent, { value, score }) => {
            return Score.findOneAndUpdate(
                { value },
                {
                    $inc: { score }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        setQOTD: async(parent, { newID }) => {
            try {
                await QOTD.deleteMany();
                await QOTD.create([{storedID: newID}])
            } catch(err) {
                console.error(err)
                process.exit(1);
            }
            return QOTD.find();
        }
    }
}

module.exports = resolvers;