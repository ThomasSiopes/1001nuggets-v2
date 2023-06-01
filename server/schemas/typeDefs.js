const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        lastName: String
        FT: String
        quotes: [Quote]!
        color: String
        thumbnail: String
        links: [Link]!
        description: String
        realID: String
    }

    type Topic {
        _id: ID
        name: String
        sortedName: String
        realID: String
        similarTopics: [String]!
        quotes: [Quote]!
    }

    type Quote {
        _id: ID
        quoteText: String
        author: String
        topics: [String]!
        realID: String
        collections: [String]!
        nuggets: [String]!
        somePeople: Boolean
    }

    type Collection {
        _id: ID
        name: String
        realID: String
        topics: [String]!
    }

    type Link {
        type: String
        link: String
    }

    type Query {
        authors: [Author]
        authorName(name: String): Author
        authorID(authorId: ID): Author
        authorR(authorRealId: String): Author
        
        topics: [Topic]
        topicName(name: String): Topic
        topicID(topicId: ID): Topic
        topicR(topicRealId: String): Topic
        topicLetter(letter: String): [Topic]
        
        collections: [Collection]
        collectionName(name: String): Collection
        collectionID(collectionId: ID): Collection
        collectionR(collectionRealId: String): Collection
        
        quotes: [Quote]
        quoteSP: [Quote]
        quote(quoteId: ID): Quote
        quoteR(quoteRealId: String): Quote
    }
`;

module.exports = typeDefs;