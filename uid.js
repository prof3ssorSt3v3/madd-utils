//create a random user id
//can pass in an optional Boolean to add a hyphen and timestamp
//all values are in base 36
const uid = (withTime) => {
  let id = Math.random().toString(36).substring(2, 16).padEnd(16, '0');
  if (withTime) {
    id += `-${Date.now().toString(36)}`;
  }
  return id;
};
