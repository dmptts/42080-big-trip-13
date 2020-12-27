import MenuView from './view/menu.js';
import RouteView from './view/route.js';
import FilterView from './view/filter.js';
import RoutePriceView from './view/price.js';
import SortingFormView from './view/sorting.js';
import RoutePointListView from './view/route-point-list.js';
import RoutePointView from './view/route-point.js';
import RoutePointEditFormView from './view/editing-form.js';
import {generateRoutePoint} from './mock/route-point.js';
import {render, RenderPosition} from './utils.js';

const ROUTE_ITEM_COUNT = 15;

const routePoints = new Array(ROUTE_ITEM_COUNT).fill().map(generateRoutePoint);

const renderRoutePoint = (routePoint) => {
  const routePointComponent = new RoutePointView(routePoint);
  const routePointEditFormComponent = new RoutePointEditFormView(routePoint);

  const replaceCardToForm = () => {
    routePointListComponent.getElem().replaceChild(routePointEditFormComponent.getElem(), routePointComponent.getElem());
  };

  const replaceFormToCard = () => {
    routePointListComponent.getElem().replaceChild(routePointComponent.getElem(), routePointEditFormComponent.getElem());
  };

  routePointComponent.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceCardToForm();
  });

  routePointEditFormComponent.getElem().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(routePointListComponent.getElem(), routePointComponent.getElem(), RenderPosition.BEFOREEND);
};

const siteHeader = document.querySelector(`.page-header`);
const tripMain = siteHeader.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const firstControlsHeader = tripControls.querySelector(`h2:first-child`);
const routeComponent = new RouteView(routePoints);
render(tripMain, routeComponent.getElem(), RenderPosition.AFTERBEGIN);
render(routeComponent.getElem(), new RoutePriceView().getElem(), RenderPosition.BEFOREEND);
render(firstControlsHeader, new MenuView().getElem(), RenderPosition.AFTER);
render(tripControls, new FilterView().getElem(), RenderPosition.BEFOREEND);

const pageMain = document.querySelector(`.page-main`);
const tripEvents = pageMain.querySelector(`.trip-events`);
const routePointListComponent = new RoutePointListView();

render(tripEvents, new SortingFormView().getElem(), RenderPosition.BEFOREEND);
render(tripEvents, routePointListComponent.getElem(), RenderPosition.BEFOREEND);

for (let i = 0; i < ROUTE_ITEM_COUNT; i++) {
  renderRoutePoint(routePoints[i]);
}
