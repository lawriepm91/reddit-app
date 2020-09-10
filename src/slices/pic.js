import { createSlice } from '@reduxjs/toolkit';
import { format, filterNsfw } from 'utils';

const slice = createSlice({
  name: 'pic',
  initialState: {},
  reducers: {
    updatePic(state, { payload }) {
      const filteredResponse = filterNsfw([payload])[0];
      return format([filteredResponse])[0];
    },
  },
});

const { actions, reducer } = slice;
export const { updatePic } = actions;
export default reducer;
