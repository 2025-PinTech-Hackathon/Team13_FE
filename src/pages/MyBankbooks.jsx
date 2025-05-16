import { useNavigate } from "react-router-dom";
import Bankbook from "../components/Bankbook";

const MyBankBooks = () => {
  const navigate = useNavigate();
  return (
    <main className="pt-[88px] px-[24px] w-full min-h-screen">
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
    </main>
  );
};

export default MyBankBooks;
