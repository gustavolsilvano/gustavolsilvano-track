import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as AuthContext } from '../context/AuthContext';

export default () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text style={styles.text}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48
  }
});
