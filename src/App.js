import "./App.css";


const aPromise = new Promise((resolve) => {
  resolve(100);
});
const thenPromise = aPromise.then((value) => {
  console.log(value);
});
const catchPromise = thenPromise.catch((error) => {
  console.error(error);
});
console.log(aPromise !== thenPromise);
console.log(thenPromise !== catchPromise);

function App() {
	return <div className="App"></div>;
}

export default App;
