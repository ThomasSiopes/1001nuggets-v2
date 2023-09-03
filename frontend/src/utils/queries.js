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
            quotes {
                _id
                quoteText
                collections
                author
                topics
                realID
                relatedTopics
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
            quotes {
                _id
                quoteText
                collections
                author
                topics
                realID
                relatedTopics
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
            quotes {
                _id
                quoteText
                collections
                author
                topics
                realID
                relatedTopics
            }
            realID
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
                collections
                author
                topics
                realID
                somePeople
                relatedTopics
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
                collections
                author
                topics
                realID
                somePeople
                relatedTopics
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
                collections
                author
                topics
                realID
                somePeople
                relatedTopics
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
            collections
            author
            topics
            realID
            somePeople
            relatedTopics
        }
    }
`;

export const QUERY_QUOTE_SP = gql`
    query getQuoteSP {
        quoteSP {
            _id
            quoteText
            collections
            author
            topics
            realID
            somePeople
            relatedTopics
        }
    }
`;

export const QUERY_QUOTE_RESULT = gql`
    query getQuoteResult($input: String!) {
        quoteResult(input: $input) {
            _id
            quoteText
            collections
            author
            topics
            realID
            relatedTopics
        }
    }
`

export const QUERY_QUOTE_ID = gql`
    query getQuote($quoteId: ID!) {
        quote(quoteId: $quoteId) {
            _id
            quoteText
            collections
            author
            topics
            realID
            somePeople
            relatedTopics
        }
    }
`;

export const QUERY_QUOTE_REALID = gql`
    query getQuoteR($quoteRealId: String!) {
        quoteR(quoteRealId: $quoteRealId) {
            _id
            quoteText
            collections
            author
            topics
            realID
            somePeople
            relatedTopics
        }
    }
`;

export const QUERY_COLLECTION_ALL = gql`
    query getAllCollections {
        collections {
            name
            realID
            sortedName
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
            quotes {
                _id
                quoteText
                collections
                author
                topics
                realID
                somePeople
                relatedTopics
            }
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
          quotes {
            _id
          }
        }
    }
`;