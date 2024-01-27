import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import App from './App';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem('accessToken');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

const httpLink = new HttpLink({
    uri: '/api/graphql', 
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

export const ApolloWrapper = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);