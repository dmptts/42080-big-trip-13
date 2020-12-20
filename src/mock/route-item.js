import dayjs from "dayjs";

const getRandomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getType = () => {
  const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

  return types[getRandomInt(0, types.length - 1)];
};

const getDestination = () => {
  const destinations = [`Amsterdam`, `Chamonix`, `Geneva`, `London`, `Reykjavik`, `Tokio`, `Paris`, `Los Angeles`];

  return destinations[getRandomInt(0, destinations.length - 1)];
};

const getOptions = () => {
  const MAX_OPTIONS_QUANTITY = 5;
  const quantity = getRandomInt(0, MAX_OPTIONS_QUANTITY);
  const optionNames = [
    `Order Uber`,
    `Add luggage`,
    `Switch to comfort class`,
    `Add meal`,
    `Choose seats`,
    `Travel by train`,
    `Rent a car`,
    `Add breakfest`,
    `Book Tickets`,
    `Lunch in city`
  ];
  const options = [];

  for (let i = 1; i <= quantity; i++) {
    const randomIndex = getRandomInt(0, optionNames.length - 1);
    const randomPrice = getRandomInt(0, 100) * 5;
    options.push(
        {
          option: optionNames[randomIndex],
          optionPrice: randomPrice
        }
    );
    optionNames.splice(randomIndex, 1);
  }

  return options;
};

const getDescription = () => {
  const MAX_QUANTITY = 5;
  const quantity = getRandomInt(1, MAX_QUANTITY);
  const sentences = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,`Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

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
  const link = `http://picsum.photos/248/152?r=`;
  const photos = [];

  for (let i = 1; i <= quantity; i++) {
    photos.push(`${link}${getRandomInt(0, 9)}`);
  }

  return photos;
};

const getTime = () => {
  const startDateShift = getRandomInt(0, 31);
  const endDateShift = startDateShift + getRandomInt(0, 7);
  const startHourShift = getRandomInt(0, 24);
  const endHourShift = getRandomInt(0, 24);
  const startMinuteShift = getRandomInt(0, 60);
  const endMinuteShift = getRandomInt(0, 60);

  const startTime = dayjs().add(startDateShift, `day`).add(startHourShift, `hour`).add(startMinuteShift, `minute`).toDate();
  const endTime = dayjs().add(endDateShift, `day`).add(endHourShift, `hour`).add(endMinuteShift, `minute`).toDate();

  const getDuration = () => {
    const duration = endTime - startTime;
    const days = Math.floor(duration / 1000 / 60 / 60 / 24);
    const hours = Math.floor((duration - (days * 1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    const minutes = Math.floor((duration - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 * 60)) / 1000 / 60);

    return {
      days,
      hours,
      minutes
    };
  };

  return {
    startTime,
    endTime,
    duration: getDuration()
  };
};

export const generateRouteItem = () => {
  return {
    type: getType(),
    destination: getDestination(),
    options: getOptions(),
    description: getDescription(),
    photos: getPhotos(),
    time: getTime(),
    isFavorite: Boolean(getRandomInt())
  };
};
