// src/pages/Password.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Password = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [attempts, setAttempts] = useState(0);
  const CORRECT_PIN = "1234";

  const isLocked = attempts >= 5; // 5회 초과 시 잠금

  const pressNumber = (num) => {
    if (isLocked) return; // 잠긴 경우 입력 금지
    if (pin.length < 4) setPin((prev) => prev + num);
  };

  const clearAll = () => {
    if (isLocked) return;
    setPin("");
  };

  const backspace = () => {
    if (isLocked) return;
    setPin((prev) => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    if (isLocked) {
      alert("비밀번호 입력이 잠겼습니다.\n고객센터에 문의하세요.");
      return;
    }
    if (pin.length < 4) {
      alert("비밀번호 4자리를 모두 입력해주세요.");
      return;
    }
    if (pin === CORRECT_PIN) {
      // 다음 스텝으로 이동
      navigate("/");
    } else {
      setAttempts((prev) => prev + 1); // 틀릴 때마다 카운트
      setPin("");
      alert(`비밀번호가 일치하지 않습니다.\n남은 시도 횟수: ${Math.max(0, 5 - (attempts + 1))}회`);
    }
  };

  return (
    <div className="relative w-full h-[100vh] mx-auto flex flex-col justify-evenly bg-bg">
      {/* 안내 문구 */}
      <div className="px-[32px] pt-8">
        <p className="text-txt-black Pr_Re_20">송금하기 위해</p>
        <p className="mt-1 text-txt-black Pr_SB_28">
          비밀번호를 입력한 뒤<br />
          확인 버튼을 눌러주세요.
        </p>
      </div>

      {/* PIN 입력 박스 (화살표 + 4칸) */}
      <div className="flex items-center justify-center space-x-2">
        {/* 화살표 SVG */}
        <div className="w-[24px] h-[48px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3139 25.4218L8.99987 36.7358L6.17188 33.9078L16.0719 24.0078L6.17188 14.1078L8.99987 11.2798L20.3139 22.5938C20.6888 22.9688 20.8994 23.4775 20.8994 24.0078C20.8994 24.5381 20.6888 25.0467 20.3139 25.4218Z"
              fill="#1A1A1A"
            />
          </svg>
        </div>
        {/* 4칸 PIN 박스 */}
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={`
                w-[56px] h-[84px] rounded-lg
                flex items-center justify-center ml-2
                ${pin.length > i ? "bg-main" : "border border-gray1"}
              `}
            >
              {pin.length > i && (
                <span className="text-[64px] text-txt-black leading-none mt-5">*</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 시도 횟수 표시 */}
      <p className="text-center text-sm text-txt-gray-2">
        비밀번호 입력 횟수 {attempts}/5 {isLocked && "(입력 잠금)"}
      </p>

      {/* 키패드 + 취소/정정 */}
      <div className="px-5">
        <div className="grid grid-cols-4 gap-0 divide-x divide-y divide-gray2 border border-gray2 ">
          {/* 1행: 1,2,3 */}
          {["1", "2", "3"].map((d) => (
            <button
              key={d}
              onClick={() => pressNumber(d)}
              className="w-[104px] h-[104px] bg-bg flex items-center justify-center text-[36px] font-semibold"
            >
              {d}
            </button>
          ))}

          {/* 오른쪽 열(전체 병합): 취소/정정 */}
          <div className="row-span-4 flex flex-col items-center justify-start">
            <button
              onClick={clearAll}
              className="w-[72px] h-[72px] bg-red-500 text-white flex flex-col items-center justify-center m-4 rounded-lg"
            >
              <XMarkIcon className="w-6 h-6" strokeWidth={2} />
              <span className="mt-1 Pr_SB_20">취소</span>
            </button>
            <button
              onClick={backspace}
              className="w-[72px] h-[72px] bg-orange-500 text-white flex flex-col items-center justify-center m-4 rounded-lg"
            >
              <ArrowLeftIcon className="w-6 h-6" strokeWidth={2} />
              <span className="mt-1 Pr_SB_20">정정</span>
            </button>
          </div>

          {/* 2행: 4,5,6 */}
          {["4", "5", "6"].map((d) => (
            <button
              key={d}
              onClick={() => pressNumber(d)}
              className="w-[104px] h-[104px] bg-bg flex items-center justify-center text-[36px] font-semibold"
            >
              {d}
            </button>
          ))}

          {/* 3행: 7,8,9 */}
          {["7", "8", "9"].map((d) => (
            <button
              key={d}
              onClick={() => pressNumber(d)}
              className="w-[104px] h-[104px] bg-bg flex items-center justify-center text-[36px] font-semibold"
            >
              {d}
            </button>
          ))}

          {/* 4행: 빈, 0, 빈 */}
          <div className="w-[104px] h-[104px] bg-white" />
          <button
            onClick={() => pressNumber("0")}
            className="w-[104px] h-[104px] bg-bg flex items-center justify-center text-[36px] font-semibold"
          >
            0
          </button>
          <div className="w-[104px] h-[104px] bg-white" />
        </div>
      </div>

      {/* 하단: 뒤로 / 확인 버튼 */}
      <div className="absolute bottom-0 left-0 w-full flex">
        <button
          className="flex-1 h-[80px] bg-gray2 text-txt-black Pr_SB_20 pt-1"
          onClick={() => navigate("/transfer_confirm")}
        >
          뒤로
        </button>
        <button
          className="flex-1 h-[80px] bg-main text-txt-black Pr_SB_20 pt-1"
          onClick={handleConfirm}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Password;
