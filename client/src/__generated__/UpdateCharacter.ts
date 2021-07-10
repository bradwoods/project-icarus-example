/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CharacterInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCharacter
// ====================================================

export interface UpdateCharacter_updateCharacter {
  __typename: "Character";
  id: string;
  /**
   * Which side of the Force character is aligned with (light or dark)
   */
  sideOfTheForce: string;
}

export interface UpdateCharacter {
  /**
   * Update a characters data
   */
  updateCharacter: UpdateCharacter_updateCharacter | null;
}

export interface UpdateCharacterVariables {
  updateCharacterId: string;
  updateCharacterData: CharacterInput;
}
