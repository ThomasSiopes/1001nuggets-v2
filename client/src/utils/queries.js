import { gql } from "@apollo/client";

export const QUERY_AUTHOR_ALL = gql`
    query getAllAuthors {
        authors {
            _id
            name
            lastName
            quotes {
                _id
                quoteText
                author
                topics
                realID
            }
            thumbnail
            links {
                type
                link
            }
            description
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
                author
                topics
                realID
            }
            thumbnail
            links {
                type
                link
            }
            description
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
                author
                topics
                realID
            }
            thumbnail
            links {
                type
                link
            }
            description
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
                author
                topics
                realID
            }
            thumbnail
            links {
                type
                link
            }
            description
            realID
        }
    }
`;

export const QUERY_TOPIC_ALL = gql`
    query getAllTopics {
        topics {
            _id
            name
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
            }
        }
    }
`;

export const QUERY_TOPIC_NAME = gql`
    query topicName($name: String!) {
        topicName(name: $name) {
            _id
            name
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
            }
        }
    }
`;

export const QUERY_TOPIC_ID = gql`
    query topicId($topicId: ID!) {
        topicID(topicId: $topicId) {
            _id
            name
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
            }
        }
    }
`;

export const QUERY_TOPIC_REALID = gql`
    query topicR($topicRealId: String!) {
        topicR(topicRealId: $topicRealId) {
            _id
            name
            realID
            quotes {
                _id
                quoteText
                author
                topics
                realID
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
            collections
        }
    }
`;

export const QUERY_QUOTE_ID = gql`
    query getQuote($quoteId: ID!) {
        quote(quoteId: $quoteId) {
            _id
            quoteText
            author
            topics
            realID
            collections
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
            collections
        }
    }
`;

export const QUERY_COLLECTION_ALL = gql`
    query getAllCollections {
        collections {
            name
            quotes {
                _id
                quoteText
                realID
            }
        }
    }
`;

export const QUERY_LINKS = gql`
    query getAllLinks {
        genLinks {
            type
            text
            link
        }
    }
`;

export const QUERY_SCOREBOARD = gql`
    query getScoreboard {
        scoreboard {
            _id
            questions {
                text
                choices {
                    name
                    value
                }
            }
        }
    }
`;

export const QUERY_SCORES = gql`
    query getScores {
        scores {
            name
            value
            score
        }
    }
`;

export const GET_QOTD = gql`
    query getQOTD {
        QOTD {
            storedID
        }
    }
`;