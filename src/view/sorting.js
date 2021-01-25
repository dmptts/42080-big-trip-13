import {SortingType} from '../const.js';
import Abstract from './abstract.js';

const createSortingFormTemplate = (currentSortingType) => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" data-sort-type="${SortingType.DAY}" type="radio" name="trip-sort" value="sort-day" ${currentSortingType === SortingType.DAY ? `checked` : ``}>
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" data-sort-type="${SortingType.TIME}" type="radio" name="trip-sort" value="sort-time" ${currentSortingType === SortingType.TIME ? `checked` : ``}>
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" data-sort-type="${SortingType.PRICE}" type="radio" name="trip-sort" value="sort-price" ${currentSortingType === SortingType.PRICE ? `checked` : ``}>
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`;
};

export default class SortingForm extends Abstract {
  constructor(currentSortingType) {
    super();

    this._currentSortingType = currentSortingType;

    this._sortingTypeChangeHandler = this._sortingTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortingFormTemplate(this._currentSortingType);
  }

  _sortingTypeChangeHandler(evt) {
    evt.preventDefault();

    this._handlers.sortingTypeChange(evt.target.closest(`.trip-sort__item`).querySelector(`input`).dataset.sortType);
  }

  setSortingTypeChangeHandler(handler) {
    this._handlers.sortingTypeChange = handler;
    this.getElem().addEventListener(`change`, this._sortingTypeChangeHandler);
  }
}
