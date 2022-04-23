function add(a, b) {
  return a + b;
}

const memoize = performant(add);

memoize(1, 2);
memoize(3, 4);
memoize(1, 2);
memoize(3, 4);
memoize(9, 4);

function performant(fn) {
  const cache = {};
  return (...args) => {
    let key = fn.name + args.toString();
    if (cache[key]) {
      console.log("from cache");
      return cache[key];
    } else {
      console.log("calculating");
      let res = fn(...args);
      cache[key] = res;
      return res;
    }
  };
}
