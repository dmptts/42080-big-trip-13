import Abstract from './abstract.js';

const createRoutePointListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

export default class RoutePointList extends Abstract {
  getTemplate() {
    return createRoutePointListTemplate();
  }
}
