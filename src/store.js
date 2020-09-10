import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import picsReducer from 'slices/pics';
import picReducer from 'slices/pic';
import commentsReducer from 'slices/comments';

const middleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const reducer = {
  pics: picsReducer,
  pic: picReducer,
  comments: commentsReducer,
};

export default configureStore({ reducer, middleware });