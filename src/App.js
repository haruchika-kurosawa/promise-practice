import logo from './logo.svg';
import './App.css';
async function resolveSample() {
  return 'resolve!!';
}
console.log('01');
resolveSample().then(value => {
  console.log(value); // => resolve!!
});
console.log('02');

function aFunc3(data) {
  return new Promise(function(okCallback, ngCallback) {
      setTimeout(function() {
          if (Math.random() < 0.30) {
              ngCallback(new Error('ERROR!'));
          } else {
              okCallback(data * 2);
              setTimeout(() => {
                okCallback('after setTimeout');
              },400);
          }
      }, Math.random() * 1000);
  });
}

function sample_reject() {
  aFunc3(100).then(
      (data) => { console.log(data); },    // 成功時の処理
      (e) => { console.log(e); }           // 失敗時の処理
  );
}

sample_reject();

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
