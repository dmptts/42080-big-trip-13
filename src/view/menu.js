import Abstract from './abstract.js';

const createMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;
};

export default class Menu extends Abstract {
  constructor() {
    super();

    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createMenuTemplate();
  }

  _menuClickHandler(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains(`trip-tabs__btn--active`)) {
      return;
    }

    this.getElem().querySelector(`.trip-tabs__btn--active`).classList.remove(`trip-tabs__btn--active`);
    evt.target.classList.add(`trip-tabs__btn--active`);
    this._handlers.menuClick(evt.target.textContent);
  }

  setMenuClickHandler(handler) {
    this._handlers.menuClick = handler;
    this.getElem().addEventListener(`click`, this._menuClickHandler);
  }
}
