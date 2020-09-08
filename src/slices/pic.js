import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'pics',
    initialState: [],
    reducers: {
      updatePic(state, action) {
        const pic = action.payload[0].data.children[0];
        const comments = action.payload[1].data.children;
        return { pic, comments };
      }
    }
  });
  
  const { actions, reducer } = slice;
  export const { updatePic } = actions;
  export default reducer;
  