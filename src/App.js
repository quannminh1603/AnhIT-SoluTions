import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CoursePage from './pages/CoursePage/CoursePage';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/course" element={<CoursePage/>} />
        </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
