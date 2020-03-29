import React, { useEffect, useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';

import { Context as TrackContext } from '../context/TrackContext';

export default ({ navigation }) => {
  // Context
  const { state, fetchTracks } = useContext(TrackContext);

  // Is focused
  const isFocused = useIsFocused();

  // Function
  const handleFetchTracks = async () => {
    await fetchTracks();
  };

  useEffect(() => {
    if (isFocused) handleFetchTracks();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { track: item })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48
  }
});
