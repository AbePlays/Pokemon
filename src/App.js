import React from "react";
import ApolloClient from "apollo-boost";

export function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh"
  });
  return <p>I am a pokemon</p>;
}
