import dayjs from 'dayjs';
import Abstract from './abstract.js';

const getDestinationsString = (routePoints) => {
  const routeDestinations = routePoints.map((routePoint) => routePoint.destination);
  let uniqueDestinations = [];

  for (let destination of routeDestinations) {
    if (!uniqueDestinations.includes(destination)) {
      uniqueDestinations.push(destination);
    }
  }

  return (uniqueDestinations.length === 3) ? `${routeDestinations[0]} &mdash; ${routeDestinations[1]} &mdash; ${routeDestinations[2]}` : `${routeDestinations[0]} &mdash; ... &mdash; ${routeDestinations[routeDestinations.length - 1]}`;
};

const getDate = (routePoints) => {
  const isSameMonth = dayjs(routePoints[0].startTime).month() === dayjs(routePoints[routePoints.length - 1].endTime).month();

  return isSameMonth ? dayjs(routePoints[routePoints.length - 1].times.endTime).format(`DD`) : dayjs(routePoints[routePoints.length - 1].times.endTime).format(`MMM DD`);
};

const createRouteInfoTemplate = (routePoints) => {
  const isRoutePoints = (routePoints.length !== 0);

  routePoints = routePoints.slice().sort((a, b) => a.times.startTime - b.times.startTime);

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${isRoutePoints ? getDestinationsString(routePoints) : ``}</h1>

      <p class="trip-info__dates">${isRoutePoints ? dayjs(routePoints[0].times.startTime).format(`MMM DD`) : ``}&nbsp;&mdash;&nbsp;${isRoutePoints ? getDate(routePoints) : ``}</p>
    </div>
  </section>`;
};

export default class Route extends Abstract {
  constructor(routePoints) {
    super();
    this._routePoints = routePoints;
  }

  getTemplate() {
    return createRouteInfoTemplate(this._routePoints);
  }
}
