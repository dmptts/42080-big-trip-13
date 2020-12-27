import {createElement} from '../utils.js';

const createRoutePointListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

export default class RoutePointList {
  constructor() {
    this._elem = null;
  }

  getTemplate() {
    return createRoutePointListTemplate();
  }

  getElem() {
    if (!this._elem) {
      this._elem = createElement(this.getTemplate());
    }

    return this._elem;
  }

  removeElem() {
    this._elem = null;
  }
}
