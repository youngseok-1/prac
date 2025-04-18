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
import Sound from "./pages/Sound";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import PostDetail from './pages/PostDetail';

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/serving" element={<ServingPage />} /> 
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/online" element={<Online />} />   
        <Route path="/alumni1" element={<AlumniGreeting />} />
        <Route path="/alumni2" element={<Alumni2 />} />
        <Route path="/alumni3" element={<Alumni3 />} />
        <Route path="/alumni4" element={<Alumni4 />} />
        <Route path="/sound" element={<Sound />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>  
    </Router>
  );
}

export default App;
