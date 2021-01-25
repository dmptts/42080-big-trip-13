import RoutePointView from '../view/route-point.js';
import RoutePointEditFormView from '../view/editing-form.js';
import {render, replace, remove, RenderPosition} from '../utils/render.js';

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class RoutePoint {
  constructor(routePointListComponent, changeData, changeMode) {
    this._routePointListComponent = routePointListComponent;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._routePointComponent = null;
    this._routePointEditFormComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleRollupClick = this._handleRollupClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(routePoint) {
    this._routePoint = routePoint;

    const prevRoutePointComponent = this._routePointComponent;
    const prevRoutePointEditFormComponent = this._routePointEditFormComponent;

    this._routePointComponent = new RoutePointView(routePoint);
    this._routePointEditFormComponent = new RoutePointEditFormView(routePoint);

    this._routePointComponent.setRollupClickHandler(this._handleRollupClick);
    this._routePointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._routePointEditFormComponent.setRollupClickHandler(this._handleRollupClick);
    this._routePointEditFormComponent.setFormSubmitHandler(this._handleFormSubmit);

    if (prevRoutePointComponent === null || prevRoutePointEditFormComponent === null) {
      render(this._routePointListComponent, this._routePointComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._routePointComponent, prevRoutePointComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._routePointEditFormComponent, prevRoutePointEditFormComponent);
    }

    if (prevRoutePointComponent !== null || prevRoutePointEditFormComponent !== null) {
      remove(prevRoutePointComponent);
      remove(prevRoutePointEditFormComponent);
    }
  }

  destroy() {
    remove(this._routePointComponent);
    remove(this._routePointEditFormComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceCardToForm() {
    replace(this._routePointEditFormComponent, this._routePointComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToCard() {
    replace(this._routePointComponent, this._routePointEditFormComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _handleRollupClick() {
    if (this._mode === Mode.DEFAULT) {
      this._replaceCardToForm();
      return;
    }

    if (this._mode === Mode.EDITING) {
      this._replaceFormToCard();
    }
  }

  _handleFavoriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._routePoint,
            {isFavorite: !this._routePoint.isFavorite}
        )
    );
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._routePointEditFormComponent.reset(this._task);
      this._replaceFormToCard();
    }
  }

  _handleFormSubmit(routePoint) {
    this._changeData(routePoint);
    this._replaceFormToCard();
  }
}
