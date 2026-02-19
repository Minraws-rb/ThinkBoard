import React from 'react'

import homepage from './pages/homepage';
import createpage from './pages/createpage';
import notedetailpage from './pages/notedetailpage';
const App = () => {
  return  <div>

      <Routes>
        <Route path="/" element={< homepage />} />
        <Route path="/create" element={< createpage />} />
        <Route path="/create/:id" element={< notedetailpage />} />

      </Routes>
    </div>;
  
};

export default App
