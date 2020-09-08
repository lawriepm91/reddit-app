import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    updateComments(state, action) {
      return action.payload;
    }
  }
});

const { actions, reducer } = slice;
export const { updateComments } = actions;
export default reducer;
