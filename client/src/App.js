import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Event from "./pages/event/Event.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<List />}></Route>
        <Route path="/events/:id" element={<Event />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
