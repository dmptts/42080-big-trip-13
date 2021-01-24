import dayjs from 'dayjs';
import {getRandomInt} from '../utils/common.js';
import {ROUTE_POINT_TYPES, ROUTE_POINT_DESTINATIONS, ROUTE_POINT_OPTIONS, ROUTE_POINT_DESCRIPTION_SENTENCES, ROUTE_POINT_PHOTO_PLACEHOLDER} from '../const.js';

export const getId = () => Date.now() + parseInt(Math.random() * 10000, 10);

export const BLANK_ROUTE_POINT = {
  type: `Flight`,
  destination: ``,
  options: [],
  description: ``,
  photos: [],
  times: {},
  price: null,
  isFavorite: false
};

export const getOptions = (type) => {
  const options = [];
  const randomPrice = getRandomInt(0, 20) * 5;

  for (let i = 0; i < ROUTE_POINT_OPTIONS.length; i++) {
    if (ROUTE_POINT_OPTIONS[i].forTypes.indexOf(type) !== -1) {
      options.push(
          {
            optionName: ROUTE_POINT_OPTIONS[i].name,
            optionPrice: randomPrice,
            isSelected: Boolean(getRandomInt(0, 1))
          }
      );
    }
  }

  return options;
};

export const getDescription = () => {
  const MAX_QUANTITY = 5;
  const quantity = getRandomInt(1, MAX_QUANTITY);
  const sentences = ROUTE_POINT_DESCRIPTION_SENTENCES.slice();

  let description = ``;

  for (let i = 1; i <= quantity; i++) {
    const randomIndex = getRandomInt(0, sentences.length - 1);
    description += (i === 1) ? sentences[randomIndex] : ` ` + sentences[randomIndex];
    sentences.splice(randomIndex, 1);
  }

  return description;
};

export const getPhotos = () => {
  const MAX_QUANTITY = 4;
  const quantity = getRandomInt(1, MAX_QUANTITY);
  const link = ROUTE_POINT_PHOTO_PLACEHOLDER;
  const photos = [];

  for (let i = 1; i <= quantity; i++) {
    photos.push(`${link}${getRandomInt(0, 9)}`);
  }

  return photos;
};

const getTimes = () => {
  const MAX_MINUTES_GAP = 2160;

  const startTime = dayjs().add(getRandomInt(1, MAX_MINUTES_GAP / 5) * 5, `minute`).toDate();
  const endTime = dayjs(startTime).add(getRandomInt(1, MAX_MINUTES_GAP / 5) * 5, `minute`).toDate();

  return {
    startTime,
    endTime,
  };
};

export const generateRoutePoint = () => {
  const type = ROUTE_POINT_TYPES[getRandomInt(0, ROUTE_POINT_TYPES.length - 1)];

  return {
    id: getId(),
    type,
    destination: ROUTE_POINT_DESTINATIONS[getRandomInt(0, ROUTE_POINT_DESTINATIONS.length - 1)],
    options: getOptions(type),
    description: getDescription(),
    photos: getPhotos(),
    times: getTimes(),
    price: getRandomInt(0, 20) * 5,
    isFavorite: Boolean(getRandomInt())
  };
};
