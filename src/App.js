import "./App.css";


fetch('https://httpbin.org/get')
  .then(response => response.json())
  .then(data => console.log(data));

function App() {
	return <div className="App"></div>;
}

export default App;
