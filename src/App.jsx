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
import Loading from "./pages/Loading";
import SendMoneyComplete from "./pages/SendMonyComplete";
import AcountView from "./pages/AccountView";

import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Landing />} />
            {/* <Route index element={<SendMoneyCamera />} /> */}
            {/* <Route index element={<TransferConfirm />} /> */}
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />

            <Route path="/ar" element={<AR />} />
            <Route path="/send_money_loading" element={<SendMoneyLoading />} />
            <Route path="/confirm" element={<TransferConfirm />} />
            <Route path="/password" element={<Password />} />
            <Route path="/send_complete" element={<SendMoneyComplete />} />
            <Route path="/account_view" element={<AcountView />} />
            {/* <Route index element={<SendMoneyCamera />} /> */}

            <Route path="/loading" element={<Loading />} />

          </Route>

          {/* 돈 송금하기 */}
          <Route path="/send_money" element={<SendMoney />}></Route>

          {/* 내 계좌 보기 */}
          <Route path="/my_account" element={<MyAccount />}></Route>

            {/* 송금 컨펌 페이지 */}
            <Route path="/transfer_confirm" element={<TransferConfirm />}></Route>

          {/* 송금 비밀번호 입력 */}
          <Route path="/password" element={<Password />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
