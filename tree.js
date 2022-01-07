// N-ary Tree (any number of children)
function Tree(value) {
  this.value = value;
  this.children = [];
}

// Adds child to tree or subtree bound to this keyword
// O(1)
Tree.prototype.addChild = function (value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
};

// O(n)
Tree.prototype.contains = function (value) {
  if (this.value === value) return true;
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) return true;
  }
  return false;
};

Tree.prototype.traverseDepthFirst = function (fn) {
  this.children.forEach(function (child) {
    child.traverseDepthFirst(fn);
  });
  fn(this);
};

Tree.prototype.traverseBreadthFirst = function (fn) {
  let queue = [this];
  while (queue.length) {
    let node = queue.shift();
    fn(node.value);
    node.children.forEach(function (child) {
      queue.push(child);
    });
  }
};

Tree.prototype.removeChild = function (key) {
  //TODO:
};

// let tree = new Tree(1);
// let branch1 = tree.addChild(2);
// let branch2 = tree.addChild(3);
// let branch3 = tree.addChild(4);
// branch1.addChild(5);
// branch1.addChild(6);
// branch3.addChild(7).addChild(8);

// let depthFirstResult = [];
// tree.traverseDepthFirst(function (node) {
//   depthFirstResult.push(node.value);
// });
// console.log(depthFirstResult, 'should be [5,6,2,3,8,7,4,1]');

// let breadthFirstResult = [];
// tree.traverseBreadthFirst(function (node) {
//   breadthFirstResult.push(node);
// });
// console.log(breadthFirstResult, 'should be [1,2,3,4,5,6,7,8]');
