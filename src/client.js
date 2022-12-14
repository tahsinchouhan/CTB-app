import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { store } from './redux/store';

const httpLink = createHttpLink({
  // uri: 'https://api.ctbindia.com/',
  uri: 'http://192.168.0.199:4001/',
});

const authLink = setContext((_, props) => {
  // const getValue = await AsyncStorage.getItem('persist:root');
  // const { token = null } = JSON.parse(JSON.parse(getValue).local);
  // const { headers } = props;

  const { headers } = props;
  // get the authentication token from local storage if it exists
  const { local } = store.getState();

  const { token } = local;
  // return the headers to the context so httpLink can read them

  // if operation is google auth then do not add authoization header
  const myHeaders = {
    ...headers,
  };

  if (token !== null) {
    myHeaders.authorization = token ? `Bearer ${token}` : '';
  }

  return {
    headers: myHeaders,
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
