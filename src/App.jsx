import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Robot from "./Pages/Robot"
import Page2 from "./Pages/Page2"

function App() {
    
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robots.txt" element={<Robot/>} />
        <Route path="/hype354789636" element={<Page2 />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
