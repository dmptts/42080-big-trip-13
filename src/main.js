import {generateRoutePoint} from './mock/route-point.js';
import RoutePresenter from './presenters/route.js';
import RoutePointsModel from './model/route-points.js';
import FilterPresenter from "./presenters/filter.js";
import FilterModel from "./model/filter.js";

const ROUTE_ITEM_COUNT = 15;

const routeMainInfoElement = document.querySelector(`.trip-main`);
const routeEventsElement = document.querySelector(`.trip-events`);

const routePoints = new Array(ROUTE_ITEM_COUNT).fill().map(generateRoutePoint);

const routePointsModel = new RoutePointsModel();
routePointsModel.setRoutePoints(routePoints);

const filterModel = new FilterModel();

const routePresenter = new RoutePresenter(routeMainInfoElement, routeEventsElement, routePointsModel, filterModel);
const filterPresenter = new FilterPresenter(routeMainInfoElement.querySelector(`.trip-controls`), filterModel);

routePresenter.init();
filterPresenter.init();

document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  routePresenter.createRoutePoint();
});

