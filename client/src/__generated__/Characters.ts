/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Characters
// ====================================================

export interface Characters_characters {
  __typename: "Character";
  id: string;
  /**
   * Character's first and last name
   */
  name: string;
  /**
   * Which side of the Force character is aligned with (light or dark)
   */
  sideOfTheForce: string;
}

export interface Characters {
  /**
   * Get a list of available characters
   */
  characters: Characters_characters[];
}
