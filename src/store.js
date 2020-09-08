import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import picsReducer from 'slices/pics';
import picReducer from 'slices/pic';

const middleware = getDefaultMiddleware({ serializableCheck: false });

const reducer = {
  pics: picsReducer,
  pic: picReducer,
};

export default configureStore({ reducer, middleware });