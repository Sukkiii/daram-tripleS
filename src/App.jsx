import { Outlet } from 'react-router'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import SearchDetailPage from './pages/SearchDetailPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-detail" element={<SearchDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
