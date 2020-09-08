import { createSlice } from '@reduxjs/toolkit'
import numeral from 'numeral';

const formatSettings = [
  {
    name: 'ups',
    formatter: (value) => numeral(value).format('0.0a')
  },
  {
    name: 'downs',
    formatter: (value) => numeral(value).format('0.0a')
  },
  {
    name: 'num_comments',
    formatter: (value) => numeral(value).format('0.0a')
  },
];

const formatList = (list) => list.map((pic) => {
  const { data } = pic;
  const iterateData = () => Object.entries(data).map(([key, value]) => {
    const setting = formatSettings.find(({ name }) => name === key);
    let updatedValue;
    if (setting) {
      const { formatter } = setting;
      updatedValue = formatter(value);
    }
    return { [key]: updatedValue || value }
  })
  return Object.assign({}, ...iterateData());
}) || [];

const slice = createSlice({
  name: 'pics',
  initialState: [],
  reducers: {
    updatePics(state, action) {
      return formatList(action.payload);
    }
  }
});

const { actions, reducer } = slice;
export const { updatePics } = actions;
export default reducer;
