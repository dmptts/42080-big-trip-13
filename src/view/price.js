import {createElement} from '../utils.js';

const createRoutePriceTemplate = () => {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>`;
};

export default class RoutePrice {
  constructor() {
    this._elem = null;
  }

  getTemplate() {
    return createRoutePriceTemplate();
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
