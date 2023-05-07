const { AuthenticationError } = require("apollo-server-express");
const { Author, Topic, Quote, GenLink, Scoreboard, Score, QOTD, Collection, User } = require("../models");

const resolvers = {
    Query: {
        
        // authors
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
        
        // topics
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
            return Topic.findOne({ realID: topicRealId }).populate('quotes');;
        },
        
        // collections
        collections: async () => {
            return Collection.find().populate('quotes');
        },
        collectionName: async (parent, { name }) => {
            return Collection.findOne({ name }).populate('quotes');
        },
        collectionID: async (parent, { collectionId }) => {
            return Collection.findOne({ _id: collectionId }).populate('quotes');
        },
        collectionR: async (parent, { collectionRealId }) => {
            return Collection.findOne({ realID: collectionRealId }).populate('quotes');
        },
        
        // quotes
        quotes: async () => {
            return Quote.find();
        },
        quoteSP: async (parent, { somePeople }) => {
            return Quote.find({somePeople: true})
        },
        quote: async (parent, { quoteId }) => {
            return Quote.findOne({ _id: quoteId })
        },
        quoteR: async (parent, { quoteRealId }) => {
            return Quote.findOne({ realID: quoteRealId })
        },

        // user info
        users: async () => {
            return User.find().populate('bookmarkedQuotes');
        },
        user: async (parent, { username }) => {
          return User.findOne({ username }).populate('bookmarkedQuotes')
        },
        me: async (parent, args, context) => {
          if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('bookmarkedQuotes');
          }
          throw new AuthenticationError('You need to be logged in!');
        },
        
        // misc
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
    }
}

module.exports = resolvers;