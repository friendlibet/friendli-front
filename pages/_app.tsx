import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "../styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:8800/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
