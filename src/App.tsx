import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import CadastroFatura from './pages/CadastroFatura'


function App() {

  return (
    <div className="app h-full w-full">
      <Router>
       
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/fatura' element={<CadastroFatura/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
