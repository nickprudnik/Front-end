const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);

mock.onGet("/tickets").reply(200, {
  tickets: [
    {
      id: 1,
      dateFrom: "2019-03-25",
      dateTo: "2019-03-27",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Minsk-1 Airport(Minsk, BLR)",
      toCountry: "Schönefeld Airport(Berlin,DE)",
      price: "125",
      planeId: 1
    },
    {
      id: 2,
      dateFrom: "2019-03-28",
      dateTo: "2019-03-30",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Tegel Airport(Berlin,DE)",
      toCountry: "Minsk-1 Airport(Minsk, BLR)",
      price: "125",
      planeId: 1
    },
    {
      id: 3,
      dateFrom: "2019-03-28",
      dateTo: "2019-03-30",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Minsk-1 Airport(Minsk, BLR)",
      toCountry: "Tegel Airport(Berlin,DE)",
      price: "125",
      planeId: 1
    },
    {
      id: 4,
      dateFrom: "2019-03-28",
      dateTo: "2019-03-30",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Schönefeld Airport(Berlin,DE)",
      toCountry: "Minsk-1 Airport(Minsk, BLR)",
      price: "125",
      planeId: 1
    },
    {
      id: 5,
      dateFrom: "2019-05-04",
      dateTo: "2019-06-07",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Schönefeld Airport(Berlin,DE)",
      toCountry: "Schiphol Airport(Amsterdam, NLD)",
      price: "125",
      planeId: 1
    },
    {
      id: 6,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Minsk-1 Airport(Minsk, BLR)",
      toCountry: "Schiphol Airport(Amsterdam, NLD)",
      price: "125",
      planeId: 1
    },
    {
      id: 7,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Schiphol Airport(Amsterdam, NLD)",
      toCountry: "Minsk-1 Airport(Minsk, BLR)",
      price: "125",
      planeId: 1
    },
    {
      id: 8,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Borispol Airoport(Kiev,UA)",
      toCountry: "Chopin Airport(Warsaw,PL)",
      price: "125",
      planeId: 1
    },
    {
      id: 9,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Borispol Airoport(Kiev,UA)",
      toCountry: "Minsk-1 Airport(Minsk, BLR)",
      price: "125",
      planeId: 1
    },
    {
      id: 10,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Minsk-1 Airport(Minsk, BLR)",
      toCountry: "Borispol Airoport(Kiev,UA)",
      price: "125",
      planeId: 1
    },
    {
      id: 11,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Sheremetyevo Airport(Moscow, RUS)",
      toCountry: "Minsk-1 Airport(Minsk, BLR))",
      price: "125",
      planeId: 1
    },
    {
      id: 12,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Vilnius Airport(Vilnius, LT)",
      toCountry: "Tallinn Airport(Tallinn, EE)",
      price: "125",
      planeId: 1
    },
    {
      id: 13,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Riga Airport(Riga, LV)",
      toCountry: "Juliani Airport(Kiev,UA)",
      price: "125",
      planeId: 1
    }
  ]
});

mock.onPost("/search-request").reply(() => axios.get("/tickets"));

mock.onGet("/best_deals").reply(200, {
  bestdeals: [
    {
      id: 1,
      dateFrom: "2019-03-25",
      dateTo: "2019-03-27",
      startTime: "6.30",
      endTime: "8.45",
      fromCountry: "Minsk, BLR",
      toCountry: "Riga, LV",
      price: "$ 70",
      planeId: 1
    },
    {
      id: 2,
      dateFrom: "2019-03-28",
      dateTo: "2019-03-30",
      startTime: "7.30",
      endTime: "9.45",
      fromCountry: "Kiev, UA",
      toCountry: "Warsaw, PL",
      price: "$ 60",
      planeId: 1
    },
    {
      id: 3,
      dateFrom: "2019-03-31",
      dateTo: "2019-04-02",
      startTime: "10.30",
      endTime: "12.45",
      fromCountry: "Moscow, RUS",
      toCountry: "Vilnius, LT",
      price: "$ 65",
      planeId: 1
    },
    {
      id: 4,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "2.30",
      endTime: "6.45",
      fromCountry: "Minsk, BLR",
      toCountry: "Kiev, UA",
      price: "$ 65",
      planeId: 1
    },
    {
      id: 5,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "7.30",
      endTime: "10.45",
      fromCountry: "Kiev, UA",
      toCountry: "Tallinn, EE",
      price: "$ 35",
      planeId: 1
    },
    {
      id: 6,
      dateFrom: "2019-04-02",
      dateTo: "2019-04-05",
      startTime: "1.30",
      endTime: "4.45",
      fromCountry: "Warsaw, PL",
      toCountry: "Amsterdam, NLD",
      price: "$ 40",
      planeId: 1
    }
  ]
});

mock.onPost("/search_bestdeals").reply(() => axios.get("/best_deals"));

mock.onGet("/airports").reply(200, {
  airports: [
    { name: "Tegel Airport(Berlin,DE)" },
    { name: "Schönefeld Airport(Berlin,DE)" },
    { name: "Chopin Airport(Warsaw,PL)" },
    { name: "Borispol Airoport(Kiev,UA)" },
    { name: "Juliani Airport(Kiev,UA)" },
    { name: "Minsk-1 Airport(Minsk, BLR)" },
    { name: "Vilnius Airport(Vilnius, LT)" },
    { name: "Riga Airport(Riga, LV)" },
    { name: "Tallinn Airport(Tallinn, EE)" },
    { name: "Sheremetyevo Airport(Moscow, RUS)" },
    { name: "Domodedovo Airport(Moscow, RUS)" },
    { name: "Schiphol Airport(Amsterdam, NLD)" }
  ]
});

mock.onGet("/news").reply(200, {
  news: [
    {
      id: 1,
      new1: "Brexit",
      about: "Start yout travel from here",
      image:
        "https://github.com/nickprudnik/Front-end/blob/test/src/components/carousel/Images/MINSK2.png?raw=true"
    },
    {
      id: 2,
      new1: "Minsk",
      about: "New travel regulations for UK passport holders",
      image:
        "https://github.com/nickprudnik/Front-end/blob/test/src/components/carousel/Images/PASSPORT.jpg?raw=true"
    },
    {
      id: 3,
      new1: "Your luggage",
      about: "New rules from 03/25/2019",
      image:
        "https://github.com/nickprudnik/Front-end/blob/test/src/components/carousel/Images/LUGGAGE.png?raw=true"
    }
  ]
});

mock.onPost("/latest_news").reply(() => axios.get("/news"));

mock.onGet("/planes").reply(200, [
  {
    rows: 15,
    location: [1, 1, 1, 0, 1, 1, 1]
  },
  {
    rows: 15,
    location: [1, 1, 0, 1, 1, 0, 1, 1]
  },
  {
    rows: 15,
    location: [1, 0, 1, 1, 1, 0, 1]
  }
]);

mock.onGet("/luggage-types").reply(200, {
  luggage: [
    {
      kg: "10",
      price: "9"
    },
    {
      kg: "20",
      price: "15"
    },
    {
      kg: "30",
      price: "21"
    },
    {
      kg: "free carry-on bag",
      price: "0"
    }
  ]
});

export default axios;
