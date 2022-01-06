//create a random user id
//can pass in an optional Boolean to add a hyphen and timestamp
//base value in base 36
//time value in base 16
const uid = (withTime) => {
  let id = Math.random().toString(36).substring(2, 16).padEnd(16, '0');
  if (withTime) {
    id += `-${Date.now().toString(16)}`;
  }
  return id;
};

// console.log(uid());
// console.log(uid(true));
