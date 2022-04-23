//implement promise all

const myPromiseAll = function (promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i in promises) {
      promises[i]
        .then((res) => {
          result.push(res);
          if (i == promises.length - 1) {
            resolve(result);
          }
        })
        .catch((e) => reject(e));
    }
  });
};

myPromiseAll([Promise.resolve(5), Promise.resolve(6)])
  .then((res) => {
    console.log("success");
    console.log(res);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
