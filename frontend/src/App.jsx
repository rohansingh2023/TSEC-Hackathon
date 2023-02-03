import Navbar from './components/dashboard/Navbar'


// import interview from './components/Interviews/Interview'

import Bar from "./Bar";
import Pie from "./Pie";
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
          <Route exact path="/barchart" element={<Bar/>} />
          <Route exact path="/piechart" element={<Pie/>} />
          {/* <Route exact path="/linechart" element={<Line/>} /> */}
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
