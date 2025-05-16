import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import step1 from "../../assets/step1.png";

const Step1 = () => {
  const navigate = useNavigate();

  // ✅ 2초 후 사라지는 말풍선용 상태
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTip(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col justify-center pl-[6.66666666666667%] pr-[5%]">
      {/* 상단 */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-txt-black Pr_SB_28">송금 보내는 방법</p>
          <button
            className="w-[98px] h-[56px] p-2 rounded-[12px] border border-gray1 bg-bg text-txt-gray-2 Pr_SB_20"
            onClick={() => navigate("/")}
          >
            취소
          </button>
        </div>
        <div>
          <p className="text-txt-black Pr_Re_20">
            카메라 화면을 보고, 필요한 정보를 <br /> 빨간색 박스 안에 맞추어 작성해 주세요.
          </p>
        </div>
      </div>

      {/* 이미지 및 화살표 */}
      <div className="flex justify-evenly">
        <div className="flex justify-center items-center w-[80%] aspect-[2/3] object-cover">
            <img src={step1} alt="Step 1" className="w-[73.95833333333333%] h-auto" />
            </div>
        {/* 내비게이트 step2 이동 */}
        <button onClick={() => navigate("/step2")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="64"
            viewBox="0 0 32 64"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.0855 33.896L12.0002 48.9814L8.22949 45.2107L21.4295 32.0107L8.22949 18.8107L12.0002 15.04L27.0855 30.1254C27.5854 30.6254 27.8663 31.3036 27.8663 32.0107C27.8663 32.7178 27.5854 33.396 27.0855 33.896Z"
              fill="#4D4D4D"
            />
          </svg>
        </button>
      </div>

      {/* 하단 */}
      <div className="flex flex-col justify-center items-center">
        {/* ✅ 2초 후에 사라지는 말풍선 */}
        <div
          className={`w-[267px] h-[56px] rounded-[10px] border border-gray2 bg-gray2 mb-10 transition-opacity duration-300 ${
            showTip ? "opacity-100" : "opacity-0 pointer-events-none select-none"
          }`}
        >
          <p className="text-txt-gray-1 Pr_Re_20 text-center mt-3">좌우로 넘겨서 내용 확인하기</p>
        </div>

        <div className="flex items-center space-x-2">
          {/* 현재 스텝 (1번) */}
          <div className="w-[42px] h-[42px] rounded-full bg-main flex items-center justify-center text-txt-black Pr_SB_24">
            1
          </div>

          {/* 나머지 점 */}
          <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-[79px] bg-gray2 text-center">
          {/* 바로 /ar로 이동 */}
          <button className="text-txt-black Pr_SB_20 mt-6" onClick={() => navigate("/ar")}>
            건너뛰기
          </button>
        </div>
      </div>
    </main>
  );
};

export default Step1;
