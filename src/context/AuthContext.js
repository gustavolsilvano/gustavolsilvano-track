import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };

    case 'sign':
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
        isLoading: false
      };

    case 'clear_error_message':
      return { ...state, errorMessage: '' };

    case 'signout':
      return { ...state, token: null, errorMessage: '' };

    case 'stopLoading':
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) return dispatch({ type: 'sign', payload: token });
  dispatch({ type: 'stopLoading' });
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.data.token);
    dispatch({ type: 'sign', payload: response.data.data.token });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.data.token);
    dispatch({ type: 'sign', payload: response.data.data.token });
  } catch (error) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '', isLoading: true }
);
