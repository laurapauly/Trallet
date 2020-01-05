import GroupSpendings from './GroupSpendings';

test('it groups the spendings correctly', () => {
  const input = [
    {
      title: 'Test',
      amount: '234566',
      date: '2020-01-08',
      location: 'test',
      category: 'food',
      itemId: '1',
      id: 47
    },
    {
      title: 'ewtewtw',
      amount: '1234',
      date: '2020-01-07',
      location: 'fgdrz',
      itemId: '1',
      id: 7
    },
    {
      title: 'dft',
      amount: '12345533',
      date: '2020-01-07',
      location: 'fgdrz',
      itemId: '1',
      id: 7
    }
  ];

  const expected = {
    '2020-01-08': [
      {
        title: 'Test',
        amount: '234566',
        date: '2020-01-08',
        location: 'test',
        category: 'food',
        itemId: '1',
        id: 47
      }
    ],
    '2020-01-07': [
      {
        title: 'ewtewtw',
        amount: '1234',
        date: '2020-01-07',
        location: 'fgdrz',
        itemId: '1',
        id: 7
      },
      {
        title: 'dft',
        amount: '12345533',
        date: '2020-01-07',
        location: 'fgdrz',
        itemId: '1',
        id: 7
      }
    ]
  };

  expect(GroupSpendings(input)).toStrictEqual(expected);
});
