import {createElement} from '../utils/common.js';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract class, only concrete one.`);
    }

    this._elem = null;
    this._handlers = {};
  }

  getTemplate() {
    if (new.target === Abstract) {
      throw new Error(`Abstract method not imlemented: ${this.getTemplate.name}`);
    }
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
