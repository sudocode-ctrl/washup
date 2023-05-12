
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Dashboard3 from './components/dashboard3/Dashboard3';
import Dashboard1 from './components/dashboard1/Dashboard1';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Login />}> </Route>
          <Route path="/dashboard1" element={<Dashboard1 />}> </Route>
          <Route path="/dashboard3" element={<Dashboard3 />}> </Route>

          {/* <Route path="/about" element={<About />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
