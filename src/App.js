import "./App.css";


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

function inc(value) {
  return value++;
}

function double(value) {
  return value*2;
}

function output(value) {
  console.log(value);
}

promise
.then(inc)
.then(double)
.then(output);

function App() {
	return <div className="App"></div>;
}

export default App;
