import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add-user' element={<AddUser />} />
          <Route exact path='/edit-user/:id' element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
