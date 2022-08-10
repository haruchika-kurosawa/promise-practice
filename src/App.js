import "./App.css";


function onReadyPromise() {
  return new Promise((resolve) => {
      const readyState = document.readyState;
      if (readyState === "interactive" || readyState === "complete") {
          resolve();
      } else {
          window.addEventListener("DOMContentLoaded", resolve);
      }
  });
}
onReadyPromise().then(() => {
  console.log("DOM fully loaded and parsed");
});
console.log("==Starting==");

function App() {
	return <div className="App"></div>;
}

export default App;
