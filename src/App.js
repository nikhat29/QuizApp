import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import "./App.css"
import QuizInstructions from "./Components/QuizInstructions";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/play/instructions" exact element={<QuizInstructions/>}/>
          <Route path="/play" exact element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
