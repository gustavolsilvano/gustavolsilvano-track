// import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import useLocation from '../hooks/useLocation';

import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

import { useIsFocused } from '@react-navigation/native';

export default () => {
  // Focused
  const isFocused = useIsFocused();

  const {
    addLocation,
    state: { recording }
  } = useContext(LocationContext);
  console;
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  const shouldTrack = isFocused || recording;

  const [err] = useLocation(shouldTrack, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
