const { Author, Topic, Quote, Collection, QOTD, Tag, People, Things, Everywhere } = require("../models");

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
        topicR: async (parent, { topicRealId, offset=0, limit=9 }) => {
            const topic = await Topic.findOne({realID: topicRealId}).lean();
            if(!topic) return null;

            const quoteCount = topic.quotes.length;
            const pageIds = topic.quotes.slice(offset, offset + limit);
            const quotes = await Quote.find({_id: { $in: pageIds }});

            return {...topic, quotes, quoteCount};

            // return Topic.findOne({ realID: topicRealId }).populate('quotes');;
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
        peopleAll: async () => {
            return People.find().populate('quotes');
        },
        peopleByLetter: async (parent, { letter }) => {
            return People.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
        },
        peopleID: async (parent, { peopleId }) => {
            return People.findOne({ _id: peopleId });
        },
        peopleR: async (parent, { peopleRealId }) => {
            return People.findOne({ realID: peopleRealId }).populate('quotes');
        },

        // things
        thingAll: async () => {
            return Things.find().populate('quotes');
        },
        thingByLetter: async (parent, { letter }) => {
            return Things.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
        },
        thingID: async (parent, { thingId }) => {
            return Things.findOne({ _id: thingId });
        },
        thingR: async (parent, { thingRealId }) => {
            return Things.findOne({ realID: thingRealId }).populate('quotes');
        },

        // things
        everywhereAll: async () => {
            return Everywhere.find().populate('quotes');
        },
        everywhereByLetter: async (parent, { letter }) => {
            return Everywhere.find({sortedName: {$regex: '^' + letter, $options: 'i'}})
        },
        everywhereID: async (parent, { everywhereId }) => {
            return Everywhere.findOne({ _id: everywhereId });
        },
        everywhereR: async (parent, { everywhereRealId }) => {
            return Everywhere.findOne({ realID: everywhereRealId }).populate('quotes');
        },

        // QOTD
        dailyQuote: async () => {
            return QOTD.find();
        }
    },

    Quote: {
        authorRealID: async(parent) => {
            if(!parent.author) return null;
            const author = await Author.findOne(
                { name: parent.author},
                { realID: 1 }
            );
            return author ? author.realID : null;
        },

        topicDetails: async(parent) => {
            if(!parent.topics || parent.topics.length === 0) return [];
            const found = await Topic.find(
                { name: { $in: parent.topics }},
                { name: 1, realID: 1 }
            );
            return parent.topics.map(name => {
                const t = found.find(t => t.name === name);
                return { name, realID: t ? t.realID : null };
            });
        },

        relatedTopicDetails: async(parent) => {
            if(!parent.relatedTopics || parent.relatedTopics.length === 0) return [];
            const found = await Topic.find(
                { name: { $in: parent.relatedTopics }},
                { name: 1, realID: 1 }
            );
            return parent.relatedTopics.map(name=> {
                const t = found.find(t => t.name === name);
                return { name, realID: t ? t.realID : null };
            });
        },

        
        unrelatedTopicDetails: async(parent) => {
            if(!parent.unrelatedTopics || parent.unrelatedTopics.length === 0) return [];
            const found = await Topic.find(
                { name: { $in: parent.unrelatedTopics }},
                { name: 1, realID: 1 }
            );
            return parent.unrelatedTopics.map(name=> {
                const t = found.find(t => t.name === name);
                return { name, realID: t ? t.realID : null };
            });
        },
    },

    Collection: {
        topicDetails: async(parent) => {
            if(!parent.topics || parent.topics.length === 0) return [];
            const found = await Topic.find(
                { name: { $in: parent.topics }},
                { name: 1, realID: 1 }
            );
            return parent.topics.map(name => {
                const t = found.find(t => t.name === name);
                return { name, realID: t ? t.realID : null };
            });
        },
    }
}

module.exports = resolvers;