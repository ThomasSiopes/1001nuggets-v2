import { gql } from "@apollo/client";

export const QUERY_AUTHOR_ALL = gql`
    query getAllAuthors {
        authors {
            _id
            name
            lastName
            quotes {
                _id
            }
            realID
        }
    }
`;

export const QUERY_AUTHOR_NAME = gql`
    query getAuthorByName($name: String!) {
        authorName (name: $name){
            _id
            name
            lastName
            relatedAuthors
            quotes {
                _id
                quoteText
                author
                topics
                realID
                relatedTopics
                unrelatedTopics
                censors
            }
            realID
        }
    }
`;

export const QUERY_AUTHOR_ID = gql`
    query getAuthorById($authorId: ID!) {
        authorID (authorId: $authorId){
            _id
            name
            lastName
            realtedAuthors
            quotes {
                _id
                quoteText
                author
                topics
                realID
                relatedTopics
                unrelatedTopics
                censors
            }
            realID
        }
    }
`;

export const QUERY_AUTHOR_REALID = gql`
    query getAuthorR($authorRealId: String!) {
        authorR (authorRealId: $authorRealId){
            _id
            name
            lastName
            relatedAuthors
            quotes {
                _id
                quoteText
                author
                topics
                realID
                relatedTopics
                unrelatedTopics
                censors
            }
            realID
        }
    }
`;

export const QUERY_AUTHOR_LETTER = gql`
    query authorLetter($letter: String!) {
        authorLetter(letter: $letter) {
          _id
          name
          realID
          lastName
          relatedAuthors
          quotes {
            _id
          }
        }
    }
`;

export const QUERY_TOPIC_ALL = gql`
    query getAllTopics {
        topics {
            _id
            name
            sortedName
            realID
            quotes {
                _id
                relatedTopics
                unrelatedTopics
            }
        }
    }
`;

export const QUERY_TOPIC_NAME = gql`
    query topicName($name: String!) {
        topicName(name: $name) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
                somePeople
                relatedTopics
                unrelatedTopics
                censors
            }
        }
    }
`;

export const QUERY_TOPIC_ID = gql`
    query topicId($topicId: ID!) {
        topicID(topicId: $topicId) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
                somePeople
                relatedTopics
                unrelatedTopics
                censors
            }
        }
    }
`;

export const QUERY_TOPIC_REALID = gql`
    query topicR($topicRealId: String!) {
        topicR(topicRealId: $topicRealId) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
                somePeople
                relatedTopics
                unrelatedTopics
                censors
            }
        }
    }
`;

export const QUERY_TOPIC_LETTER = gql`
    query topicLetter($letter: String!) {
        topicLetter(letter: $letter) {
          _id
          name
          realID
          sortedName
          quotes {
            _id
          }
        }
    }
`;

export const QUERY_QUOTE_ALL = gql`
    query getAllQuotes {
        quotes {
            _id
            quoteText
            author
            topics
            realID
            somePeople
            relatedTopics
            unrelatedTopics
            censors
        }
    }
`;

export const QUERY_QUOTE_SP = gql`
    query getQuoteSP {
        quoteSP {
            _id
            quoteText
            author
            topics
            realID
            somePeople
            relatedTopics
            unrelatedTopics
            censors
        }
    }
`;

export const QUERY_QUOTE_RESULT = gql`
    query getQuoteResult($input: String!) {
        quoteResult(input: $input) {
            _id
            quoteText
            author
            topics
            realID
            relatedTopics
            unrelatedTopics
            censors
        }
    }
`

export const QUERY_QUOTE_ID = gql`
    query getQuote($quoteId: ID!) {
        quote(quoteId: $quoteId) {
            _id
            quoteText
            author
            topics
            realID
            somePeople
            relatedTopics
            unrelatedTopics
            censors
        }
    }
`;

export const QUERY_QUOTE_REALID = gql`
    query getQuoteR($quoteRealId: String!) {
        quoteR(quoteRealId: $quoteRealId) {
            _id
            quoteText
            author
            topics
            realID
            somePeople
            relatedTopics
            unrelatedTopics
            censors
        }
    }
`;

export const QUERY_COLLECTION_ALL = gql`
    query getAllCollections {
        collections {
            _id
            name
            realID
            sortedName
            topics
        }
    }
`;

export const QUERY_COLLECTION_NAME = gql`
    query collectionName($name: String!) {
        collectionName(name: $name) {
            _id
            name
            realID
            sortedName
            topics
        }
    }
`;

export const QUERY_COLLECTION_ID = gql`
    query collectionId($collectionId: ID!) {
        collectionID(collectionId: $collectionId) {
            _id
            name
            realID
            sortedName
            topics
        }
    }
`;

export const QUERY_COLLECTION_REALID = gql`
    query collectionR($collectionRealId: String!) {
        collectionR(collectionRealId: $collectionRealId) {
            _id
            name
            realID
            sortedName
            topics
        }
    }
`;

export const QUERY_COLLECTION_LETTER = gql`
    query collectionLetter($letter: String!) {
        collectionLetter(letter: $letter) {
          _id
          name
          realID
          sortedName
          topics
        }
    }
`;

export const QUERY_TAG_ALL = gql`
    query getTags {
        tags {
            _id
            tag
            authors
            sortedName
        }
    }
`;

export const QUERY_TAG_LETTER = gql`
    query tagLetter($letter: String!) {
        tagLetter(letter: $letter) {
          _id
          tag
          authors
          sortedName
        }
    }
`;

export const QUERY_TAG_ID = gql`
    query getTagById($tagId: ID!) {
        tagID (tagId: $tagId){
            _id
            tag
            authors
            sortedName
        }
    }
`;

export const QUERY_PEOPLE_ALL = gql`
    query getPeoples {
        peopleAll {
            _id
            name
            sortedName
            realID
            quotes {
                _id
            }
        }
    }
`;

export const QUERY_PEOPLE_LETTER = gql`
    query getPeopleByLetter($letter: String!) {
        peopleByLetter(letter: $letter) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
            }
        }
    }
`;

export const QUERY_PEOPLE_ID = gql`
    query getPeopleById($peopleId: ID!) {
        peopleID(peopleId: $peopleId){
            _id
            name
            sortedName
            realID
            quotes {
                _id
                relatedTopics
                unrelatedTopics
            }
        }
    }
`;

export const QUERY_PEOPLE_REALID = gql`
    query peopleR($peopleRealId: String!) {
        peopleR(peopleRealId: $peopleRealId) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
                somePeople
                relatedTopics
                unrelatedTopics
                censors
            }
        }
    }
`;

export const QUERY_THINGS_ALL = gql`
    query getThingss {
        thingAll {
            _id
            name
            sortedName
            realID
            quotes {
                _id
            }
        }
    }
`;

export const QUERY_THING_LETTER = gql`
    query getThingsByLetter($letter: String!) {
        thingByLetter(letter: $letter) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
            }
        }
    }
`;

export const QUERY_THING_ID = gql`
    query getThingById($thingId: ID!) {
        thingID(thingId: $thingId){
            _id
            name
            sortedName
            realID
            quotes {
                _id
                relatedTopics
                unrelatedTopics
            }
        }
    }
`;

export const QUERY_THING_REALID = gql`
    query thingR($thingRealId: String!) {
        thingR(thingRealId: $thingRealId) {
            _id
            name
            sortedName
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
                somePeople
                relatedTopics
                unrelatedTopics
                censors
            }
        }
    }
`;

export const QUERY_QOTD = gql`
    query getQOTD {
        dailyQuote {
            index
        }
    }
`