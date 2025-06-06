import { useNavigate } from "react-router-dom";
import step4 from "../../assets/step4.png";

const Step4 = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen">
      <section className="w-full flex flex-col justify-between pl-[6.6667%] pr-[5%]">
        {/* 상단 영역 */}
        <div className="flex flex-col pt-10">
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
          <button onClick={() => navigate("/step3")}>
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
                d="M4.91451 33.896L19.9998 48.9814L23.7705 45.2107L10.5705 32.0107L23.7705 18.8107L19.9998 15.04L4.91451 30.1254C4.41459 30.6254 4.13375 31.3036 4.13375 32.0107C4.13375 32.7178 4.41459 33.396 4.91451 33.896Z"
                fill="#4D4D4D"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center w-[80%] aspect-[2/3]">
            <img
              src={step4}
              alt="Step 4"
              className="w-[73.9583%] h-auto object-cover"
            />
          </div>
        </div>

        {/* 하단 영역 */}
        <div className="flex flex-col items-center space-y-4  mt-[-25px]">
          <div className="flex items-center space-x-2">
            <div className="w-[12px] h-[12px] rounded-full bg-main" />
            <div className="w-[12px] h-[12px] rounded-full bg-main" />
            <div className="w-[12px] h-[12px] rounded-full bg-main" />
            <div className="w-[42px] h-[42px] rounded-full bg-main flex items-center justify-center text-txt-black Pr_SB_24">
              4
            </div>
          </div>
        </div>
      </section>

      {/* 확인 버튼 (고정 하단) */}
      <div className="fixed bottom-0 max-w-[480px] w-full h-[79px] text-center bg-main">
        <button
          className="text-txt-black Pr_SB_20 pt-6"
          onClick={() => navigate("/ar")}
        >
          확인
        </button>
      </div>
    </main>
  );
};

export default Step4;
