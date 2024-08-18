import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Watchlist from './pages/watchList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  );
}

export default App;
