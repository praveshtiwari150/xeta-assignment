import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Review from "./pages/Review";
import Features from "./pages/Features";
import Navabar from "./components/Navabar";
function App() {

  const location = useLocation();
  return (
    <div className="">
      {location.pathname !== '/dashboard' &&  <Navabar/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review/>}/>
        <Route path="/features" element={<Features/>}/>
      </Routes>
    </div>
  )
}

export default App
