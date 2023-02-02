import Navbar from './components/dashboard/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Question from './components/Interviews/Question' 

const App = () => {
  return (

    <div>    

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/interview" element={<Question/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
