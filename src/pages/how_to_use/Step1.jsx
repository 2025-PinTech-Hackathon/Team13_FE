import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import step1 from "../../assets/step1.png";

const Step1 = () => {
  const navigate = useNavigate();
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTip(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full h-screen flex flex-col justify-between pl-[6.6667%] pr-[5%] ">
        {/* 상단 영역 */}
        <div className="flex flex-col pt-10 mb-[-50px]">
            <div className="flex justify-end">
                <button
                    className="w-[98px] h-[56px] p-2 rounded-[12px] text-txt-gray-2 Pr_SB_20"
                    onClick={() => navigate("/")}
                >
                    취소
                </button>
            </div>
            <div className="flex mb-5">
                <p className="text-txt-black Pr_SB_28">송금 보내는 방법</p>
            </div>
                <p className="text-txt-black Pr_Re_20">
                카메라 화면을 보고, 필요한 정보를 <br /> 빨간색 박스 안에 맞추어 작성해 주세요.
                </p>
        </div>

        {/* 이미지 및 화살표 */}
        <div className="flex justify-evenly items-center h-[400px]">
            <div className="flex justify-center items-center w-[80%] aspect-[2/3]">
                <img
                    src={step1}
                    alt="Step 1"
                    className="w-[73.9583%] h-auto object-cover"
                />
            </div>
            <button onClick={() => navigate("/step2")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="64"
                    viewBox="0 0 32 64"
                    fill="none"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.0855 33.896L12.0002 48.9814L8.22949 45.2107L21.4295 32.0107L8.22949 18.8107L12.0002 15.04L27.0855 30.1254C27.5854 30.6254 27.8663 31.3036 27.8663 32.0107C27.8663 32.7178 27.5854 33.396 27.0855 33.896Z"
                    fill="#4D4D4D"
                    />
                </svg>
            </button>
        </div>

        {/* 하단 영역 */}
        <div className="flex flex-col items-center space-y-4 pb-5 mt-[-50px]">
            {/* 말풍선 */}
            <div
            className={`w-[267px] h-[56px] rounded-[10px] border border-gray2 bg-gray2 transition-opacity duration-300 ${
                showTip
                ? "opacity-100"
                : "opacity-0 pointer-events-none select-none"
            }`}
            >
                <p className="text-txt-gray-1 Pr_Re_20 text-center mt-3">
                    좌우로 넘겨서 내용 확인하기
                </p>
            </div>

            {/* 스텝 표시 */}
            <div className="flex items-center space-x-2">
                <div className="w-[42px] h-[42px] rounded-full bg-main flex items-center justify-center text-txt-black Pr_SB_24">
                    1
                </div>
                <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
            </div>
        </div>

        {/* 건너뛰기 버튼 */}
        <div className="w-[100%] h-[79px] text-center bg-gray2">
            <button
            className="text-txt-black Pr_SB_20 pt-6"
            onClick={() => navigate("/ar")}
            >
                건너뛰기
            </button>
        </div>
    </main>
  );
};

export default Step1;
