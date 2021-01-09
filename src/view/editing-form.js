import dayjs from 'dayjs';
import Abstract from './abstract.js';
import {getRandomInt} from '../utils/common.js';
import {ROUTE_POINT_TYPES, ROUTE_POINT_DESTINATIONS} from '../const';

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
          <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}"${(type === routePointType) ? ` checked` : ``}>
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

const createEditFormTemplate = (routePoint = {}) => {
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
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${times ? dayjs(times.startTime).format(`DD/MM/YY hh:mm`) : ``}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${times ? dayjs(times.endTime).format(`DD/MM/YY hh:mm`) : ``}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price ? price : ``}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        ${createRoutePointOffersTemplate(options)}

        ${description || photos ? `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          ${description ? `<p class="event__destination-description">${description}</p>` : ``}
          ${createRoutePointPhotosTemplate(photos)}
        </section>` : ``}
      </section>
    </form>
  </li>`;
};

export default class RoutePointEditForm extends Abstract {
  constructor(routePoint = {}) {
    super();
    this._routePoint = routePoint;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  getTemplate() {
    return createEditFormTemplate(this._routePoint);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._handlers.formSubmit();
  }

  setFormSubmitHandler(handler) {
    this._handlers.formSubmit = handler;
    this.getElem().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }
}
