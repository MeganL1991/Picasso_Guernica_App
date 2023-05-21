import './App.css';
import Navbar from './Components/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import { Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
