import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

import cameraButton from "./../assets/camera_button.png";
import sendMoneyAr from "./../assets/send_money_ar.png";
import { useNavigate } from "react-router-dom";
import phone_rotate from "./../assets/phone_rotate.svg";

function AR() {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const [fullPhoto, setFullPhoto] = useState(null);

  const navigate = useNavigate();

  const MAX_WIDTH = 16320;
  const MAX_HEIGHT = 12240;

  const videoConstraints = {
    // width: 640,
    // height: 480,
    width: { ideal: MAX_WIDTH },
    height: { ideal: MAX_HEIGHT },
    // facingMode: "user", // <- 테스트용 전면 카메라
    facingMode: "environment", // <- 후면 카메라 고정
  };

  /*
  useEffect(() => {
    // 1) matchMedia 객체 생성
    const mql = window.matchMedia("(orientation: portrait)");

    // 2) 콜백: matches 가 true면 세로, false면 가로
    const onChange = (e) => setIsPortrait(e.matches);

    // 3) 초기 상태 설정
    setIsPortrait(mql.matches);

    // 4) 이벤트 리스너 등록 (최신 브라우저와 레거시 대응)
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
    }

    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);
  */

  // 풀 해상도 촬영
  const takeFullPhoto = async () => {
    if (!webcamRef.current?.stream) return;
    const track = webcamRef.current.stream.getVideoTracks()[0];
    // ImageCapture 생성
    try {
      const imageCapture = new window.ImageCapture(track);
      const blob = await imageCapture.takePhoto();
      const reader = new FileReader();
      reader.onloadend = () => {
        setFullPhoto(reader.result);
        // 다운로드
        const link = document.createElement("a");
        link.href = reader.result;
        link.download = `fullres-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      alert("풀 해상도 촬영 실패", error);
      // fallback to screenshot
      capture();
    }
  };

  // 기본 캡처
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    // 이미지 다운로드
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `capture-${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="w-full h-screen">
      {isPortrait && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full z-[60]">
            <img className="z-60" src={phone_rotate} alt="phone_rotate" />
            <p className="Pr_SB_28 text-white ">휴대폰을 가로로 돌려 주세요.</p>
          </div>
        </>
      )}
      <div className="w-full h-full" style={{ position: "relative" }}>
        {isCameraOn && !capturedImage && !fullPhoto && (
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
            <button
              className="absolute bottom-[36px] right-1/2 translate-x-1/2 cursor-pointer z-20"
              onClick={() => {
                if (isCameraOn) {
                  navigate("/confirm");
                  takeFullPhoto();
                }
              }}
            >
              <img className="size-[72px] rotate-90" src={cameraButton} alt="cameraButton" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default AR;
