import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import getStore from './redux/store';

const { store } = getStore();

const httpLink = createHttpLink({
  uri: 'https://api.ctbindia.com/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const {
    local: { token = null },
  } = store.getState();
  console.log('token', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
