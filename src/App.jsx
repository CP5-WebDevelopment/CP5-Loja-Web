import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import Cardapio from './pages/cardapio'
// import Navbar from './components/navbar'
// import Footer from './components/footer'

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cardapio" element={<Cardapio />} /> */}
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}