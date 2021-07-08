import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Characters } from "./Characters";
import { Character } from "./Character";
import { UpdateCharacter } from "./UpdateCharacter";
import "./styles.css";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:4000`,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <Characters />
      <Character />
      <UpdateCharacter />
    </StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
