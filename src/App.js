import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // ✅ 메인 페이지
import ServingPage from "./pages/ServingPage"; // ✅ 모시는 글 페이지
import Introduce from "./pages/Introduce"; // ✅ 모시는 글 페이지
import Entrance from "./pages/Entrance"; // ✅ 모시는 글 페이지
import Online from "./pages/Online"; // ✅ 모시는 글 페이지
import AlumniGreeting from "./pages/AlumniGreeting";
import Alumni2 from "./pages/Alumni2";
import Alumni3 from "./pages/Alumni3";
import Alumni4 from "./pages/Alumni4";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ 홈 페이지 */}
        <Route path="/serving" element={<ServingPage />} /> {/* ✅ 모시는 글 페이지 */}
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/online" element={<Online />} />   
        <Route path="/alumni1" element={<AlumniGreeting />} />
        <Route path="/alumni2" element={<Alumni2 />} />
        <Route path="/alumni3" element={<Alumni3 />} />
        <Route path="/alumni4" element={<Alumni4 />} />
      </Routes>  
    </Router>
  );
}

export default App;
