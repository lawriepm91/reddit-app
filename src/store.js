import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import picsReducer from 'slices/pics';

const middleware = getDefaultMiddleware({ serializableCheck: false });

const reducer = {
  pics: picsReducer,
};

export default configureStore({ reducer, middleware });