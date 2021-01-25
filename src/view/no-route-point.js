import Abstract from './abstract.js';

const createNoRoutePointTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class NoRoutePoint extends Abstract {
  getTemplate() {
    return createNoRoutePointTemplate();
  }
}
