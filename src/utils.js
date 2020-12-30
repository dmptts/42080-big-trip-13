export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTER: `after`
};

export const render = (targetNode, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      targetNode.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      targetNode.append(element);
      break;
    case RenderPosition.AFTER:
      targetNode.after(element);
      break;
  }
};

export const getRandomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
