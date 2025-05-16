// src/pages/TransferConfirm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const TransferConfirm = () => {
  const navigate = useNavigate();
  const accountName = "내돈";
  const accountNumber = '000000-00-000000';
  const balance = '100,000원';
  const bankNameLines = ['머니', '은행'];
  const recipient = '박희영';
  const amount = 56700;

  return (
    <main className="relative w-[480px] h-[1000px] mx-auto flex flex-col justify-center items-center px-5 py-8">

      {/* 상단: 계좌 정보 */}
      <div className="flex flex-col items-center space-y-2 ">
        <div className="bg-gray1 rounded-[13px] w-[303px] h-[56px] flex justify-center items-center">
          <span className="w-full text-txt-black font-medium flex justify-center Pr_Re_24"><b className="font-semibold mr-2">{accountName}</b> {accountNumber}</span>
        </div>
        <p className="text-sm text-txt-black self-start ml-1 Pr_Re_16">현재 잔액: {balance}</p>
      </div>

      {/* 중간: 화살표 → 은행 로고 → 확인 메시지 */}
      <div className="flex flex-col items-center space-y-6 mx-auto my-5">
        <ArrowDownIcon className="w-8 h-8 text-txt-black" strokeWidth={3} />

        <div className="w-[120px] h-[120px] bg-blue-600 rounded-full flex flex-col items-center justify-center">
          {bankNameLines.map((line, idx) => (
            <span key={idx} className="text-white Pr_SB_24 text-center leading-tight">
              {line}
            </span>
          ))}
        </div>

        <div className="text-center space-y-1">
          <p className="text-lg text-txt-black Pr_Re_28"><b className="Pr_SB_28">{recipient}</b> 님께</p>
          <p className="text-txt-black Pr_Re_28">
            <b className="Pr_SB_28">{amount.toLocaleString()}원</b> 을 보냅니다.
          </p>
        </div>

        <p className="Pr_Re_16 text-txt-gray-2">
          보내시려는 정보가 맞다면, 확인 버튼을 눌러 주세요.
        </p>
      </div>

      {/* 하단: 취소 / 확인 버튼 */}
      <div className="fixed bottom-0 left-0 w-full flex">
        <button
          className="flex-1 h-[80px] bg-gray2 text-txt-black Pr_SB_20 pt-1"
          onClick={() => {/* 이전 라우터 */}}
        >
          취소
        </button>
        <button
          className="flex-1 h-[80px] bg-main text-txt-black Pr_SB_20 pt-1"
          onClick={() => navigate('/password')}
        >
          확인
        </button>
      </div>
    </main>
  );
};

export default TransferConfirm;
