import React from 'react';
import createStoreProvider from './src/context/createStoreProvider';

import Navigator from './src/navigator';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

const StoreProvider = createStoreProvider([
  AuthProvider,
  LocationProvider,
  TrackProvider
]);

const App = () => {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
};

export default App;
