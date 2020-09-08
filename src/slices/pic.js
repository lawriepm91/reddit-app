import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'pic',
    initialState: [],
    reducers: {
      updatePic(state, action) {
        return action.payload;
      }
    }
  });
  
  const { actions, reducer } = slice;
  export const { updatePic } = actions;
  export default reducer;
  