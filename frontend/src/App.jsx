import React from 'react'
import { Route, Routes } from "react-router"
import HomePage from './pages/homepage'
import CreatePage from './pages/createpage'
import NoteDetailPage from './pages/notedetailpage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="dark">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/create/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App