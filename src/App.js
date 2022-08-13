import "./App.css";

function JSONPromise(value) {
  return new Promise((resolve) => {
      resolve(JSON.parse(value));
  });
}

// 実行例
var string = "xxxxxxxxxxxx";
JSONPromise(string).then(function (object) {
  console.log(object);
}).catch((error) => {
  console.error(error);
});

export default App;
