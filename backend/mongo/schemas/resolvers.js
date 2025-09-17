const { Author, Topic, Quote, Collection, QOTD, Tag, People } = require("../models");

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
        authorLetter: async (parent, { letter }) => {
            return Author.find({lastName: {$regex: '^' + letter, $options: 'i'}})
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
        topicLetter: async (parent, { letter }) => {
            return Topic.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
        },
        
        // collections
        collections: async () => {
            return Collection.find();
        },
        collectionName: async (parent, { name }) => {
            return Collection.findOne({ name });
        },
        collectionID: async (parent, { collectionId }) => {
            return Collection.findOne({ _id: collectionId });
        },
        collectionR: async (parent, { collectionRealId }) => {
            return Collection.findOne({ realID: collectionRealId });
        },
        collectionLetter: async (parent, { letter }) => {
            return Collection.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
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
        quoteResult: async (parent, { input }) => {
            return Quote.find({quoteText: {$regex: "^.*" + input + ".*$", $options: 'i'}})
        },

        // tags
        tags: async () => {
            return Tag.find();
        },
        tagLetter: async (parent, { letter }) => {
            return Tag.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
        },
        tagID: async (parent, { tagId }) => {
            return Tag.findOne({ _id: tagId });
        },

        // people
        peoples: async () => {
            return People.find();
        },
        peopleLetter: async (parent, { letter }) => {
            return People.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
        },
        peopleID: async (parent, { peopleId }) => {
            return People.findOne({ _id: peopleId });
        },
        peopleR: async (parent, { peopleRealId }) => {
            return People.findOne({ realID: peopleRealId }).populate('quotes');;
        },

        // QOTD
        dailyQuote: async () => {
            return QOTD.find();
        }
    }
}

module.exports = resolvers;