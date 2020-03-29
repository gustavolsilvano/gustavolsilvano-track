import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

import useSaveTrack from '../hooks/useSaveTrack';

import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  // Hooks
  const [saveTrack] = useSaveTrack();

  // Context
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations }
  } = useContext(LocationContext);

  // Function
  const handleSaveTrack = () => {
    saveTrack();
  };

  return (
    <>
      <Spacer>
        {!recording && (
          <Input
            placeholder="Enter name"
            onChangeText={txt => changeName(txt)}
            value={name}
          />
        )}
      </Spacer>
      <Spacer>
        {recording ? (
          <Button onPress={() => stopRecording()} title="Stop" />
        ) : (
          <Button onPress={() => startRecording()} title="Start" />
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Track" onPress={handleSaveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
