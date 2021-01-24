import RoutePointEditFormView from "../view/editing-form.js";
import {BLANK_ROUTE_POINT} from "../mock/route-point.js";
import {getId} from '../mock/route-point.js';
import {remove, render, RenderPosition} from "../utils/render.js";
import {UpdateType, UserAction} from "../const.js";

export default class NewRoutePoint {
  constructor(routePointListComponent, changeData) {
    this._routePointListComponent = routePointListComponent;
    this._changeData = changeData;

    this._routePointEditFormComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    if (this._routePointEditFormComponent !== null) {
      return;
    }

    this._routePointEditFormComponent = new RoutePointEditFormView(BLANK_ROUTE_POINT, true);
    this._routePointEditFormComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._routePointEditFormComponent.setDeleteClickHandler(this._handleDeleteClick);

    render(this._routePointListComponent, this._routePointEditFormComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  destroy() {
    if (this._routePointEditFormComponent === null) {
      return;
    }

    remove(this._routePointEditFormComponent);
    this._routePointEditFormComponent = null;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleFormSubmit(routePoint) {
    this._changeData(
        UserAction.ADD_ROUTE_POINT,
        UpdateType.MAJOR,
        Object.assign({id: getId()}, routePoint));
    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}
