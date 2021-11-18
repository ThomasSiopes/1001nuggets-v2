import { gql } from "@apollo/client";

export const QUERY_AUTHOR_ALL = gql`
    query getAllAuthors {
        authors {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
            thumbnail
            links {
                type
                link
            }
            description
        }
    }
`;

export const QUERY_AUTHOR_NAME = gql`
    query getAuthorByName($name: String!) {
        authorName (name: $name){
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
            thumbnail
            links {
                type
                link
            }
            description
        }
    }
`;

export const QUERY_AUTHOR_ID = gql`
    query getAuthorById($authorId: ID!) {
        authorID (authorId: $authorId){
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
            thumbnail
            links {
                type
                link
            }
            description
        }
    }
`;

export const QUERY_TOPIC_ALL = gql`
    query getAllTopics {
        topics {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
        }
    }
`;

export const QUERY_TOPIC_NAME = gql`
    query topicName($name: String!) {
        topicName(name: $name) {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
        }
    }
`;

export const QUERY_TOPIC_ID = gql`
    query topicId($topicId: ID!) {
        topicID(topicId: $topicId) {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
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