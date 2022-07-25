import logo from './logo.svg';
import './App.css';

setTimeout(() => {
  console.log('A03');
}, 300);



console.log('A01');
new Promise((resolve) => {
  setTimeout(() => {
    console.log('A02');
    resolve();
  }, 300);
}).then(() => {
  console.log('A03');
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
