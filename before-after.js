//Extend the Element object's prototype to add a
// _before and _after method to find the element node that
// exists before or after within the same parent element

Element.prototype._before = function () {
  let children = Array.from(this.parentElement.children);
  let index = children.findIndex((elem) => elem == this);
  if (index === 0) {
    // console.log('First element. Nothing before');
    return null;
  }
  return children[index - 1];
};

Element.prototype._after = function () {
  let children = Array.from(this.parentElement.children);
  let index = children.findIndex((elem) => elem == this);
  if (index === children.length - 1) {
    // console.log('Last element. Nothing after');
    return null;
  }
  return children[index + 1];
};
