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

const createRouteTemplate = (routePoints) => {
  routePoints.sort((a, b) => a.times.startTime - b.times.startTime);

  const isSameMonth = dayjs(routePoints[0].startTime).month() === dayjs(routePoints[routePoints.length - 1].endTime).month();

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${getDestinationsString(routePoints)}</h1>

      <p class="trip-info__dates">${dayjs(routePoints[0].times.startTime).format(`MMM DD`)}&nbsp;&mdash;&nbsp;${isSameMonth ? dayjs(routePoints[routePoints.length - 1].times.endTime).format(`DD`) : dayjs(routePoints[routePoints.length - 1].times.endTime).format(`MMM DD`)}</p>
    </div>
  </section>`;
};

export default class Route extends Abstract {
  constructor(routePoints = null) {
    super();
    this._routePoints = routePoints;
  }

  getTemplate() {
    return createRouteTemplate(this._routePoints);
  }
}
