import Search from "./Search";
import Weather from "./Weather";

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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
