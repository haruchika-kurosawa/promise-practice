import "./App.css";

function loadScript(src) {
	return new Promise((resolve, reject) => {
		let script = document.createElement("script");
		script.src = src;

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error("Script load error: " + src));

		document.head.append(script);
	});
}

let promise = loadScript(
	"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
	(script) => alert(`${script.src} is loaded!`),
	(error) => alert(`Error: ${error.message}`)
);

promise.then((script) => alert("Another handler..."));

function App() {
	return <div className="App"></div>;
}

export default App;
