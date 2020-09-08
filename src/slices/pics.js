import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'pics',
  initialState: [],
  reducers: {
    updatePics(state, action) {
      return action.payload;
    }
  }
});

const { actions, reducer } = slice;
export const { updatePics } = actions;
export default reducer;
