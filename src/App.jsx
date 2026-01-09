import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Import Pages
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Navbar />
      </Router>
    </>

  )
}