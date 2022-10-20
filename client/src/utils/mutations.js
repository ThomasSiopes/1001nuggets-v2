import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const MOD_SCORE = gql`
    mutation modScore($value: Int!, $score: Int!) {
        modScore(value: $value, score: $score) {
            name
            value
            score
        }
    }
`;

export const SET_QOTD = gql`
    mutation setQOTD($newID: ID!) {
        setQOTD(newID: $newID) {
            storedID
        }
    }
`;