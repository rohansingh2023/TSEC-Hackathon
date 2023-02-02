import Navbar from './components/dashboard/Navbar'


// import interview from './components/Interviews/Interview'


import Question from './components/Interviews/Question';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

  
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
