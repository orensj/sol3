import gql from 'graphql-tag';
export const ADOPT = gql`
  mutation adopt($adopterId: Int!, $adopteeId: Int!) {
    adopt(adopteeId: $adopteeId, adopterId: $adopterId ) {
        id
    }

  }
`;
