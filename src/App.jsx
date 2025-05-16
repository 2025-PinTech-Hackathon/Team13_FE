import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
