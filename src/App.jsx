import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Import Pages
import HomePage from './pages/HomePage'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}