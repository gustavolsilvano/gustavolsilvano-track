import React, { useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Context as AuthContext } from '../context/AuthContext';

export default () => {
  const { clearErrorMessage } = useContext(AuthContext);
  useFocusEffect(
    React.useCallback(() => {
      return () => clearErrorMessage();
    }, [])
  );
};
