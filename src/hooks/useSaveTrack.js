import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { useNavigation } from '@react-navigation/native';

export default () => {
  // Context
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    clearNameLocations
  } = useContext(LocationContext);

  // Navigation
  const navigation = useNavigation();

  // Function

  const saveTrack = async () => {
    navigation.navigate('Track List');
    await createTrack(name, locations);
    clearNameLocations();
  };

  return [saveTrack];
};
