import { createSlice } from '@reduxjs/toolkit'
import { format } from 'utils'

const slice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    updateComments(state, { payload }) {
      return format(payload);
    }
  }
});

const { actions, reducer } = slice;
export const { updateComments } = actions;
export default reducer;
