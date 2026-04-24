const { Author, Topic, Quote, Collection, QOTD, Tag, People, Things, Everywhere, Glossary } = require("../models");

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
            return Author.find({lastName: {$regex: '^' + letter, $options: 'i'}}).populate('quotes');
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
            return Topic.find({sortedName: {$regex: '^' + letter, $options: 'i'}}).populate('quotes');
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
            return Collection.find({sortedName: {$regex: '^' + letter, $options: 'i'}});
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
            const sanitized = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return Quote.find({quoteText: {$regex: sanitized, $options: 'i'}})
        },
        quoteResultP: async (parent, { input, limit }) => {
            const sanitized = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return Quote.find({quoteText: {$regex: sanitized, $options: 'i'}}).limit(limit);
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

        // places
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

        // glossary
        glossaryAll: async () => {
            return Glossary.find();
        },

        glossaryType: async (parent, {typing}) => {
            return Glossary.findOne({typing: typing});
        },

        // QOTD
        dailyQuote: async () => {
            return QOTD.find();
        }
    },

    Quote: {
        authorRealID: async(parent, _args, context) => {
            if(!parent.author) return null;
            const author = await context.loaders.authorByName.load(parent.author);
            return author ? author.realID : null;
        },

        topicDetails: async (parent, _args, context) => {
        if (!parent.topics || parent.topics.length === 0) return [];
        const results = await Promise.all(
            parent.topics.map(name => context.loaders.topicByName.load(name))
        );
        return parent.topics.map((name, i) => ({
            name,
            realID: results[i] ? results[i].realID : null,
        }));
    },

    relatedTopicDetails: async (parent, _args, context) => {
        if (!parent.relatedTopics || parent.relatedTopics.length === 0) return [];
        const results = await Promise.all(
            parent.relatedTopics.map(name => context.loaders.topicByName.load(name))
        );
        return parent.relatedTopics.map((name, i) => ({
            name,
            realID: results[i] ? results[i].realID : null,
        }));
    },

    unrelatedTopicDetails: async (parent, _args, context) => {
        if (!parent.unrelatedTopics || parent.unrelatedTopics.length === 0) return [];
        const results = await Promise.all(
            parent.unrelatedTopics.map(name => context.loaders.topicByName.load(name))
        );
        return parent.unrelatedTopics.map((name, i) => ({
            name,
            realID: results[i] ? results[i].realID : null,
        }));
    },
    },

    Tag: {
        authorDetails: async(parent) => {
            if(!parent.authors || parent.authors.length === 0) return [];
            const found = await Author.find(
                {name: {$in: parent.authors}},
                {name: 1, realID: 1}
            );
            return parent.authors.map(name => {
                const a = found.find(a => a.name === name);
                return { name, realID: a ? a.realID : null};
            });
        }  
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
    },

    // Glossary: {
    //     content: (parent) => {
    //         return parent.content.map(item => ({
    //         ...item.toObject ? item.toObject() : item,
    //         typing: parent.typing
    //         }));
    //     }
    // },

    GlossaryIndex: {
        realID: async(parent) => {
            if(!parent.index) return "";
            
            let found;
            switch(parent.typing){
                case "topics": {
                    found = await Topic.findOne(
                        { name: parent.index },
                        { realID: 1 }
                    );
                    return (found ? found.realID : parent.index);
                }
                case "collections": {
                    found = await Collection.findOne(
                        { name: parent.index },
                        { realID: 1 }
                    );
                    return (found ? found.realID : parent.index);
                }
                case "everything": {
                    found = await Things.findOne(
                        { name: parent.index },
                        { realID: 1 }
                    );
                    return (found ? found.realID : parent.index);
                }
                case "everyone": {
                    found = await People.findOne(
                        { name: parent.index },
                        { realID: 1 }
                    );
                    return (found ? found.realID : parent.index);
                }
                case "everywhere": {
                    found = await Everywhere.findOne(
                        { name: parent.index },
                        { realID: 1 }
                    );
                    return (found ? found.realID : parent.index);
                }
                default: {
                    return (parent.index);
                }
            }
        },
    },
}

module.exports = resolvers;