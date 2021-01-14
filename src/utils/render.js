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

export const replace = (newNode, oldNode) => {
  if (oldNode instanceof Abstract) {
    oldNode = oldNode.getElem();
  }

  if (newNode instanceof Abstract) {
    newNode = newNode.getElem();
  }

  const parent = oldNode.parentElement;

  if (oldNode === null || newNode === null || parent === null) {
    throw new Error(`Can't replace existing elements`);
  }

  parent.replaceChild(newNode, oldNode);
};

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};
