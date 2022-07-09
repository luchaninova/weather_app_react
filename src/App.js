import Search from "./Search";
import Weather from "./Weather";
import Author from "./Author";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <div className="container">
            <div className="wrapper">
              <Search />
              <Weather />
              <Author />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
