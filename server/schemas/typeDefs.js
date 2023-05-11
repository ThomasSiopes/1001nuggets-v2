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

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookmarkedQuotes: [Quote]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Link {
        type: String
        link: String
    }

    type GenLink {
        type: String
        text: String
        link: String
    }

    type Scoreboard {
        _id: ID
        questions: [Question]!
    }

    type Question {
        text: String
        choices: [Option]!
    }

    type Score {
        name: String
        value: Int
        score: Int
    }

    type Option {
        name: String
        value: Int
    }

    type QOTD {
        storedID: ID
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
        
        collections: [Collection]
        collectionName(name: String): Collection
        collectionID(collectionId: ID): Collection
        collectionR(collectionRealId: String): Collection
        
        quotes: [Quote]
        quoteSP: [Quote]
        quote(quoteId: ID): Quote
        quoteR(quoteRealId: String): Quote
        
        users: [User]
        user(username: String!): User
        me: User

        genLinks: [GenLink]
        scoreboard: [Scoreboard]
        scores: [Score]
        QOTD: [QOTD]
    }
`;

module.exports = typeDefs;