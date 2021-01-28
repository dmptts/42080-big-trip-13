import dayjs from 'dayjs';
import flatpickr from 'flatpickr';
import SmartView from './smart.js';
import {getRandomInt} from '../utils/common.js';
import {ROUTE_POINT_TYPES, ROUTE_POINT_DESTINATIONS} from '../const.js';
import {getDescription, getOptions, getPhotos} from '../mock/route-point.js';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const getRoutePointDetailsTemplate = (options, description, photos) => {
  return options.length !== 0 || description || photos.length !== 0 ? `<section class="event__details">
    ${createRoutePointOffersTemplate(options)}

    ${description || photos ? `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${description ? `<p class="event__destination-description">${description}</p>` : ``}
      ${createRoutePointPhotosTemplate(photos)}
    </section>` : ``}
  </section>` : ``;
};

const createRoutePointTypeSelectorTemplate = (routePointType) => {
  return `<div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${routePointType.toLowerCase()}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

        ${ROUTE_POINT_TYPES.map((type) => `<div class="event__type-item">
          <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}"${type === routePointType ? ` checked` : ``}>
          <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
        </div>`).join(``)}
      </fieldset>
    </div>
  </div>`;
};

const createRoutePointDestinationTemplate = (routePointDestination) => {
  return `<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${routePointDestination ? routePointDestination : ``}" list="destination-list-1">
  <datalist id="destination-list-1">
    ${ROUTE_POINT_DESTINATIONS.map((destination) => `<option value="${destination}"></option>`)}
  </datalist>`;
};

const createRoutePointOffersTemplate = (routePointOptions) => {
  const optionId = new Map([
    [`Order Uber`, `uber`],
    [`Add luggage`, `luggage`],
    [`Switch to comfort class`, `comfort`],
    [`Add meal`, `meal`],
    [`Choose seats`, `seats`],
    [`Travel by train`, `train`],
    [`Rent a car`, `car`],
    [`Add breakfest`, `breakfest`],
    [`Book Tickets`, `tickets`],
    [`Lunch in city`, `lunch`]
  ]);

  return (routePointOptions.length !== 0) ? `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
    ${routePointOptions.map((option) => `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${optionId.get(option.optionName)}-1" type="checkbox" name="event-offer-${optionId.get(option.optionName)}"${option.isSelected ? ` checked` : ``}>
      <label class="event__offer-label" for="event-offer-${optionId.get(option.optionName)}-1">
        <span class="event__offer-title">${option.optionName}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">50</span>
      </label>
    </div>`).join(``)}
  </section>` : ``;
};

const createRoutePointPhotosTemplate = (routePointPhotos) => {
  return (routePointPhotos.length !== 0) ? `<div class="event__photos-container">
    <div class="event__photos-tape">
      ${routePointPhotos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo"></img>`).join(``)}
    </div>
  </div>` : ``;
};

const createEditFormTemplate = (routePoint, isNewRoutePoint) => {
  const {type, destination, times, price, options, description, photos} = routePoint;

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${type ? createRoutePointTypeSelectorTemplate(type) : createRoutePointTypeSelectorTemplate(ROUTE_POINT_TYPES[getRandomInt(0, ROUTE_POINT_TYPES.length - 1)])}

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type ? type : ``}
          </label>
          ${createRoutePointDestinationTemplate(destination)}
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${times ? dayjs(times.startTime).format(`DD/MM/YY HH:mm`) : ``}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${times ? dayjs(times.endTime).format(`DD/MM/YY HH:mm`) : ``}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price ? price : ``}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">${isNewRoutePoint ? `Cancel` : `Delete`}</button>
        ${isNewRoutePoint ? `` : `<button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>`}
      </header>
      ${getRoutePointDetailsTemplate(options, description, photos)}
    </form>
  </li>`;
};

export default class RoutePointEditForm extends SmartView {
  constructor(routePoint, isNewRoutePoint) {
    super();
    this._data = RoutePointEditForm.parseRoutePointToData(routePoint);
    this._datepicker = null;
    this._isNewRoutePoint = isNewRoutePoint;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._typeCheckboxClicktHandler = this._typeCheckboxClicktHandler.bind(this);
    this._destinationInputChangeHandler = this._destinationInputChangeHandler.bind(this);
    this._rollupClickHandler = this._rollupClickHandler.bind(this);
    this._deleteClickHandler = this._deleteClickHandler.bind(this);
    this._priceInputChangeHandler = this._priceInputChangeHandler.bind(this);
    this._startTimeChangeHandler = this._startTimeChangeHandler.bind(this);
    this._endTimeChangeHandler = this._endTimeChangeHandler.bind(this);
    this._startTimeFocusHandler = this._startTimeFocusHandler.bind(this);
    this._endTimeFocusHandler = this._endTimeFocusHandler.bind(this);

    this._setInnerHandlers();
  }

  reset(routePoint) {
    this.updateData(
        RoutePointEditForm.parseRoutePointToData(routePoint)
    );
  }

  getTemplate() {
    return createEditFormTemplate(this._data, this._isNewRoutePoint);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();

    const destinationInput = this.getElem().querySelector(`.event__input--destination`);
    const priceInput = this.getElem().querySelector(`.event__input--price`);

    if (ROUTE_POINT_DESTINATIONS.indexOf(destinationInput.value) === -1) {
      destinationInput.setCustomValidity(`Указать можно только назначения из списка`);
      return;
    } else {
      destinationInput.setCustomValidity(``);
    }

    if (priceInput.value !== `` && Number.isInteger(+priceInput.value)) {
      priceInput.setCustomValidity(``);
    } else {
      priceInput.setCustomValidity(`Укажите целое число`);
      return;
    }

    this._handlers.formSubmit(RoutePointEditForm.parseDataToRoutePoint(this._data));
  }

  _rollupClickHandler(evt) {
    evt.preventDefault();
    this._handlers.rollupClick();
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._handlers.deleteClick(RoutePointEditForm.parseDataToRoutePoint(this._data));
  }

  setFormSubmitHandler(handler) {
    this._handlers.formSubmit = handler;
    this.getElem().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }

  setRollupClickHandler(handler) {
    this._handlers.rollupClick = handler;
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollupClickHandler);
  }

  setDeleteClickHandler(handler) {
    this._handlers.deleteClick = handler;
    this.getElem().querySelector(`.event__reset-btn`).addEventListener(`click`, this._deleteClickHandler);
  }

  _typeCheckboxClicktHandler(evt) {
    evt.preventDefault();
    evt.target.closest(`.event__type-item`).querySelector(`input[type='radio']`).checked = true;

    const typeToggle = this.getElem().querySelector(`.event__type-toggle`);
    let type = this.getElem().querySelector(`.event__type-input:checked`).value;

    type = type[0].toUpperCase() + type.slice(1);

    typeToggle.checked = !typeToggle.checked;

    this.updateData({
      type,
      options: getOptions(type)
    });
  }

  _destinationInputChangeHandler(evt) {
    evt.preventDefault();

    if (ROUTE_POINT_DESTINATIONS.indexOf(evt.target.value) === -1) {
      evt.target.setCustomValidity(`Указать можно только назначения из списка`);
    } else {
      evt.target.setCustomValidity(``);

      this.updateData({
        destination: evt.target.value,
        description: getDescription(),
        photos: getPhotos()
      });
    }
  }

  _priceInputChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      price: Number(evt.target.value)
    });
  }

  _startTimeFocusHandler(evt) {
    evt.preventDefault();
    this._setStartDatepicker();
  }

  _startTimeChangeHandler([userDate]) {
    this.updateData({
      times: {
        startTime: userDate,
        endTime: this._data.times.endTime
      }
    });
  }

  _endTimeFocusHandler(evt) {
    evt.preventDefault();
    this._setEndDatepicker();
  }

  _endTimeChangeHandler(userDate) {
    this.updateData({
      times: {
        startTime: this._data.times.startTime,
        endTime: dayjs(userDate)
      }
    });
  }

  _setInnerHandlers() {
    this.getElem().querySelector(`.event__type-list`).addEventListener(`click`, this._typeCheckboxClicktHandler);
    this.getElem().querySelector(`.event__input--destination`).addEventListener(`change`, this._destinationInputChangeHandler);
    this.getElem().querySelector(`.event__input--price`).addEventListener(`change`, this._priceInputChangeHandler);
    this.getElem().querySelector(`input[name="event-start-time"]`).addEventListener(`focus`, this._startTimeFocusHandler);
    this.getElem().querySelector(`input[name="event-end-time"]`).addEventListener(`focus`, this._endTimeFocusHandler);
  }

  _setStartDatepicker() {
    if (this._datepicker) {
      this._datepicker.destroy();
      this._datepicker = null;
    }

    this._datepicker = flatpickr(
        this.getElem().querySelector(`input[name="event-start-time"]`),
        {
          enableTime: true,
          dateFormat: `d/m/y H:i`,
          defaultDate: this._data.times.startTime,
          onChange: this._startTimeChangeHandler
        }
    );
  }

  _setEndDatepicker() {
    if (this._datepicker) {
      this._datepicker.destroy();
      this._datepicker = null;
    }

    this._datepicker = flatpickr(
        this.getElem().querySelector(`input[name="event-end-time"]`),
        {
          enableTime: true,
          dateFormat: `d/m/y H:i`,
          defaultDate: this._data.times.endTime,
          onChange: this._endTimeChangeHandler
        }
    );
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setFormSubmitHandler(this._handlers.formSubmit);
    this.setDeleteClickHandler(this._handlers.deleteClick);
  }

  static parseRoutePointToData(routePoint) {
    return Object.assign(
        {},
        routePoint,
        {}
    );
  }

  static parseDataToRoutePoint(data) {
    return Object.assign({}, data);
  }
}
