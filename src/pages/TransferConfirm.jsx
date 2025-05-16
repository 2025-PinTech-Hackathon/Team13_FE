// src/pages/TransferConfirm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

import BottomBtn from "../components/BottomBtn";
import BankLogo from "../components/BankLogo";

const TransferConfirm = () => {
  const navigate = useNavigate();

  const bank = "kakao";
  const accountName = "카뱅";
  const accountNumber = "000000-00-000000";
  const balance = "100,000원";
  const receiveBank = "shinhan";
  const recipient = "박희영";
  const amount = 56700;

  return (
    <main className="relative w-full h-screen mx-auto flex flex-col justify-center items-center px-5 py-8">
      {/* 상단: 계좌 정보 */}
      <div className="flex items-center gap-[12px] space-y-2 ">
        <BankLogo bank={bank} size={64} />
        <div>
          <div className="bg-gray2 rounded-[13px] w-[303px] h-[56px] flex justify-center items-center">
            <span className="w-full text-txt-black font-medium flex justify-center Pr_Re_24">
              <b className="font-semibold mr-2">{accountName}</b> {accountNumber}
            </span>
          </div>
          <p className="text-sm text-txt-black self-start ml-1 Pr_Re_16">현재 잔액: {balance}</p>
        </div>
      </div>

      {/* 중간: 화살표 → 은행 로고 → 확인 메시지 */}
      <div className="flex flex-col items-center space-y-6 mx-auto my-5">
        <ArrowDownIcon className="w-8 h-8 text-txt-black" strokeWidth={3} />

        <div className="w-[88px] h-[88px] bg-gray1 rounded-full flex flex-col items-center justify-center">
          <BankLogo bank={receiveBank} size={88} />
        </div>

        <div className="text-center space-y-1">
          <p className="text-lg text-txt-black Pr_Re_28">
            <b className="Pr_SB_28">{recipient}</b> 님께
          </p>
          <p className="text-txt-black Pr_Re_28">
            <b className="Pr_SB_28">{amount.toLocaleString()}원</b> 을 보냅니다.
          </p>
        </div>

        <p className="Pr_Re_16 text-txt-gray-2">
          보내시려는 정보가 맞다면, 확인 버튼을 눌러 주세요.
        </p>
      </div>

      <BottomBtn prevRoute="/ar" nextRoute="/password" />
    </main>
  );
};

export default TransferConfirm;
