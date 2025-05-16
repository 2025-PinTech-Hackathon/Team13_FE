import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";
import AR from "./pages/AR";
import Loading from "./pages/Loading";

import "./styles/fonts.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Landing />} />
            <Route path="/ar" element={<AR />} />
            <Route path="/loading" element={<Loading />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
