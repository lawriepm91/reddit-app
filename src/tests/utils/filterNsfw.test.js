import { filterNsfw } from 'utils';

const pics = [
  {
    id: 1,
    over_18: true,
  },
  {
    id: 2,
    over_18: false,
  },
];

describe('filterNsfw', () => {
  let items;
  beforeEach(() => {
    items = filterNsfw(pics);
  });

  it('returns an array with items where "over_18=false"', () => {
    expect(items).toEqual([
      {
        id: 2,
        over_18: false,
      },
    ]);
  });
});
