import React from 'react';
import MainPage from './pages/MainPage/MainPage';

import { ApolloClient, InMemoryCache } from '@apollo/client';

import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    </>
  );
}

export default App;
