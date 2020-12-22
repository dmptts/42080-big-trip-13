import {createMenuTemplate} from './view/menu.js';
import {createRouteInfoTemplate} from './view/route.js';
import {createFilterTemplate} from './view/filter.js';
import {createRoutePriceTemplate} from './view/price.js';
import {createSortingFormTemplate} from './view/sorting.js';
import {createRouteItemListTemplate} from './view/route-point.js';
import {createRouteItemTemplate} from './view/route-point.js';
import {createEditFormTemplate} from './view/editing-form.js';
// import {createCreatingFormTemplate} from './view/creating-form.js';
import {generateRoutePoint} from './mock/route-point.js';

const ROUTE_ITEM_COUNT = 15;

const routePoints = new Array(ROUTE_ITEM_COUNT).fill().map(generateRoutePoint);

const render = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

const siteHeader = document.querySelector(`.page-header`);
const tripMain = siteHeader.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const firstControlsHeader = tripControls.querySelector(`h2:first-child`);

render(tripMain, createRouteInfoTemplate(), `afterbegin`);

const tripMainInfo = tripMain.querySelector(`.trip-info`);

render(tripMainInfo, createRoutePriceTemplate(), `beforeend`);
render(firstControlsHeader, createMenuTemplate(), `afterend`);
render(tripControls, createFilterTemplate(), `beforeend`);

const pageMain = document.querySelector(`.page-main`);
const tripEvents = pageMain.querySelector(`.trip-events`);

render(tripEvents, createSortingFormTemplate(), `beforeend`);
render(tripEvents, createRouteItemListTemplate(), `beforeend`);

const routeItemsList = document.querySelector(`.trip-events__list`);

for (let i = 1; i < ROUTE_ITEM_COUNT; i++) {
  render(routeItemsList, createRouteItemTemplate(routePoints[i]), `afterbegin`);
}

render(routeItemsList, createEditFormTemplate(routePoints[0]), `afterbegin`);
