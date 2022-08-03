import "./App.css";

function asyncTest() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('setTimeout end');
		}, 200);
	});
}

const promiseObj = asyncTest();

promiseObj.then((result) => {
	console.log(result);
}).catch((error) => {
	console.log(error);
}).finally(() => {
	console.log('finally');
});

function App() {
	return <div className="App"></div>;
}

export default App;
