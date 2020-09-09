import { createSlice } from '@reduxjs/toolkit';
import { format } from 'utils';

const slice = createSlice({
  name: 'pic',
  initialState: [],
  reducers: {
    updatePic(state, { payload }) {
      return format([payload])[0];
    },
  },
});

const { actions, reducer } = slice;
export const { updatePic } = actions;
export default reducer;
