import React from "react";
import { gql, useMutation } from "@apollo/client";
import * as UpdateCharacterTypes from "./__generated__/UpdateCharacter";

// To enable auto-update of local cache after mutation, mutation must return the id of the modified entity & the values of the fields that were modified
export const UPDATE_CHARACTER = gql`
  mutation UpdateCharacter($updateCharacterId: ID!, $updateCharacterData: CharacterInput!) {
    updateCharacter(id: $updateCharacterId, data: $updateCharacterData) {
      id
      sideOfTheForce
    }
  }
`;

export const UpdateCharacter = () => {
  const [update, { loading, error }] = useMutation<
    UpdateCharacterTypes.UpdateCharacter,
    UpdateCharacterTypes.UpdateCharacterVariables
  >(UPDATE_CHARACTER);

  const convertToDarkSide = () =>
    update({ variables: { updateCharacterId: `c_2`, updateCharacterData: { sideOfTheForce: `dark` } } });

  const convertToLightSide = () =>
    update({ variables: { updateCharacterId: `c_2`, updateCharacterData: { sideOfTheForce: `light` } } });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <h1>Update Character</h1>
      <button onClick={convertToLightSide}>Convert to the light side</button>
      <button onClick={convertToDarkSide}>Convert to the dark side</button>
    </section>
  );
};
