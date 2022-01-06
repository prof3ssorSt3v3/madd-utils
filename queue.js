function Queue() {
  this._storage = {};
  this._head = 0; // key for next in line
  this._tail = 0; // key for last in line
  //head and tail are both numbers but when used as object keys
  //they will be converted to a string value before accessing the object
}
Queue.prototype.enqueue = function (value) {
  this._storage[this._tail++] = value;
  return this.count();
};
Queue.prototype.dequeue = function () {
  let element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
};
Queue.prototype.peek = function () {
  return this._storage[this._head];
};
Queue.prototype.count = function () {
  return this._tail - this._head;
};
Queue.prototype.contains = function (value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
};

// let q = new Queue();
// q.enqueue('Alex');
// q.enqueue('Devon');
// q.enqueue('Riley');
// q.enqueue('Cole');
// q.count();
// q.contains('Riley');
// let next = q.peek(3);
// let name = q.dequeue();
