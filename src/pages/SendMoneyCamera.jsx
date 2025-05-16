// src/pages/SendMoneyCamera.jsx
import React from 'react';
import { ArrowRightIcon, CameraIcon } from '@heroicons/react/24/outline';

const SendMoneyCamera = () => {
  return (
    <div className="relative w-[1000px] h-[480px] mx-auto flex pl-10 flex-col items-center justify-center bg-gray2 px-5 space-y-8">
      
      {/* ── 상단: 보내는 사람 ▶ 받는 사람 */}
      <div className="self-start flex items-start space-x-4">
        {/* 보내는 사람 */}
        <div className="w-[386px] h-[240px] border border-yellow-400 rounded-lg overflow-hidden">
          <div className="w-full h-[56px] bg-yellow-300 flex items-center px-4">
            <span className="text-base font-medium text-gray-800">보내는 사람</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <button className="w-[98px] h-[56px] bg-gray-200 rounded-lg text-gray-800">은행</button>
              <input className="w-[248px] h-[56px] border-2 border-red-500 rounded-lg px-3 focus:outline-none" />
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-[98px] h-[56px] bg-gray-200 rounded-lg text-gray-800">계좌번호</button>
              <input className="w-[248px] h-[56px] border-2 border-red-500 rounded-lg px-3 focus:outline-none" />
            </div>
          </div>
        </div>

        {/* 화살표 */}
        <ArrowRightIcon className="w-8 h-8 text-yellow-500 mt-6" />

        {/* 받는 사람 */}
        <div className="w-[386px] h-[240px] border border-yellow-400 rounded-lg overflow-hidden">
          <div className="w-full h-[56px] bg-yellow-300 flex items-center px-4">
            <span className="text-base font-medium text-gray-800">받는 사람</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <button className="w-[98px] h-[56px] bg-gray-200 rounded-lg text-gray-800">은행</button>
              <input className="w-[248px] h-[56px] border-2 border-red-500 rounded-lg px-3 focus:outline-none" />
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-[98px] h-[56px] bg-gray-200 rounded-lg text-gray-800">계좌번호</button>
              <input className="w-[248px] h-[56px] border-2 border-red-500 rounded-lg px-3 focus:outline-none" />
            </div>
          </div>
        </div>
      </div>

      {/* ── 하단: 보낼 금액 */}
      <div className="self-start w-[605px] h-[72px] border border-yellow-400 rounded-lg flex overflow-hidden">
        <div className="w-[110px] h-full bg-yellow-300 flex items-center justify-center">
          <span className="text-base font-medium text-gray-800">보낼 금액</span>
        </div>
        <div className="flex items-center px-4 space-x-3 flex-1">
          <input
            type="text"
            placeholder="금액 입력"
            className="w-[248px] h-[56px] border-2 border-red-500 rounded-lg px-3 focus:outline-none"
          />
          <span className="text-base text-gray-800">원</span>
        </div>
      </div>

      {/* ── 전체 기준 우측 중앙 카메라 버튼 */}
      <button className="absolute right-5 top-1/2 transform -translate-y-1/2 p-3 ring-2 ring-yellow-400 rounded-full hover:bg-yellow-50 mr-5">
        <CameraIcon className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default SendMoneyCamera;
