import RouteInfoView from '../view/route-info.js';
import MenuView from '../view/menu.js';
import RoutePriceView from '../view/price.js';
import SortingFormView from '../view/sorting.js';
import RoutePointListView from '../view/route-point-list.js';
import NoRoutePointView from '../view/no-route-point.js';
import RoutePointPresenter from './route-point.js';
import {remove, render, RenderPosition} from '../utils/render.js';
import {filter} from "../utils/filter.js";
import {UpdateType} from '../const.js';

export default class Route {
  constructor(routeMainInfoContainer, routeEventsContainer, routePointsModel, filterModel) {
    this._routeMainInfoContainer = routeMainInfoContainer;
    this._routeEventsContainer = routeEventsContainer;
    this._routePointPresenter = {};
    this._routePointsModel = routePointsModel;
    this._filterModel = filterModel;

    this._menuComponent = new MenuView();
    this._sortingComponent = new SortingFormView();
    this._routePointListComponent = new RoutePointListView();
    this._noRoutePointComponent = new NoRoutePointView();

    this._handleViewChange = this._handleViewChange.bind(this);
    this._handleModelChange = this._handleModelChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);

    this._routePointsModel.addObserver(this._handleModelChange);
    this._filterModel.addObserver(this._handleModelChange);
  }

  init() {
    this._renderRoute();
  }

  _getRoutePoints() {
    const filterType = this._filterModel.getFilter();
    const routePoints = this._routePointsModel.getRoutePoints();
    const filteredRoutePoints = filter[filterType](routePoints);

    return filteredRoutePoints;
  }

  _handleViewChange(updateType, update) {
    this._routePointsModel.updateRoutePoint(updateType, update);
  }

  _handleModelChange(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        // Обновить точку маршрута
        this._routePointPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        // Обновить список точек маршрута
        this._clearRoutePoints();
        this._renderRoute(false);
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

  _renderRoute(updateRouteMainInfo = true) {
    const routePoints = this._getRoutePoints();

    if (updateRouteMainInfo) {
      this._renderRouteMainInfo(routePoints);
      this._renderSorting();
      this._renderRoutePointList();
    }

    if (routePoints.length === 0) {
      this._renderNoRoutePoint();
      return;
    }

    this._renderRoutePoints(routePoints);
  }

  _renderRouteMainInfo(routePoints) {
    this._renderRouteInfo(routePoints);
    this._renderRoutePrice(routePoints);
    this._renderMenu();
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

  _renderRoutePointList() {
    render(this._routeEventsContainer, this._routePointListComponent, RenderPosition.BEFOREEND);
  }

  _renderNoRoutePoint() {
    render(this._routeEventsContainer, this._noRoutePointComponent, RenderPosition.BEFOREEND);
  }

  _renderSorting() {
    render(this._routeEventsContainer, this._sortingComponent, RenderPosition.BEFOREEND);
  }

  _renderRoutePoints(routePoints) {
    for (let i = 0; i < routePoints.length; i++) {
      this._renderRoutePoint(routePoints[i]);
    }
  }

  _renderRoutePoint(routePoint) {
    const routePointPresenter = new RoutePointPresenter(this._routePointListComponent, this._handleViewChange, this._handleModeChange);
    routePointPresenter.init(routePoint);
    this._routePointPresenter[routePoint.id] = routePointPresenter;
  }

  _clearRoutePoints() {
    remove(this._noRoutePointComponent);

    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._routePointPresenter = {};
  }
}
