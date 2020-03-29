import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';

export default ({ route }) => {
  const { track } = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.text}>{track.name}</Text>
      <Spacer>
        <MapView
          style={styles.map}
          initialRegion={{
            ...track.locations[0].coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        >
          <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48
  },
  map: {
    height: 300
  }
});
