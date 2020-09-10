import { createSlice } from '@reduxjs/toolkit';
import { format, filterNsfw } from 'utils';

const slice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    updateComments(state, { payload }) {
      const filteredResponse = filterNsfw(payload);
      return format(filteredResponse);
    },
  },
});

const { actions, reducer } = slice;
export const { updateComments } = actions;
export default reducer;
