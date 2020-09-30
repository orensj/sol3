import gql from 'graphql-tag';
import {Resolvers} from "apollo-client";

const getRandom = (max: number) => Math.floor(Math.random() * max) + 1;

const typeDefs = gql`
  extend type Quadcopter {
    id: ID!,
    name: String,
    launchtime: DateTime,
    isfree: Boolean,
    x: Int,
    y: Int
  }
`;

const resolvers: Resolvers = {
  Quadcopter: {
    id: () => (new Date()).getTime(),
    name: () => `אופק ${getRandom(10)}`,
    launchtime: () => `${getRandom(24).toString().padStart(2, '0')}:${getRandom(60).toString().padStart(2, '0')}`,
    isfree: () => true,
    x: () => getRandom(10),
    y: () => getRandom(10)
  }
};

export {typeDefs, resolvers};
