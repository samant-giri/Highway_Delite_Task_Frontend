
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import "./App.css";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SignIn/>} />
        <Route path='/signup' element={ <SignUp/>} />
        <Route path='/welcome/:name' element={ <Welcome/>} />
      </Routes>
      <Toaster position="top-center"/>
    </BrowserRouter>
  )
}

export default App