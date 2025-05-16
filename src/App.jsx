import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";
import SendMoney from "./pages/SendMoney";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Landing />} />
          </Route>

            {/* 돈 송금하기 */}
          <Route path="/send_money" element={<SendMoney />}></Route>

            {/* 내 계좌 보기 */}
          <Route path="/my_account" element={<MyAccount />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
