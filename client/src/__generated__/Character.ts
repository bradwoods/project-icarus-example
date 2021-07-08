/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Character
// ====================================================

export interface Character_character_droids {
  __typename: "Droid";
  /**
   * Droid's primary function
   */
  function: string;
  /**
   * Name of droid
   */
  name: string;
  id: string;
}

export interface Character_character {
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
  /**
   * Droids character has owned at some point in their life
   */
  droids: (Character_character_droids | null)[];
}

export interface Character {
  /**
   * Get a details of a character
   */
  character: Character_character | null;
}

export interface CharacterVariables {
  characterId: string;
}
