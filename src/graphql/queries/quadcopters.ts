import gql from "graphql-tag";

export interface Quadcopter {
  id: number;
  name: string;
  launchtime: string;
  isfree: boolean;
  x: number;
  y: number;
}

export interface QuadcopterData {
  allQuadcopters: Quadcopter[];
}

export const GET_QUADCOPTERS = gql`
  {
    allQuadcopters {
      id 
      name
      launchtime
      isfree
      x
      y
    }
  }
`;
