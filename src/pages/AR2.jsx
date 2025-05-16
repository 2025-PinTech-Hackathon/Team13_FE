import { useRef } from "react";
import Webcam from "react-webcam";
import { OpenAI } from "openai";
import cameraButton from "./../assets/camera_button.png";
import sendMoneyAr from "./../assets/send_money_ar.png";
import { useNavigate } from "react-router-dom";

const FIXED_PROMPT =
  "왼쪽, 오른쪽 파트를 각각 영어로 번역하고 중괄호로만 감싸진 json 포맷으로 변환한것만 나에게 줘. '```', 'json'은 출력하지마. json 파일 필드명은 bank, account_number, name, amount 로 해줘. 'Left', 'Right' 도 출력해줘.";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function AR2() {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const MAX_WIDTH = 16320;
  const MAX_HEIGHT = 12240;
  const videoConstraints = {
    width: { ideal: MAX_WIDTH },
    height: { ideal: MAX_HEIGHT },
    facingMode: "environment",
    // facingMode: "user",
  };

  // 촬영 → OCR → JSON 파싱 → Confirm 이동
  const takeFullPhoto = async () => {
    if (!webcamRef.current?.stream) return;
    try {
      const track = webcamRef.current.stream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(track);
      const blob = await imageCapture.takePhoto();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUrl = reader.result;
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

        // JSON 파싱
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
        // Confirm 화면으로 이동하며 parsed 데이터 전달
        navigate("/confirm", { state: { parsed } });
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("촬영 실패:", error);
      alert("카메라 캡처에 실패했습니다.");
    }
  };

  return (
    <main className="w-full h-screen">
      <div className="w-full h-full relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          screenshotQuality={1}
          screenshotWidth={MAX_WIDTH}
          screenshotHeight={MAX_HEIGHT}
          videoConstraints={videoConstraints}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <img className="relative h-full z-10" src={sendMoneyAr} alt="sendMoneyAr" />
        <button
          className="absolute bottom-9 right-1/2 transform translate-x-1/2 bg-white rounded-full z-20"
          onClick={takeFullPhoto}
        >
          <img className="w-18 h-18 rotate-90" src={cameraButton} alt="cameraButton" />
        </button>
        <button
          className="absolute bottom-9 left-0 w-24 h-14 bg-gray2 rounded-lg z-20 rotate-90"
          onClick={() => navigate("/")}
        >
          촬영 취소
        </button>
      </div>
    </main>
  );
}

export default AR2;
