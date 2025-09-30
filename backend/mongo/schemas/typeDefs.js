const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        lastName: String
        realID: String
        quotes: [Quote]!
        relatedAuthors: [String]!
    }

    type Topic {
        _id: ID
        name: String
        sortedName: String
        realID: String
        quotes: [Quote]!
    }

    type Quote {
        _id: ID
        quoteText: String
        author: String
        topics: [String]!
        people: [String]!
        things: [String]!
        realID: String
        somePeople: Boolean
        relatedTopics: [String]!
        unrelatedTopics: [String]!
        censors: [String]!
    }

    type QOTD {
        index: String
    }

    type Collection {
        _id: ID
        name: String
        sortedName: String
        realID: String
        topics: [String]!
    }

    type Tag {
        _id: ID
        tag: String
        sortedName: String
        authors: [String]!
    }

    type People {
        _id: ID
        name: String
        sortedName: String
        realID: String
        quotes: [Quote]!
    }
    
    type Thing {
        _id: ID
        name: String
        sortedName: String
        realID: String
        quotes: [Quote]!
    }

    type Query {
        authors: [Author]
        authorName(name: String): Author
        authorID(authorId: ID): Author
        authorR(authorRealId: String): Author
        authorLetter(letter: String): [Author]
        
        topics: [Topic]
        topicName(name: String): Topic
        topicID(topicId: ID): Topic
        topicR(topicRealId: String): Topic
        topicLetter(letter: String): [Topic]
        
        collections: [Collection]
        collectionName(name: String): Collection
        collectionID(collectionId: ID): Collection
        collectionR(collectionRealId: String): Collection
        collectionLetter(letter: String): [Collection]
        
        peopleAll: [People]
        peopleByLetter(letter: String): [People]
        peopleID(peopleId: ID): People
        peopleR(peopleRealId: String): People
        
        thingAll: [Thing]
        thingByLetter(letter: String): [Thing]
        thingID(thingId: ID): Thing
        thingR(thingRealId: String): Thing

        quotes: [Quote]
        quoteSP: [Quote]
        quoteResult(input: String): [Quote]
        quote(quoteId: ID): Quote
        quoteR(quoteRealId: String): Quote

        tags: [Tag]
        tagLetter(letter: String): [Tag]
        tagID(tagId: ID): Tag

        dailyQuote: [QOTD]
    }
`;

module.exports = typeDefs;