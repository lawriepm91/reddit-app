export default (array, key = 'over_18') => array.filter((item) => !item[key]);
