import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { ScrollToTop } from "./components";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          
      </BrowserRouter>
    </div>
  )
}

export default App
