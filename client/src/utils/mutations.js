import { gql } from "@apollo/client";

export const ADD_SCOREBOARD = gql`
    mutation addScoreboard {
        modScoreboard {
            scores {
                name
                value
                score
            }
        }
    }
`;