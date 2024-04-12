import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '@shared/ScrollToTop'

import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import CardPage from '@pages/Card'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'
import Navbar from '@/components/shared/Navbar'
import PrivateRoute from './components/auth/PrivateRoute'
import ApplyPage from './pages/Apply'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/test" Component={TestPage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/signup" Component={SignupPage} />

        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <ApplyPage />
            </PrivateRoute>
          }
        />
        <Route path="/signin" Component={SigninPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
