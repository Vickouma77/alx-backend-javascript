export const weakmap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakmap.has(endpoint)) {
    weakmap.set(endpoint, weakmap.get(endpoint) + 1);
  } else {
    weakmap.set(endpoint, 1);
  }
  if (weakmap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
};
