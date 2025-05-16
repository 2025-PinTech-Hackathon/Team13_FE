import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";
import SendMoney from "./pages/SendMoney";
import MyAccount from "./pages/MyAccount";
import SendMoneyCamera from "./pages/SendMoneyCamera";
import TransferConfirm from "./pages/TransferConfirm";
import Password from "./pages/Password";
import AR from "./pages/AR";
import SendMoneyLoading from "./pages/SendMoneyLoading";

import "./styles/fonts.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {/* <Route index element={<Landing />} /> */}
            {/* <Route index element={<SendMoneyCamera />} /> */}
            <Route index element={<TransferConfirm />} />
            {/* <Route index element={<SendMoneyCamera />} /> */}
            <Route path="/ar" element={<AR />} />
            <Route path="/confirm" element={<TransferConfirm />} />
            {/* <Route index element={<SendMoneyCamera />} /> */}
            <Route path="/loading" element={<SendMoneyLoading />} />
          </Route>

          {/* 돈 송금하기 */}
          <Route path="/send_money" element={<SendMoney />}></Route>

          {/* 내 계좌 보기 */}
          <Route path="/my_account" element={<MyAccount />}></Route>

          {/* 송금 비밀번호 입력 */}
          <Route path="/password" element={<Password />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
