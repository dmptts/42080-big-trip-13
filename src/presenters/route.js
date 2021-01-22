import RouteInfoView from '../view/route-info.js';
import MenuView from '../view/menu.js';
import FilterView from '../view/filter.js';
import RoutePriceView from '../view/price.js';
import SortingFormView from '../view/sorting.js';
import RoutePointListView from '../view/route-point-list.js';
import NoRoutePointView from '../view/no-route-point.js';
import RoutePointPresenter from './route-point.js';
import {render, RenderPosition} from '../utils/render.js';
import {UpdateType} from '../const.js';

export default class Route {
  constructor(routeMainInfoContainer, routeEventsContainer, routePointsModel) {
    this._routeMainInfoContainer = routeMainInfoContainer;
    this._routeEventsContainer = routeEventsContainer;
    this._routePointPresenter = {};
    this._routePointsModel = routePointsModel;

    this._menuComponent = new MenuView();
    this._filterComponent = new FilterView();
    this._sortingComponent = new SortingFormView();
    this._routePointListComponent = new RoutePointListView();
    this._noTaskComponent = new NoRoutePointView();

    this._handleViewChange = this._handleViewChange.bind(this);
    this._handleModelChange = this._handleModelChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);

    this._routePointsModel.addObserver(this._handleModelChange);
  }

  init() {
    this._renderRoute();
  }

  _getRoutePoints() {
    return this._routePointsModel.getRoutePoints();
  }

  _handleViewChange(updateType, update) {
    this._routePointsModel.updateRoutePoint(updateType, update);
  }

  _handleModelChange(updateType, data) {
    switch (updateType) {
      case UpdateType.MINOR:
        // Обновить точку маршрута
        this._routePointPresenter[data.id].init(data);
        break;
      case UpdateType.MAJOR:
        // Обновить весь маршрут
        break;
    }
  }

  _handleModeChange() {
    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _renderRoute() {
    const routePoints = this._getRoutePoints();

    this._renderRouteMainInfo(routePoints);
    this._renderSorting();

    if (routePoints.length === 0) {
      this._renderNoRoutePoint();
      return;
    }

    this._renderRoutePointList(routePoints);
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

    for (let i = 0; i < routePoints.length; i++) {
      this._renderRoutePoint(routePoints[i]);
    }
  }

  _renderNoRoutePoint() {
    render(this._routeEventsContainer, this._noTaskComponent, RenderPosition.BEFOREEND);
  }

  _renderSorting() {
    render(this._routeEventsContainer, this._sortingComponent, RenderPosition.BEFOREEND);
  }

  _renderRoutePoint(routePoint) {
    const routePointPresenter = new RoutePointPresenter(this._routePointListComponent, this._handleViewChange, this._handleModeChange);
    routePointPresenter.init(routePoint);
    this._routePointPresenter[routePoint.id] = routePointPresenter;
  }
}
