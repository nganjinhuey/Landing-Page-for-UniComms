import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeBM from './pages/HomeBM';
import HomeCN from './pages/HomeCN';
import HomeV2 from './pages/HomeV2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/bm" element={<HomeBM />} />
        <Route path="/cn" element={<HomeCN />} />
        <Route path="/v2" element={<HomeV2 />} />
      </Routes>
    </Router>
  );
};

export default App;