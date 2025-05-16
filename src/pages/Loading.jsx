import { FadeLoader } from "react-spinners";

import mobile_flip from "../assets/mobile_flip.svg";

const Loading = () => {
  return (
    <main className="flex flex-col justify-center items-center pt-[18.3333%] pb-[11.875%] h-screen">
      <div className="flex justify-center items-center -translate-y-1/4">
        <FadeLoader color="#2E7D32" height={20} margin={20} width={5} />
      </div>
      <section className="flex flex-col justify-center gap-[60px] text-center">
        <div className="flex flex-col gap-[8px]">
          <p className="Pr_SB_28 text-sub1">잠시만 기다려 주세요!</p>
          <p className="Pr_Re_28 text-txt-black">정보를 확인하고 있습니다...</p>
        </div>

        <div className="flex items-center gap-[12px]">
          <img src={mobile_flip} alt="mobile_flip" />
          <p className="Pr_Re_20 text-txt-gray-2">다음 단계에서 휴대폰을 세로로 사용합니다.</p>
        </div>
      </section>
    </main>
  );
};

export default Loading;
