import AbstractView from './abstract.js';

export default class Smart extends AbstractView {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, dataUpdate) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (dataUpdate) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElem();
    const parent = prevElement.parentElement;
    this.removeElem();

    const newElement = this.getElem();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error(`Abstract method not implemented: restoreHandlers`);
  }
}
