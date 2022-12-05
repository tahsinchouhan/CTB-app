import { ApolloProvider } from '@apollo/client';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppProvider } from './AppContext';
import client from './client';
import getStore from './redux/store';
import Router from './routes';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '127860864284-m6f7nb9ui7u1tdbgi45rsl07rjj4950v.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

const queryClient = new QueryClient();

const { store, persistor } = getStore();

const App = () => (
  <GestureHandlerRootView style={styles.container}>
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
            <AppProvider>
              <Router />
            </AppProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ApolloProvider>
  </GestureHandlerRootView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
