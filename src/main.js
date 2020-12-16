import {createMenuTemplate} from './view/menu.js';
import {createRouteInfoTemplate} from './view/route.js';
import {createFilterTemplate} from './view/filter.js';
import {createRoutePriceTemplate} from './view/price.js';
import {createSortingFormTemplate} from './view/sorting.js';
import {createRouteItemListTemplate} from './view/route-item.js';
import {createRouteItemTemplate} from './view/route-item.js';
import {createEditFormTemplate} from './view/editing-form.js';
import {createCreatingFormTemplate} from './view/creating-form.js';

const ROUTE_ITEM_COUNT = 3;

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

for (let i = 0; i < ROUTE_ITEM_COUNT; i++) {
  render(routeItemsList, createRouteItemTemplate(), `afterbegin`);
}

render(routeItemsList, createCreatingFormTemplate(), `afterbegin`);
render(routeItemsList, createEditFormTemplate(), `afterbegin`);

