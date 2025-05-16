import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { OpenAI } from "openai";

import cameraButton from "./../assets/camera_button.png";
import sendMoneyAr from "./../assets/send_money_ar.png";
import { useNavigate } from "react-router-dom";
import phone_rotate from "./../assets/phone_rotate.svg";
import axiosClient from "../services/axiosClient";

const FIXED_PROMPT =
  "왼쪽, 오른쪽 파트를 각각 영어로 번역하고 중괄호로만 감싸진 json 포맷으로 변환한것만 나에게 줘. '```', 'json'은 출력하지마. json 파일 필드명은 bank, account_number, name, amount 로 해줘. 'Left', 'Right' 도 출력해줘.";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function AR() {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const MAX_WIDTH = 16320;
  const MAX_HEIGHT = 12240;
  const videoConstraints = {
    width: { ideal: MAX_WIDTH },
    height: { ideal: MAX_HEIGHT },
    facingMode: "environment",
  };

  // 촬영 → OCR → DB 저장 → Confirm 이동
  const takeFullPhoto = async () => {
    if (!webcamRef.current?.stream) return;
    try {
      const track = webcamRef.current.stream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(track);
      const blob = await imageCapture.takePhoto();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUrl = reader.result;

        // 1) GPT-4 Vision OCR
        let ocrContent;
        try {
          const resp = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              { role: "user", content: FIXED_PROMPT },
              {
                role: "user",
                content: "",
                attachments: [
                  {
                    type: "image_url",
                    image_url: { url: dataUrl },
                  },
                ],
              },
            ],
            max_tokens: 1000,
          });
          ocrContent = resp.choices[0].message.content.trim();
        } catch (err) {
          console.error("OCR 호출 실패:", err);
          alert("이미지 분석 중 오류가 발생했습니다.");
          return;
        }

        // 2) JSON 파싱
        let parsed;
        try {
          parsed = JSON.parse(ocrContent);
        } catch (err) {
          console.error("JSON 파싱 오류:", err, ocrContent);
          alert("분석 결과 형식이 올바르지 않습니다.");
          return;
        }

        if (!parsed.Left) {
          alert("왼쪽 정보가 감지되지 않았습니다.");
          return;
        }

        console.log(parsed);
        // 3) DB 저장
        try {
          const res = await axiosClient.post("/api/upload", { Left: parsed.Left });
          if (res.data.status === "success") {
            navigate("/confirm");
          } else {
            alert("서버에 저장하는데 실패했습니다.");
          }
        } catch (err) {
          console.error("API 호출 실패:", err);
          alert("서버 통신 중 오류가 발생했습니다." + err);
        }
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("촬영 실패:", error);
      alert("카메라 캡처에 실패했습니다.");
    }
  };

  return (
    <main className="w-full h-screen">
      <div className="w-full h-full" style={{ position: "relative" }}>
        <div className="flex justify-center items-center w-full h-full">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            screenshotQuality={1}
            screenshotWidth={MAX_WIDTH}
            screenshotHeight={MAX_HEIGHT}
            videoConstraints={videoConstraints}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <img className="relative h-[100%] z-10" src={sendMoneyAr} alt="sendMoneyAr" />
          <div
            className="absolute bottom-[36px] right-1/2 translate-x-1/2 cursor-pointer bg-white rounded-full z-20"
            onClick={async () => {
              await takeFullPhoto();
              navigate("/confirm");
            }}
          >
            <img className="size-[72px] rotate-90" src={cameraButton} alt="cameraButton" />
          </div>
          <button
            className="absolute bottom-[36px] left-0 bottom-0 w-[98px] h-[56px] bg-gray2 rounded-[12px] cursor-pointer z-20 rotate-90"
            onClick={() => {
              navigate("/");
            }}
          >
            촬영 취소
          </button>
        </div>
      </div>
    </main>
  );
}

export default AR;
