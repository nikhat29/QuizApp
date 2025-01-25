import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import "./App.css"
import QuizInstructions from "./Components/QuizInstructions";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <div className="App">
      <Router basename="/QuizApp">
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/play/instructions" element={<QuizInstructions/>}/>
          <Route path="/play" element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
