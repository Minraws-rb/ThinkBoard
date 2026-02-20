import React from 'react'
import { Route, Routes} from "react-router";

import HomePage from './pages/homepage';
import CreatePage from './pages/createpage';
import NoteDetailPage from './pages/notedetailpage';
import toast from 'react-hot-toast';
const App = () => {
  return  (<div>

    <button onClick={() => toast.success("congrats")} className="text-red-500 p-4 bg-pink-300">
      Click me
      </button>

      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/create" element={< CreatePage />} />
        <Route path="/create/:id" element={< NoteDetailPage />} />

      </Routes>
    </div>);
  
};

export default App;
