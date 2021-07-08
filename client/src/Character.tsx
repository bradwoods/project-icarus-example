import React from "react";
import { gql, useQuery } from "@apollo/client";
import * as CharacterTypes from "./__generated__/Character";

export const CHARACTER = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      sideOfTheForce
      droids {
        function
        name
        id
      }
    }
  }
`;

export const Character = () => {
  const { loading, error, data } = useQuery<CharacterTypes.Character>(CHARACTER, {
    variables: {
      characterId: `c_2`,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <h1>Character</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};
