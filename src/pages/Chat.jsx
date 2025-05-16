import React, { useEffect, useState, useRef } from "react";
import { OpenAI } from "openai";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import upload from "../assets/upload.svg";
import SendMoneyLoading from "./SendMoneyLoading";

function Chat() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null); // 👈 useRef 추가

  const navigate = useNavigate();

  const FIXED_PROMPT =
    "왼쪽, 오른쪽 파트를 각각 영어로 번역하고 중괄호로만 감싸진 json 포맷으로 변환한것만 나에게 줘. '```', 'json'은 출력하지마. json 파일 필드명은  bank, account_number, name, amount 로 해줘.'Left', 'Right' 도 출력해줘.";

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      alert("이미지를 선택해주세요.");
      return;
    }
    setLoading(true);
    try {
      const base64Data = selectedImage.split(",")[1];
      const blob = await fetch(`data:image/jpeg;base64,${base64Data}`).then((res) => res.blob());

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: FIXED_PROMPT },
              {
                type: "image_url",
                image_url: {
                  url: selectedImage,
                },
              },
            ],
          },
        ],
        max_tokens: 1000,
      });

      if (!response.choices?.[0]?.message) {
        throw new Error("API 응답 형식이 올바르지 않습니다.");
      }

      const analysisResult = response.choices[0].message.content;
      setAiResponse(analysisResult);
    } catch (error) {
      console.error("API Error Details:", error);
      alert(`API 호출 중 오류가 발생했습니다: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (aiResponse) {
      navigate("/confirm2", { state: { response: aiResponse } });
    }
  }, [aiResponse, navigate]);

  if (loading) {
    return <SendMoneyLoading />;
  }

  return (
    <div className="w-full h-screen pt-[122px]">
      <p className="Pr_Re_28">{!selectedImage ? "촬영한 사진을" : "업로드한 사진이 맞다면"}</p>
      <p className="Pr_SB_28">{!selectedImage ? "업로드해 주세요." : "확인 버튼을 눌러 주세요."}</p>

      <div className="mt-[100px] w-full">
        <div className="flex justify-center w-full ">
          {selectedImage ? (
            <div className="mt-[20px] w-full">
              <img className="w-[432px]" src={selectedImage} alt="Selected" />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer"
            >
              <img src={upload} alt="upload" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-[40px]">
          {!selectedImage ? (
            <button
              className="mt-[87px] w-full h-[56px] rounded-[10px] bg-main text-black Pr_SB_20 cursor-pointer"
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              업로드하기
            </button>
          ) : (
            <button
              className="mt-[87px] w-full h-[56px] rounded-[10px] bg-main text-black Pr_SB_20 cursor-pointer"
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              확인
            </button>
          )}
          {!selectedImage ? (
            <button
              className="w-full h-[56px] rounded-[10px] bg-gray2 text-black Pr_SB_20 cursor-pointer"
              onClick={() => {
                navigate("/ar");
              }}
            >
              다시 촬영하기
            </button>
          ) : (
            <button
              className="w-full h-[56px] rounded-[10px] bg-gray2 text-black Pr_SB_20 cursor-pointer"
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              다시 업로드하기
            </button>
          )}
        </div>

        {/* 숨겨진 파일 input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ display: "none" }}
        />
      </div>

      {aiResponse && (
        <div className="response-section" style={{ marginTop: 20 }}>
          <h3>분석 결과:</h3>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;
