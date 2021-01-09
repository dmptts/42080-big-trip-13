import Abstract from './abstract.js';

const createRoutePriceTemplate = () => {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>`;
};

export default class RoutePrice extends Abstract {
  getTemplate() {
    return createRoutePriceTemplate();
  }
}
