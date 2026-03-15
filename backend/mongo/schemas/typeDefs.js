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

    type AuthorDetail {
        name: String
        realID: String
    }

    type Topic {
        _id: ID
        name: String
        sortedName: String
        realID: String
        quotes: [Quote]!
        quoteCount: Int
    }

    type TopicDetail {
        name: String
        realID: String
    }

    type Quote {
        _id: ID
        quoteText: String
        author: String
        authorRealID: String
        topics: [String]!
        relatedTopics: [String]!
        unrelatedTopics: [String]!
        topicDetails: [TopicDetail]!
        relatedTopicDetails: [TopicDetail]!
        unrelatedTopicDetails: [TopicDetail]!

        people: [String]!
        things: [String]!
        everywhere: [String]!
        realID: String
        somePeople: Boolean
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
        topicDetails: [TopicDetail]!
    }

    type Tag {
        _id: ID
        tag: String
        sortedName: String
        authors: [String]!
        authorDetails: [AuthorDetail]!
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
    
    type Everywhere {
        _id: ID
        name: String
        sortedName: String
        realID: String
        quotes: [Quote]!
    }

    type Glossary {
        _id: ID
        typing: String
        sortedName: String!
        content: [GlossaryIndex]!
    }

    type GlossaryIndex {
        index: String
        typing: String!
        realID: String
        definition: String
        sortedName: String
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
        topicR(topicRealId: String, offset: Int, limit: Int): Topic
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
        
        everywhereAll: [Everywhere]
        everywhereByLetter(letter: String): [Everywhere]
        everywhereID(everywhereId: ID): Everywhere
        everywhereR(everywhereRealId: String): Everywhere

        quotes: [Quote]
        quoteSP: [Quote]
        quoteResult(input: String): [Quote]
        quoteResultP(input: String, limit: Int): [Quote]
        quote(quoteId: ID): Quote
        quoteR(quoteRealId: String): Quote

        tags: [Tag]
        tagLetter(letter: String): [Tag]
        tagID(tagId: ID): Tag

        glossaryAll: [Glossary]
        glossaryType(typing: String): Glossary

        dailyQuote: [QOTD]
    }
`;

module.exports = typeDefs;