const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        FT: String
        quotes: [Quote]!
        color: String
        thumbnail: String
        links: [Link]!
        description: String
    }

    type Topic {
        _id: ID
        name: String
        quotes: [Quote]!
    }

    type Quote {
        _id: ID
        quoteText: String
        author: String
        topics: [String]!
        realID: String
        nuggets: [String]!
    }

    type Nugget {
        _id: ID
        name: String
        quotes: [Quote]!
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
        topics: [Topic]
        topicName(name: String): Topic
        topicID(topicId: ID): Topic
        nuggets: [Nugget]
        nuggetName(name: String): Nugget
        nuggetID(nuggetId: ID): Nugget
        quotes: [Quote]
        quote(quoteId: ID): Quote
        quoteR(quoteRealId: String): Quote
        genLinks: [GenLink]
        scoreboard: [Scoreboard]
        scores: [Score]
        QOTD: [QOTD]
    }

    type Mutation {
        modScore(value: Int!, score: Int!): Score
        setQOTD(newID: ID!): [QOTD]
    }

`;

module.exports = typeDefs;