import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  // State
  const [err, setErr] = useState(false);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      const res = await requestPermissionsAsync();
      if (!res.granted) return setErr(true);
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
    };

    if (shouldTrack) startWatching();
    if (!shouldTrack && subscriber) {
      subscriber.remove();
      subscriber = null;
    }
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [shouldTrack, callback]);

  return [err];
};
