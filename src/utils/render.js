import Abstract from "../view/abstract";

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTER: `after`
};

export const render = (targetNode, element, place) => {
  if (targetNode instanceof Abstract) {
    targetNode = targetNode.getElem();
  }

  if (element instanceof Abstract) {
    element = element.getElem();
  }

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
