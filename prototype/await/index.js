async function abc() {
  await xyz(2000);

  await xyz(2000);
}

function xyz(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, time);
  });
}
