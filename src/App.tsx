import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/login" element={<Welcome />} />
        <Route path="/register" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
