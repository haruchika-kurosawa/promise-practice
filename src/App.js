function timerPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

Promise.all([
  timerPromise(100),
  timerPromise(500),
  timerPromise(200),
  timerPromise(300),
]).then((values) => {
  console.log(values);
});

export default App;
