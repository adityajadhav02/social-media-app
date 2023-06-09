import {Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import {useContext} from 'react';
import {AuthContext} from './context/AuthContext'



function App() {
  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route  
          path="/"
          element={user ? <Home /> : <Signup />}
        />
        <Route  
          path="/login"
          element={user ? <Navigate to="/"/> : <Login />}
        />
        <Route  
          path="/signup"
          element={user ? <Navigate to="/"/> : <Signup />}
        />
        <Route  
          path="/profile/:username"
          element={<Profile />}
        />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
