import {generateRoutePoint} from './mock/route-point.js';
import RoutePresenter from './presenters/route.js';

const ROUTE_ITEM_COUNT = 15;

const routeMainInfoElement = document.querySelector(`.trip-main`);
const routeEventsElement = document.querySelector(`.trip-events`);

const routePoints = new Array(ROUTE_ITEM_COUNT).fill().map(generateRoutePoint);
const routePresenter = new RoutePresenter(routeMainInfoElement, routeEventsElement);

routePresenter.init(routePoints);

