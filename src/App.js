import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import getStore from './redux/store';
import Router from './routes';

const queryClient = new QueryClient();

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const {store, persistor} = getStore();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate
            loading={
              <View className="flex  bg-white flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            }
            persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export default App;
