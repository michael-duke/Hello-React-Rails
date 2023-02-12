import {
  applyMiddleware,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingReducer from './greeting/greetingSlice';

// Redux store
const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
    },
    middleware: [...getDefaultMiddleware(), logger]
  },
);

export default store;
