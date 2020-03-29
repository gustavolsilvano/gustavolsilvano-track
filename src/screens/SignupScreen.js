import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import useClearErrorMessage from '../hooks/useClearErrorMessage';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

export default ({ navigation }) => {
  // Context
  const { state, signup } = useContext(AuthContext);
  const { errorMessage } = state;

  useClearErrorMessage();

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        onSubmit={signup}
        errorMessage={errorMessage}
        submitButtonText="Sign Up"
      />
      <NavLink
        navigation={navigation}
        text="Already have an account? Sign in instead!"
        routeName="Signin"
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
