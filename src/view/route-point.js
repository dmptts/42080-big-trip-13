import dayjs from 'dayjs';

const getDuration = (times) => {
  const duration = dayjs(times.endTime).diff(times.startTime, `minute`);
  const durationDays = Math.floor(duration / 60 / 24);
  const durationHours = Math.floor((duration - durationDays * 24 * 60) / 60);
  const durationMinutes = duration - durationDays * 24 * 60 - durationHours * 60;
  let formattedDuration = ``;

  if (durationDays >= 1) {
    formattedDuration += `${durationDays}D `;
  }

  if (durationHours >= 1) {
    formattedDuration += `${durationHours}H `;
  }

  formattedDuration += `${durationMinutes}M`;

  return formattedDuration;
};

const createSelectedOptionsTemplate = (options) => {
  return (options.some((option) => option.isSelected)) ? `<ul class="event__selected-offers">
    ${options.filter((option) => option.isSelected).map((option) => `<li class="event__offer">
      <span class="event__offer-title">${option.optionName}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${option.optionPrice}</span>
    </li>`).join(``)}
  </ul>` : ``;
};

export const createRouteItemListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

export const createRouteItemTemplate = (routePoint) => {
  const {type, destination, options, times, price, isFavorite} = routePoint;

  const selectedOptionsTemplate = createSelectedOptionsTemplate(options);

  const favoriteClassName = isFavorite ? `event__favorite-btn event__favorite-btn--active` : `event__favorite-btn`;

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dayjs(times.startTime).format(`YYYY-MM-DD`)}">${dayjs(times.startTime).format(`MMM DD`)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs(times.startTime).format(`YYYY-MM-DDThh:mm`)}">${dayjs(times.startTime).format(`hh:mm`)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs(times.endTime).format(`YYYY-MM-DDThh:mm`)}">${dayjs(times.endTime).format(`hh:mm`)}</time>
        </p>
        <p class="event__duration">${getDuration(times)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${selectedOptionsTemplate}
      <button class="${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};
