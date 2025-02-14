import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    // El provider es el contexto, para compartir datos desde cualquier nivel
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/cat' element={<h1>cat</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App