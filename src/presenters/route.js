import RouteInfoView from '../view/route-info.js';
import MenuView from '../view/menu.js';
import FilterView from '../view/filter.js';
import RoutePriceView from '../view/price.js';
import SortingFormView from '../view/sorting.js';
import RoutePointListView from '../view/route-point-list.js';
import RoutePointPresenter from './route-point.js';
import {updateItem} from '../utils/common.js';
import {render, RenderPosition} from '../utils/render.js';

const ROUTE_ITEM_COUNT = 15;

export default class Route {
  constructor(routeMainInfoContainer, routeEventsContainer) {
    this._routeMainInfoContainer = routeMainInfoContainer;
    this._routeEventsContainer = routeEventsContainer;
    this._routePointPresenter = {};

    this._menuComponent = new MenuView();
    this._filterComponent = new FilterView();
    this._sortingComponent = new SortingFormView();
    this._routePointListComponent = new RoutePointListView();

    this._handleRoutePointChange = this._handleRoutePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(routePoints) {
    this._routePoints = routePoints.slice();

    this._renderRouteMainInfo(this._routePoints);
    this._renderSorting();
    this._renderRoutePointList(this._routePoints);
  }

  _handleRoutePointChange(updatedRoutePoint) {
    this._routePoints = updateItem(this._routePoints, updatedRoutePoint);
    this._routePointPresenter[updatedRoutePoint.id].init(updatedRoutePoint);
  }

  _handleModeChange() {
    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _renderRouteMainInfo(routePoints) {
    this._renderRouteInfo(routePoints);
    this._renderRoutePrice(routePoints);
    this._renderMenu();
    this._renderFilter();
  }

  _renderRouteInfo(routePoints) {
    this._routeInfoComponent = new RouteInfoView(routePoints);
    render(this._routeMainInfoContainer, this._routeInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderRoutePrice(routePoints) {
    this._routePriceComponent = new RoutePriceView(routePoints);
    render(this._routeInfoComponent, this._routePriceComponent, RenderPosition.BEFOREEND);
  }

  _renderMenu() {
    render(this._routeMainInfoContainer.querySelector(`h2:first-child`), this._menuComponent, RenderPosition.AFTER);
  }

  _renderFilter() {
    render(this._routeMainInfoContainer.querySelector(`.trip-controls`), this._filterComponent, RenderPosition.BEFOREEND);
  }

  _renderRoutePointList(routePoints) {
    render(this._routeEventsContainer, this._routePointListComponent, RenderPosition.BEFOREEND);

    for (let i = 0; i < ROUTE_ITEM_COUNT; i++) {
      this._renderRoutePoint(routePoints[i]);
    }
  }

  _renderSorting() {
    render(this._routeEventsContainer, this._sortingComponent, RenderPosition.BEFOREEND);
  }

  _renderRoutePoint(routePoint) {
    const routePointPresenter = new RoutePointPresenter(this._routePointListComponent, this._handleRoutePointChange, this._handleModeChange);
    routePointPresenter.init(routePoint);
    this._routePointPresenter[routePoint.id] = routePointPresenter;
  }
}
