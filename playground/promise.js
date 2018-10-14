var add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      }
      reject("You must provide 2 numbers in order to use this function");
    }, 1500);
  });
};

add(2, 3)
  .then(result => {
    console.log(`First result: ${result}`);
    // Promise chaining
    return add(result, 5);
  })
  .then(result => console.log(`Second result: ${result}`))
  .catch(error => console.log(error));

