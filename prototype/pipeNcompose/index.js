let str = "Rashmiranjan";

let comp = compose(sub, rev, low);
let pip = pipe(sub, rev, low);

console.log(comp(str));
console.log(pip(str));
console.log(str);

function sub(str) {
  return str.substring(0, 6);
}

function rev(str) {
  return str.split("").reverse().join("");
}

function low(str) {
  return str.toLowerCase();
}

function compose(...func) {
  return (arg) => {
    return func.reduceRight((acc, fn) => fn(acc), arg);
  };
}

function pipe(...func) {
  return (arg) => {
    return func.reduce((acc, fn) => fn(acc), arg);
  };
}
