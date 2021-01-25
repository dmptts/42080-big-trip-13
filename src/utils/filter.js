import dayjs from 'dayjs';
import {FilterType} from '../const.js';

const isPastRoutePoint = (endTime) => {
  return dayjs().isAfter(dayjs(endTime));
};

const isFutureRoutePoint = (startTime) => {
  return dayjs(startTime).isAfter(dayjs());
};

export const filter = {
  [FilterType.EVERYTHING]: (routePoints) => routePoints.filter(() => true),
  [FilterType.FUTURE]: (routePoints) => routePoints.filter((routePoint) => isFutureRoutePoint(routePoint.times.startTime)),
  [FilterType.PAST]: (routePoints) => routePoints.filter((routePoint) => isPastRoutePoint(routePoint.times.endTime))
};
