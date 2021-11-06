const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        FT: String
        quotes: [Quote]!
        color: String
        darkColor: String
        lightColor: String
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
        questions: [Question]!
        scores: [Score]!
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

    type Query {
        authors: [Author]
        authorName(name: String): Author
        authorID(authorId: ID): Author
        topics: [Topic]
        topicName(name: String): Topic
        topicID(topicId: ID): Topic
        quotes: [Quote]
        quote(quoteId: ID): Quote
        genLinks: [GenLink]
        scoreboard: [Scoreboard]
    }

    type Mutation {
        modScoreboard: Scoreboard
    }
`;

module.exports = typeDefs;