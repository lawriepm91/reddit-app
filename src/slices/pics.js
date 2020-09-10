import { createSlice } from '@reduxjs/toolkit';
import { format, filterNsfw } from 'utils';

const slice = createSlice({
  name: 'pics',
  initialState: [],
  reducers: {
    updatePics(state, { payload }) {
      const filteredResponse = filterNsfw(payload);
      return format(filteredResponse);
    },
  },
});

const { actions, reducer } = slice;
export const { updatePics } = actions;
export default reducer;
