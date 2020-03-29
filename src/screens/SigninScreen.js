import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import useClearErrorMessage from '../hooks/useClearErrorMessage';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

export default ({ navigation }) => {
  // Context
  const { state, signin, tryLocalSignin } = useContext(AuthContext);
  const { errorMessage } = state;

  useClearErrorMessage();

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        onSubmit={signin}
        errorMessage={errorMessage}
        submitButtonText="Sign In"
      />
      <NavLink
        navigation={navigation}
        text="Don't have an account? Sign up instead!"
        routeName="Signup"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150
  }
});
