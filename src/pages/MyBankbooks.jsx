import { useNavigate } from "react-router-dom";
import Bankbook from "../components/Bankbook";
import ScrollDownAnimation from "../components/ScrollDownAnimation";

const MyBankBooks = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full min-h-screen">
      <section className="pt-[88px] px-[24px] w-full">
        <section className="pl-[8px] mb-[40px]">
          <p className="Pr_SB_28 text-txt-black">내 계좌 보기</p>
          <p className="Pr_Re_20 text-txt-gray-2">확인하고 싶은 계좌를 선택하세요.</p>
        </section>

        <section className="flex flex-col gap-[24px]">
          <Bankbook
            bank="kakao"
            onClick={() => navigate("/account_view/detail", { state: { bank: "kakao" } })}
          />
          <Bankbook
            bank="kukmin"
            onClick={() => navigate("/account_view/detail", { state: { bank: "kukmin" } })}
          />
          <Bankbook
            bank="shinhan"
            onClick={() => navigate("/account_view/detail", { state: { bank: "shinhan" } })}
          />
          <Bankbook
            bank="hana"
            onClick={() => navigate("/account_view/detail", { state: { bank: "hana" } })}
          />
        </section>
      </section>

      {/* 공간 채우기용 더미 */}
      <div className="h-[195px]"></div>

      <section className="flex flex-col gap-[32px] fixed bottom-0 max-w-[480px] w-screen ">
        <ScrollDownAnimation content="아래로 내려서 통장 더보기" />

        <button
          className="flex justify-center items-center w-full h-[79px] Pr_SB_20 bg-gray2"
          onClick={() => navigate("/")}
        >
          처음 화면으로
        </button>
      </section>
    </main>
  );
};

export default MyBankBooks;
