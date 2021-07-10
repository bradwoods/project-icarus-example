import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    "Get a list of available characters"
    characters: [Character!]!
    "Get a details of a character"
    character(id: ID!): Character
  }

  type Mutation {
    "Update a characters data"
    updateCharacter(id: ID!, data: CharacterInput!): Character
  }

  "A character from Star Wars"
  type Character {
    id: ID!
    "Character's first and last name"
    name: String!
    "Which side of the Force character is aligned with (light or dark)"
    sideOfTheForce: String!
    "Droids character has owned at some point in their life"
    droids: [Droid]!
  }

  "A droid from Star Wars"
  type Droid {
    id: ID!
    "Name of droid"
    name: String!
    "Droid's primary function"
    function: String!
  }

  "Character properties that can be changed"
  input CharacterInput {
    "Character's first and last name"
    name: String
    "Which side of the Force character is aligned with (light or dark)"
    sideOfTheForce: String
    "Droid Ids the character has owned at some point in their life"
    droids: [String]
  }
`;
