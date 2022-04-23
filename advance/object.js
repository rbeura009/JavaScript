// "use strict";
let obj = new Object({
  loo: "loo",

  //   get loo() {
  //     console.log("getting");
  //   },
});
obj.foo = "Hello";
obj.goo = "Hi";
Object.defineProperty(obj, "hoo", { value: "hi" });
// console.log(obj.hoo);
// console.log(obj.hasOwnProperty("hoo"));
// console.log("hoo" in obj);
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

// Object.preventExtensions(obj);
// Object.freeze(obj);
Object.seal(obj);
// obj.name = "Rose";
obj.foo = "new";
// delete obj.name;
// delete obj.foo;
console.log(obj.loo);

let o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
);

console.log(o2);
