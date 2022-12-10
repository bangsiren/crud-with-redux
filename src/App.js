import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
    <div className="App">
      {/* <AddUser/> */}
      <EditUser/>
      <Home />
    </div>
  );
}

export default App;
