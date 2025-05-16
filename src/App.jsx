import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";
import SendMoney from "./pages/SendMoney";
import SendMoneyCamera from "./pages/SendMoneyCamera";
import TransferConfirm from "./pages/TransferConfirm";
import Password from "./pages/Password";
import AR from "./pages/AR";
import SendMoneyLoading from "./pages/SendMoneyLoading";

import "./styles/fonts.css";
import Loading from "./pages/Loading";
import SendMoneyComplete from "./pages/SendMonyComplete";
import AccountView from "./pages/AccountView";

import Step1 from "./pages/how_to_use/Step1";
import Step2 from "./pages/how_to_use/Step2";
import Step3 from "./pages/how_to_use/Step3";
import Step4 from "./pages/how_to_use/Step4";
import MyBankBooks from "./pages/MyBankbooks";
import AR2 from "./pages/AR2";

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
            <Route path="/ar2" element={<AR2 />} />
            <Route path="/send_money_loading" element={<SendMoneyLoading />} />
            <Route path="/confirm" element={<TransferConfirm />} />
            <Route path="/password" element={<Password />} />
            <Route path="/send_complete" element={<SendMoneyComplete />} />
            <Route path="/account_view" element={<MyBankBooks />} />
            <Route path="/account_view/detail" element={<AccountView />} />
            {/* <Route index element={<SendMoneyCamera />} /> */}

            <Route path="/loading" element={<Loading />} />
          </Route>

          {/* 돈 송금하기 */}
          <Route path="/send_money" element={<SendMoney />}></Route>

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
