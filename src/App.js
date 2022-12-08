import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path='/' component={Home} />
      </Switch> */}
      <AddUser/>
      <Home />
    </div>
  );
}

export default App;
