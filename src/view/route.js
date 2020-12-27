import {createElement} from '../utils.js';

const createRouteTemplate = () => {
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>
  </section>`;
};

export default class Route {
  constructor() {
    this._elem = null;
  }

  getTemplate() {
    return createRouteTemplate();
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
