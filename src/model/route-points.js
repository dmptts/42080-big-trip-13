import Observer from '../utils/observer.js';

export default class RoutePoints extends Observer {
  constructor() {
    super();
    this._routePoints = [];
  }

  setRoutePoints(routePoints) {
    this._routePoints = routePoints.slice();
  }

  getRoutePoints() {
    return this._routePoints;
  }
}
