import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { RestLink } from 'apollo-link-rest';

// Set `RestLink` with your endpoint



export const { getClient } = registerApolloClient(() => {
const restLink = new RestLink({ uri: "https://swapi.dev/api/" });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: restLink
  });
})