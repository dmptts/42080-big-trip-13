import {generateRoutePoint} from './mock/route-point.js';
import RoutePresenter from './presenters/route.js';
import RoutePointsModel from './model/route-points.js';

const ROUTE_ITEM_COUNT = 15;

const routeMainInfoElement = document.querySelector(`.trip-main`);
const routeEventsElement = document.querySelector(`.trip-events`);

const routePoints = new Array(ROUTE_ITEM_COUNT).fill().map(generateRoutePoint);
const routePointsModel = new RoutePointsModel();
routePointsModel.setRoutePoints(routePoints);

const routePresenter = new RoutePresenter(routeMainInfoElement, routeEventsElement, routePointsModel);

routePresenter.init();

