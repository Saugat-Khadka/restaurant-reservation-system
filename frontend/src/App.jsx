import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Success from "./pages/Success.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ff] to-white text-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;