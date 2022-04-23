/**
 * Flatted an array
 * https://www.youtube.com/watch?v=k1lE17D5nRE
 */

function flatten(arr) {
  if (!Array.isArray(arr)) return arr;
  let result = [];

  arr.forEach((element) => {
    result = result.concat(flatten(element));
  });

  return result;
}

console.log(flatten([1, 2, 4, [5, 8, [9]], 53, [[76]]]));

/**
 * Deep Clone
 * https://www.youtube.com/watch?v=M7CBgdN58UE
 */

function deepClone(obj) {
  if (!Array.isArray(arr)) return arr;
  let result = [];

  arr.forEach((element) => {
    result = result.concat(flatten(element));
  });

  return result;
}

let objToBeCloned = {};

console.log(deepClone(objToBeCloned));
