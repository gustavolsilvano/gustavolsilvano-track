import React, { useContext, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer.js';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  // State
  const [center, setCenter] = useState(false);

  // Context
  const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        region={
          center
            ? {
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }
            : null
        }
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
      </MapView>
      <Spacer>
        <Button title="Center" onPress={() => setCenter(!center)} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
