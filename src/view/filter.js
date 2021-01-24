import Abstract from './abstract.js';

const createFilterItemTemplate = (filterItem, currentFilter) => {
  const {type, name} = filterItem;

  return `<div class="trip-filters__filter">
    <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === currentFilter ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
  </div>`;
};

const createFilterTemplate = (filters, currentFilter) => {
  const filterItemsTemplate = filters
    .map((filter) => createFilterItemTemplate(filter, currentFilter))
    .join(``);

  return `<form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};

export default class Filter extends Abstract {
  constructor(filters, currentFilter) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilter;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFilterTemplate(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._handlers.filterTypeChange(evt.target.value);
  }

  setFilterTypeChangeHandler(handler) {
    this._handlers.filterTypeChange = handler;
    this.getElem().addEventListener(`change`, this._filterTypeChangeHandler);
  }
}
