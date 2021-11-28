import './App.css';
import ListBox from "./components/ListBox"
import Detail from "./components/Detail"
import {Router, Switch, Route, BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListBox}></Route>
            <Route path="/detail" component={Detail}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
