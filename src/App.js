import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Detail from './routes/Detail';
import Home from './routes/Home';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;