const { AuthenticationError } = require("apollo-server-express");
const { Author, Topic, Quote, GenLink, Scoreboard, Score, QOTD, Nugget } = require("../models");

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
        topics: async () => {
            return Topic.find().populate('quotes');
        },
        topicName: async (parent, { name }) => {
            return Topic.findOne({ name }).populate('quotes');
        },
        topicID: async (parent, { topicId }) => {
            return Topic.findOne({ _id: topicId }).populate('quotes');
        },
        nuggets: async () => {
            return Nugget.find().populate('quotes');
        },
        nuggetName: async (parent, { name }) => {
            return Nugget.findOne({ name }).populate('quotes');
        },
        nuggetID: async (parent, { nuggetId }) => {
            return Nugget.findOne({ _id: nuggetId }).populate('quotes');
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