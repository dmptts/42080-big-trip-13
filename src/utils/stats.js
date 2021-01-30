import dayjs from 'dayjs';

export const getCostByType = (routePoints, type) => {
  return routePoints.filter((routePoint) => routePoint.type === type).reduce((sum, current) => {
    return sum + current.price;
  }, 0);
};

export const getPointsByType = (routePoints, type) => {
  return routePoints.filter((routePoint) => routePoint.type === type).length;
};

export const getDurationByType = (routePoints, type) => {
  return (routePoints.filter((routePoint) => routePoint.type === type).reduce((sum, current) => {
    return sum + dayjs(current.times.endTime).diff(dayjs(current.times.startTime), `h`);
  }, 0) / 24).toFixed();
};
