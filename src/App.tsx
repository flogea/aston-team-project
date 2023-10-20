import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  )
}

export default App
