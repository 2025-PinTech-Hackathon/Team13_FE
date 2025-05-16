import React from "react";
import { useNavigate } from "react-router-dom";

import ic_down_arrow from "../assets/ic_down_arrow.svg";

const AccountView = () => {
  const navigate = useNavigate();

  const transactions = [
    { type: "출금", date: "2025.05.16 12:00", amount: -56700, balance: 43300 },
    { type: "입금", date: "2025.05.15 15:30", amount: 100000, balance: 100000 },
    { type: "출금", date: "2025.05.14 09:15", amount: -25000, balance: 75000 },
    { type: "입금", date: "2025.05.13 14:20", amount: 50000, balance: 100000 },
    { type: "출금", date: "2025.05.12 11:45", amount: -30000, balance: 50000 },
    { type: "입금", date: "2025.05.11 16:00", amount: 80000, balance: 80000 },
    { type: "출금", date: "2025.05.10 13:30", amount: -15000, balance: 65000 },
    { type: "입금", date: "2025.05.09 10:20", amount: 20000, balance: 80000 },
    { type: "출금", date: "2025.05.08 17:45", amount: -40000, balance: 60000 },
    { type: "입금", date: "2025.05.07 09:00", amount: 30000, balance: 100000 },
  ];

  return (
    <main className="pt-[64px] w-[480px] min-h-screen flex flex-col items-center">
      {/* 입출금 계좌 박스 */}
      <section className="flex flex-col items-center mb-[44px]">
        <div className="w-[432px] h-[226px] rounded-[10px] border border-main bg-bg">
          <div className="w-full h-[56px] rounded-t-[10px] rounded-b-none bg-main flex items-center">
            <p className="Pr_Re_20 text-txt-black ml-[16px]">입출금 계좌</p>
          </div>

          <div className="relative pt-[20px] px-[16px]">
            <div className="flex justify-start gap-[12px]">
              <div className="w-[48px] h-[48px] rounded-full bg-sub_green ">
                <p className="text-white text-center mt-3">내돈</p>
              </div>
              <div className="">
                <p className="Pr_Re_16 text-txt-gray-1">최준혁</p>
                <div className="flex">
                  <p className="Pr_SB_20">내돈은행&nbsp;</p>
                  <p className="Pr_Re_20">000000-00-000000</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-[32px]">
              <p className="Pr_SB_28">43,300원</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[432px]">
        <div className="flex">
          <p className="Pr_SB_20">5월</p>
          <p className="Pr_Re_20">&nbsp;거래내역</p>
        </div>
        <hr />

        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between py-[24px]">
            <div>
              <p className="Pr_SB_20">{transaction.type}</p>
              <p className="Pr_Re_20 text-txt-gray-1">{transaction.date}</p>
            </div>
            <div className="flex flex-col items-end">
              <p
                className={
                  "Pr_SB_20 " + (transaction.amount < 0 ? "text-[#C62828]" : "text-sub_green")
                }
              >
                {transaction.amount.toLocaleString()}원
              </p>
              <p className="Pr_Re_16 text-txt-gray-1">
                잔액: {transaction.balance.toLocaleString()}원
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 공간 채우기용 더미 */}
      <div className="h-[195px]"></div>

      <section className="flex flex-col gap-[32px] fixed bottom-0 max-w-[480px] w-screen ">
        <div
          className="flex flex-col justify-center items-center animate-bounce"
          style={{
            animation: "moveArrow 1.5s infinite ease-in-out",
          }}
        >
          <div className="flex justify-center items-center mb-[4px] w-[267px] h-[56px] rounded-[10px] bg-gray2 Pr_Re_20 text-txt-gray-1">
            아래로 내려서 내역 더보기
          </div>
          <img className="w-[48px] h-[24px] " src={ic_down_arrow} alt="ic_down_arrow" />
        </div>

        <style jsx>{`
          @keyframes moveArrow {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}</style>

        <button
          className="flex justify-center items-center w-screen h-[79px] Pr_SB_20 bg-gray2"
          onClick={() => navigate("/")}
        >
          처음 화면으로
        </button>
      </section>
    </main>
  );
};

export default AccountView;
