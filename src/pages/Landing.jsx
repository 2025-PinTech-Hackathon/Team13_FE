// src/pages/Landing.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";
import axios from "axios";

const Landing = () => {
  const navigate = useNavigate(); // 컴포넌트 본문 안에서 훅을 호출

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://54.180.93.45:5000/api/data");
        if (response.data.status === "success") {
          navigate("/step1");
        }
        console.log(response.data);
      } catch (error) {
        console.error("API 호출 실패:", error);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <main className="w-full min-h-screen mx-auto flex flex-col items-center justify-center bg-bg px-5">
      {/* Logo */}
      <div className="relative mb-10 flex justify-center">
        <img src={logo} alt="로고" className="w-[180px] h-[90px] object-contain mb-20" />
      </div>

      {/* 인사말 */}
      <div className="text-center mb-10">
        <p className="text-[20px] leading-[30px] font-normal tracking-[-0.22px] text-txt-black">
          안녕하세요!
        </p>
        <p className="mt-2 text-[16px] leading-[24px] font-normal tracking-[-0.176px] text-txt-gray-1">
          원하시는 서비스를 선택해 주세요
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-[360px] space-y-3">
        <button
          className="w-full h-[50px] bg-main rounded-lg flex items-center justify-center text-[20px] leading-[30px] font-semibold tracking-[-0.22px] text-txt-black"
          onClick={() => navigate("/step1")}
        >
          돈 송금하기
        </button>
        <button
          className="w-full h-[50px] bg-gray2 border border-[#E0E0E0] rounded-lg flex items-center justify-center text-[20px] leading-[30px] font-semibold tracking-[-0.22px] text-txt-black"
          onClick={() => navigate("/account_view")}
        >
          내 계좌 보기
        </button>
      </div>
    </main>
  );
};

export default Landing;
