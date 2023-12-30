import './App.css'
import Leagues from "@features/Leagues/Leagues.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/leagues" element={<Leagues/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
