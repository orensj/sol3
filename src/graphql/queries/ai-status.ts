import gql from 'graphql-tag';
import {useQuery, QueryHookOptions} from '@apollo/react-hooks';

export interface Status {
  challenge3AiStatus: string;
 
}



const GET_STATUS = gql`
  {
    challenge3AiStatus 
  }
`;

const options: QueryHookOptions = {
  pollInterval: 1000,
};

const useAIStatusQuery = () => {
  return useQuery<Status, {}>(GET_STATUS, options);
};

export {useAIStatusQuery};
