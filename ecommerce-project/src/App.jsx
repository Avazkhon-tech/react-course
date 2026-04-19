import './App.css'
import {HomePage} from './pages/HomePage.jsx';
import {Routes, Route} from 'react-router'

function App() {

  return (
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/checkout" element={<div><h1>Checkout</h1></div>} />
      </Routes>
  )
}

export default App
