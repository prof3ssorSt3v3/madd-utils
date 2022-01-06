const uid = (withTime) => {
  let id = Math.random().toString(36).substring(2, 16).padEnd(16, '0');
  if (withTime) {
    id += `-${Date.now()}`;
  }
  return id;
};
