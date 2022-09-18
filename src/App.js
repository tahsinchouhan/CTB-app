import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import getStore from './redux/store';
import Router from './routes';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

const {store, persistor} = getStore();
const App = () => {
  return (
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
  );
};

export default App;
