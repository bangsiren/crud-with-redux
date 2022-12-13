import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Route>
          <AddUser />
          <EditUser />
        </Route>
      </Router>
    </div>
  );
}

export default App;
