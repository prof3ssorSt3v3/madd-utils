//Create a Stack data structure
function Stack() {
  this._storage = new Map();
  //we could use other structures instead
  //if we use a string then it will need a separator
  this._index = 0;
  //index will be the length|size
  //it will also be the next number to use for adding an item
}
Stack.prototype.push = function (item) {
  //add to the stack
  this._storage.set(this._index++, item);
  //increment after adding the item
};
Stack.prototype.pop = function () {
  //remove from the stack
  //return the removed item
  let item = this._storage.get(--this._index);
  //decrement index before using it
  this._storage.delete(this._index);
  return item;
};
Stack.prototype.peek = function () {
  //see an item without removing it
  return this._storage.get(this._index - 1);
};
Stack.prototype.size = function () {
  //determine the size of the stack
  return this._index;
};

// let pets = new Stack();
// pets.push('Dog');
// pets.push('Cat');
// pets.peek(1);
// pets.size();
// pets.pop();
