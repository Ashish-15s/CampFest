import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Event from "./pages/event/Event.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import EmailVerify from "./pages/emailVerify/EmailVerify.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<List />}></Route>
        <Route path="/events/:id" element={<Event />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/:id/verify/:token" element={<EmailVerify />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
