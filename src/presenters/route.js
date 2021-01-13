import RouteInfoView from '../view/route-info.js';
import MenuView from '../view/menu.js';
import FilterView from '../view/filter.js';
import RoutePriceView from '../view/price.js';
import SortingFormView from '../view/sorting.js';
import RoutePointListView from '../view/route-point-list.js';
import RoutePointView from '../view/route-point.js';
import RoutePointEditFormView from '../view/editing-form.js';
import {render, RenderPosition} from '../utils/render.js';

const ROUTE_ITEM_COUNT = 15;

export default class Route {
  constructor(routeMainInfoContainer, routeEventsContainer) {
    this._routeMainInfoContainer = routeMainInfoContainer;
    this._routeEventsContainer = routeEventsContainer;

    this._menuComponent = new MenuView();
    this._filterComponent = new FilterView();
    this._sortingComponent = new SortingFormView();
    this._routePointListComponent = new RoutePointListView();
    this._routePointComponent = new RoutePointView();
    this._routePointEditFormComponent = new RoutePointEditFormView();
  }

  init(routePoints) {
    this._routePoints = routePoints.slice();

    this.renderRouteMainInfo(this._routePoints);
    this.renderRoutePointList(this._routePoints);
  }

  renderRouteMainInfo(routePoints) {
    this.renderRouteInfo(routePoints);
    this.renderRoutePrice(routePoints);
    this.renderMenu();
    this.renderFilter();
  }

  renderRouteInfo(routePoints) {
    this._routeInfoComponent = new RouteInfoView(routePoints);
    render(this._routeMainInfoContainer, this._routeInfoComponent, RenderPosition.AFTERBEGIN);
  }

  renderRoutePrice(routePoints) {
    this._routePriceComponent = new RoutePriceView(routePoints);
    render(this._routeInfoComponent, this._routePriceComponent, RenderPosition.BEFOREEND);
  }

  renderMenu() {
    render(this._routeMainInfoContainer.querySelector(`h2:first-child`), this._menuComponent, RenderPosition.AFTER);
  }

  renderFilter() {
    render(this._routeMainInfoContainer.querySelector(`.trip-controls`), this._filterComponent, RenderPosition.BEFOREEND);
  }

  renderSorting() {
    render(this._routeEventsContainer, this._sortingComponent, RenderPosition.BEFOREEND);
  }

  renderRoutePointList(routePoints) {
    render(this._routeEventsContainer, this._routePointListComponent, RenderPosition.BEFOREEND);

    this.renderSorting();

    for (let i = 0; i < ROUTE_ITEM_COUNT; i++) {
      this.renderRoutePoint(routePoints[i]);
    }
  }

  renderRoutePoint(routePoint) {
    const routePointComponent = new RoutePointView(routePoint);
    const routePointEditFormComponent = new RoutePointEditFormView(routePoint);

    const replaceCardToForm = () => {
      this._routePointListComponent.getElem().replaceChild(routePointEditFormComponent.getElem(), routePointComponent.getElem());
    };

    const replaceFormToCard = () => {
      this._routePointListComponent.getElem().replaceChild(routePointComponent.getElem(), routePointEditFormComponent.getElem());
    };

    routePointComponent.setClickHandler(() => {
      replaceCardToForm();
    });

    routePointEditFormComponent.setFormSubmitHandler(() => {
      replaceFormToCard();
    });

    render(this._routePointListComponent, routePointComponent.getElem(), RenderPosition.BEFOREEND);
  }
}
