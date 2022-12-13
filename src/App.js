import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
    <Router>
      <div className="App">
        <NavLink exact to='adduser'><a>Add User</a></NavLink>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/adduser'><AddUser/></Route>
        <Route exact path='/adduser'><EditUser/></Route>
      </div>
    </Router>
  );
}

export default App;
