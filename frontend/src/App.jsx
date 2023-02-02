import Navbar from './components/dashboard/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Question from './components/Interviews/Question' 

const App = () => {
  return (

    <div>
      {/* <Navbar/> */}
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/interview" element={<Interview.jsx />} > */}
          <Route path="/interview" element={<Question />} >
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} > */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
