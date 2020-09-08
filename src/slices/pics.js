import { createSlice } from '@reduxjs/toolkit'
import { format } from 'utils'

const slice = createSlice({
  name: 'pics',
  initialState: [],
  reducers: {
    updatePics(state, action) {
      return format(action.payload);
    }
  }
});

const { actions, reducer } = slice;
export const { updatePics } = actions;
export default reducer;
