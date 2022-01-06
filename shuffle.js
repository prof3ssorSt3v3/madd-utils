// Extend the Array to add a shuffle method
// to randomly shuffle the array

Array.prototype.shuffle = function (repeat = 1) {
  //shuffle the contents of an array of primitives
  //capped at 100000 shuffle loops
  repeat = Math.min(repeat, 100000);
  let len = this.length;
  for (let r = 0; r < repeat; r++) {
    for (let i = 0; i < len; i++) {
      let paired = Math.floor(Math.random() * len);
      if (paired !== i) {
        let temp = this[paired];
        this[paired] = this[i];
        this[i] = temp;
      }
    }
  }
};

// let names = ['Luke', 'Leia', 'Rey', 'Kylo', 'Anakin', 'Obiwan', 'Qui-Gon'];
// names.shuffle();
// console.log(names);
// names.shuffle(55555);
// console.log(names);
