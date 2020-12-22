import dayjs from 'dayjs';
import {getRandomInt} from '../utils.js';
import {ROUTE_POINT_TYPES, ROUTE_POINT_DESTINATIONS, ROUTE_POINT_OPTION_NAMES, ROUTE_POINT_DESCRIPTION_SENTENCES, ROUTE_POINT_PHOTO_PLACEHOLDER} from '../const.js';

const getOptions = () => {
  const MAX_OPTIONS_QUANTITY = 5;
  const quantity = getRandomInt(0, MAX_OPTIONS_QUANTITY);
  const optionNames = ROUTE_POINT_OPTION_NAMES.slice();
  const options = [];

  for (let i = 1; i <= quantity; i++) {
    const randomIndex = getRandomInt(0, optionNames.length - 1);
    const randomPrice = getRandomInt(0, 100) * 5;
    options.push(
        {
          optionName: optionNames[randomIndex],
          optionPrice: randomPrice,
          isSelected: Boolean(getRandomInt(0, 1))
        }
    );
    optionNames.splice(randomIndex, 1);
  }

  return options;
};

const getDescription = () => {
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

const getPhotos = () => {
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
  return {
    type: ROUTE_POINT_TYPES[getRandomInt(0, ROUTE_POINT_TYPES.length - 1)],
    destination: ROUTE_POINT_DESTINATIONS[getRandomInt(0, ROUTE_POINT_DESTINATIONS.length - 1)],
    options: getOptions(),
    description: getDescription(),
    photos: getPhotos(),
    times: getTimes(),
    price: getRandomInt(0, 20) * 5,
    isFavorite: Boolean(getRandomInt())
  };
};
