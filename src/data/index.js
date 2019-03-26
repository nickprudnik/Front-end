const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onGet('/tickets').reply(200, {
  tickets: [
    {
      id: 1,
      dateFrom: '2019-03-25',
      dateTo: '2019-03-27',
      startTime: '6.30',
      endTime: '8.45',
      fromCountry: 'Belarus',
      toCountry: 'Germany',
      price: '125',
      planeId: 1,
    },
    {
      id: 2,
      date: '16, FEB',
      startTime: '6.30',
      endTime: '8.45',
      fromCountry: 'Germany',
      toCountry: 'Belarus',
      price: '125',
      planeId: 1,
    },
    {
      id: 3,
      date: '16, FEB',
      startTime: '6.30',
      endTime: '8.45',
      fromCountry: 'Germany',
      toCountry: 'Netherlands',
      price: '125',
      planeId: 1,
    },
    {
      id: 4,
      date: '16, FEB',
      startTime: '6.30',
      endTime: '8.45',
      fromCountry: 'Netherlands',
      toCountry: 'Germany',
      price: '125',
      planeId: 1,
    }
  ],
});

//добавитб свободные места, места, (эконом/бизнес классы)

mock.onPost('/search-request').reply(() => axios.get('/tickets'));

mock.onGet('/airports').reply(200, {
  airports: [{ name: 'Belarus' },
    { name: 'Germany' },
    { name: 'Netherlands' },
    { name: 'Poland' },
    { name: 'Ukrain' },
    { name: 'Litva' },
    { name: 'Latvia' },
    { name: 'Estonia' },
    { name: 'Russia' },
  ],
});
// добавить название аэропортов

mock.onGet('/planes').reply(200, [
  {
    rows: 15,
    location: [1, 1, 1, 0, 1, 1, 1],
  },
  {
    rows: 15,
    location: [1, 1, 0, 1, 1, 0, 1, 1],
  },
  {
    rows: 15,
    location: [1, 0, 1, 1, 1, 0, 1],
  },
]);

mock.onGet('/luggage-types').reply(200, {
  luggage: [
    {
      "kg": "10",
      "price": "9"
    },
    {
      "kg": "20",
      "price": "15"
    },
    {
      "kg": "30",
      "price": "21"
    },
    {
      "kg": "free carry-on bag",
      "price": "0"
    }
  ]
})

export default axios;
