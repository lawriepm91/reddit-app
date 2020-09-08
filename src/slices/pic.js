import { createSlice } from '@reduxjs/toolkit';
import { format } from 'utils';

const slice = createSlice({
  name: 'pic',
  initialState: [],
  reducers: {
    updatePic(state, action) {
      return format([action.payload])[0];
    },
  },
});

const { actions, reducer } = slice;
export const { updatePic } = actions;
export default reducer;
