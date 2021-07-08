import React from "react";
import { gql, useQuery } from "@apollo/client";
import * as CharactersTypes from "./__generated__/Characters";

export const CHARACTERS = gql`
  query Characters {
    characters {
      id
      name
    }
  }
`;

export const Characters = () => {
  const { loading, error, data } = useQuery<CharactersTypes.Characters>(CHARACTERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <h1>Characters</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};
