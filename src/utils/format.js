import moment from 'moment';
import numeral from 'numeral';

const settings = [
  {
    name: 'ups',
    formatter: (value) => numeral(value).format('0.a')
  },
  {
    name: 'downs',
    formatter: (value) => numeral(value).format('0.a')
  },
  {
    name: 'num_comments',
    formatter: (value) => numeral(value).format('0.a')
  },
  {
    name: 'created_utc',
    formatter: (value) => moment(value * 1000).fromNow()
  }
];

export default (array) => array.map((item) => {
    const formatted = () => Object.entries(item).map(([key, value]) => {
      const setting = settings.find(({ name }) => name === key);
      return {
        [key]: (setting) ? setting.formatter(value) : value,
      }
    });
    return Object.assign({}, ...formatted());
  });