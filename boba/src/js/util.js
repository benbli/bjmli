export function getMousePosition(e, el) {
  const boundingRect = el.getBoundingClientRect();
  return {
    x: e.clientX - boundingRect.left,
    y: e.clientY - boundingRect.top,
  };
}
