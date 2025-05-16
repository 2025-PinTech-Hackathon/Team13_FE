import { useNavigate } from "react-router-dom";
import step4 from "../../assets/step4.png";

const Step4 = () => {
  const navigate = useNavigate();

  return (
    <main className="w-[480px] h-[100vh] flex flex-col justify-center">
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
        <button onClick={() => navigate("/step3")}>
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
              d="M4.91451 33.896L19.9998 48.9814L23.7705 45.2107L10.5705 32.0107L23.7705 18.8107L19.9998 15.04L4.91451 30.1254C4.41459 30.6254 4.13375 31.3036 4.13375 32.0107C4.13375 32.7178 4.41459 33.396 4.91451 33.896Z"
              fill="#4D4D4D"
            />
          </svg>
        </button>

        <img src={step4} alt="Step 4" className="w-[355px] h-[532px]" />
      </div>

      {/* 하단 */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center space-x-2">
          <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-main"></div>
          {/* 현재 스텝 (4번) */}
          <div className="w-[42px] h-[42px] rounded-full bg-main flex items-center justify-center text-txt-black Pr_SB_24">
            4
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-[79px] bg-gray2 text-center bg-main">
          {/* 바로 /ar로 이동 */}
          <button className="text-txt-black Pr_SB_20 mt-6" onClick={() => navigate("/ar")}>
            확인
          </button>
        </div>
      </div>
    </main>
  );
};

export default Step4;
