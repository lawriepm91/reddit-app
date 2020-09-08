import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    updateComments(state, action) {
      return action.payload.map(({ data }) => data);
    }
  }
});

const { actions, reducer } = slice;
export const { updateComments } = actions;
export default reducer;
