import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from './pages/Hotel'
import MyPage from '@pages/My'
import SigninPage from '@pages/Signin'
import useLoadKakao from './hooks/useLoadKakao'

import AuthGuard from './components/auth/AuthGuard'
import Navbar from './components/shared/Navbar'

function App() {
  useLoadKakao()

  return (
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App
