import RoutePointView from '../view/route-point.js';
import RoutePointEditFormView from '../view/editing-form.js';
import { render, RenderPosition } from '../utils/render.js';

export default class RoutePoint {
  constructor(routePointListComponent) {
    this._routePointListComponent = routePointListComponent;

    this._routePointComponent = null;
    this._routePointEditFormComponent = null;

    this._dropdownClickHandler = this._dropdownClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  init(routePoint) {
    this._routePoint = routePoint;

    this._routePointComponent = new RoutePointView(routePoint);
    this._routePointEditFormComponent = new RoutePointEditFormView(routePoint);

    this._routePointComponent.setDropdownClickHandler(this._dropdownClickHandler);
    this._routePointEditFormComponent.setFormSubmitHandler(this._formSubmitHandler);

    render(this._routePointListComponent, this._routePointComponent, RenderPosition.BEFOREEND);
  }

  _replaceCardToForm() {
    this._routePointListComponent.getElem().replaceChild(this._routePointEditFormComponent.getElem(), this._routePointComponent.getElem());
  }

  _replaceFormToCard() {
    this._routePointListComponent.getElem().replaceChild(this._routePointComponent.getElem(), this._routePointEditFormComponent.getElem());
  }

  _dropdownClickHandler() {
    this._replaceCardToForm();
  }

  _formSubmitHandler() {
    this._replaceFormToCard();
  }
}
