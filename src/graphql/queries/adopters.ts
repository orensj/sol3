import gql from 'graphql-tag';
import {PetType} from './animal'

export interface Adopter{
    id: number;
    name: string;
    preferred: PetType;
    secondpreferred: PetType;
    isvalid: Boolean;
  
}

export interface AdoptersData {
    adopters: Adopter[];
}

export const GET_ADOPTERS = gql`
query{
    adopters {
      id
      preferred{
        code
        description
        id
      }
      secondpreferred{
        id
        code
        description
      }
      name
      isvalid
    }
  }`