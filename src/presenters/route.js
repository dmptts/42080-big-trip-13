import RouteInfoView from '../view/route-info.js';
import MenuView from '../view/menu.js';
import RoutePriceView from '../view/price.js';
import SortingFormView from '../view/sorting.js';
import RoutePointListView from '../view/route-point-list.js';
import NoRoutePointView from '../view/no-route-point.js';
import RoutePointPresenter from './route-point.js';
import NewRoutePointPresenter from './new-route-point.js';
import {remove, render, RenderPosition} from '../utils/render.js';
import {filter} from "../utils/filter.js";
import {UpdateType, UserAction, FilterType, SortingType} from '../const.js';
import dayjs from 'dayjs';

export default class Route {
  constructor(routeMainInfoContainer, routeEventsContainer, routePointsModel, filterModel) {
    this._routeMainInfoContainer = routeMainInfoContainer;
    this._routeEventsContainer = routeEventsContainer;
    this._routePointPresenter = {};
    this._routePointsModel = routePointsModel;
    this._filterModel = filterModel;
    this._currentSortingType = SortingType.DAY;

    this._sortingComponent = null;

    this._menuComponent = new MenuView();
    this._routePointListComponent = new RoutePointListView();
    this._noRoutePointComponent = new NoRoutePointView();

    this._handleViewChange = this._handleViewChange.bind(this);
    this._handleModelChange = this._handleModelChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortingTypeChange = this._handleSortingTypeChange.bind(this);

    this._routePointsModel.addObserver(this._handleModelChange);
    this._filterModel.addObserver(this._handleModelChange);

    this._newRoutePointPresenter = new NewRoutePointPresenter(this._routePointListComponent, this._handleViewChange);
  }

  init() {
    this._renderRoute();
  }

  createRoutePoint() {
    this._currentSortingType = SortingType.DAY;
    this._filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);

    this._newRoutePointPresenter.init();
  }

  _getRoutePoints() {
    const filterType = this._filterModel.getFilter();
    const routePoints = this._routePointsModel.getRoutePoints();
    const filteredRoutePoints = filter[filterType](routePoints);

    switch (this._currentSortingType) {
      case SortingType.DAY:
        return filteredRoutePoints.sort((routePointA, routePointB) => {
          return dayjs(routePointA.times.startTime) - dayjs(routePointB.times.startTime);
        });
      case SortingType.TIME:
        return filteredRoutePoints.sort((routePointA, routePointB) => {
          return (dayjs(routePointB.times.endTime) - dayjs(routePointB.times.startTime)) - (dayjs(routePointA.times.endTime) - dayjs(routePointA.times.startTime));
        });
      case SortingType.PRICE:
        return filteredRoutePoints.sort((routePointA, routePointB) => {
          return routePointB.price - routePointA.price;
        });
    }

    return filteredRoutePoints;
  }

  _handleViewChange(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_ROUTE_POINT:
        this._routePointsModel.updateRoutePoint(updateType, update);
        break;
      case UserAction.DELETE_ROUTE_POINT:
        this._routePointsModel.deleteRoutePoint(updateType, update);
        break;
      case UserAction.ADD_ROUTE_POINT:
        this._routePointsModel.addRoutePoint(updateType, update);
    }
  }

  _handleModelChange(updateType, data) {
    this._newRoutePointPresenter.destroy();

    switch (updateType) {
      case UpdateType.PATCH:
        this._routePointPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearRoutePoints();
        this._renderRoute(false);
        break;
      case UpdateType.MAJOR:
        this._clearRoute();
        this._renderRoute(true);
        break;
    }
  }

  _handleModeChange() {
    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleSortingTypeChange(sortingType) {
    if (this._currentSortingType === sortingType) {
      return;
    }

    this._currentSortingType = sortingType;
    this._clearRoutePoints();
    this._renderRoute(false);
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
    if (this._sortingComponent !== null) {
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingFormView(this._currentSortingType);
    this._sortingComponent.setSortingTypeChangeHandler(this._handleSortingTypeChange);
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

  _clearRoute() {
    remove(this._menuComponent);
    remove(this._routeInfoComponent);
    remove(this._routePriceComponent);
    remove(this._sortingComponent);
    remove(this._routePointListComponent);
    remove(this._noRoutePointComponent);

    this._clearRoutePoints();
  }
}
