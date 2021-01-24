export const ROUTE_POINT_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

export const ROUTE_POINT_DESTINATIONS = [`Amsterdam`, `Chamonix`, `Geneva`, `London`, `Reykjavik`, `Tokio`, `Paris`, `Los Angeles`];

export const ROUTE_POINT_OPTIONS = [
  {
    name: `Order Uber`,
    forTypes: [`Bus`, `Drive`]
  },
  {
    name: `Add luggage`,
    forTypes: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Flight`]
  },
  {
    name: `Switch to comfort class`,
    forTypes: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Flight`]
  },
  {
    name: `Add meal`,
    forTypes: [`Train`, `Ship`, `Flight`]
  },
  {
    name: `Choose seats`,
    forTypes: [`Flight`, `Restaurant`]
  },
  {
    name: `Travel by train`,
    forTypes: [`Taxi`, `Bus`, `Transport`, `Drive`, `Flight`]
  },
  {
    name: `Rent a car`,
    forTypes: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`]
  },
  {
    name: `Add breakfest`,
    forTypes: [`Check-in`]
  },
  {
    name: `Book Tickets`,
    forTypes: [`Bus`, `Train`, `Ship`, `Flight`]
  },
  {
    name: `Lunch in city`,
    forTypes: [`Check-in`]
  }
];

export const ROUTE_POINT_DESCRIPTION_SENTENCES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

export const ROUTE_POINT_PHOTO_PLACEHOLDER = `http://picsum.photos/248/152?r=`;

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

export const UserAction = {
  UPDATE_ROUTE_POINT: `UPDATE_ROUTE_POINT`,
  DELETE_ROUTE_POINT: `DELETE_ROUTE_POINT`,
  ADD_ROUTE_POINT: `ADD_ROUTE_POINT`
};

export const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};
