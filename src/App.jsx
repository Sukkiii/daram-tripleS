import { Outlet } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import SearchDetailPage from './pages/SearchDetailPage'

function App() {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route element={<Outlet />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search-detail" element={<SearchDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
