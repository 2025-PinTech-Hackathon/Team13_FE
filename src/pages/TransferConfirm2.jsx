import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import BankLogo from "../components/BankLogo";
import BottomBtn from "../components/BottomBtn";
import { parseBankName } from "../utils/parseBankName";

const TransferConfirm2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { response } = location.state || {};

  // 1) JSON 파싱, 실패 시 null
  let parsed = null;
  try {
    parsed = response ? JSON.parse(response) : null;
  } catch (e) {
    parsed = null;
  }

  // 2) parsed가 없으면 AR 페이지로 복귀
  useEffect(() => {
    if (!parsed) {
      console.log(response);
      console.log(parsed);
      navigate("/ar3");
    }
  }, [parsed, navigate]);

  if (!parsed) {
    return null;
  }

  // 3) 구조 분해 할당
  const { Left, Right } = parsed;
  const {
    bank: senderBank,
    account_number: senderAccountNumber,
    name: senderName,
    amount: senderAmountRaw,
  } = Left;
  const {
    bank: receiveBank,
    account_number: receiveAccountNumber,
    name: recipientName,
    amount: recipientAmountRaw,
  } = Right;

  // 4) 금액 필드가 빈 문자열인 경우 0으로, 숫자 타입으로 변환
  const senderAmount = parseFloat(senderAmountRaw) || 0;
  const recipientAmount = parseFloat(recipientAmountRaw) || 0;

  const senderBankName = parseBankName(senderBank);
  const recipientBankName = parseBankName(receiveBank);

  console.log(senderBankName);
  console.log(recipientBankName);
  return (
    <main className="relative w-full h-screen mx-auto flex flex-col justify-center items-center px-5 py-8">
      {/* 상단: 보내는 사람 계좌 정보 */}
      <div className="flex items-center gap-[12px] space-y-2">
        <BankLogo bank={senderBankName.english} size={64} />
        <div>
          <div className="bg-gray2 rounded-[13px] w-[303px] h-[56px] flex justify-center items-center">
            <span className="w-full text-txt-black font-medium flex justify-center Pr_Re_24">
              <b className="font-semibold mr-2">{senderName}</b>
              {senderAccountNumber}
            </span>
          </div>
          <p className="text-sm text-txt-black self-start ml-1 Pr_Re_16">현재 잔액: 43,000원</p>
        </div>
      </div>

      {/* 중간: 화살표 → 은행 로고 → 확인 메시지 */}
      <div className="flex flex-col items-center space-y-6 mx-auto my-5">
        <ArrowDownIcon className="w-8 h-8 text-txt-black" strokeWidth={3} />

        <div className="w-[88px] h-[88px] bg-gray1 rounded-full flex flex-col items-center justify-center">
          <BankLogo bank={recipientBankName.english} size={88} />
        </div>

        <div className="text-center space-y-1">
          <p className="text-lg text-txt-black Pr_Re_28">
            <b className="Pr_SB_28">{recipientName}</b> 님께
          </p>
          <p className="text-txt-black Pr_Re_28">
            <b className="Pr_SB_28">{senderAmount.toLocaleString()}원</b> 을 보냅니다.
          </p>
        </div>

        <p className="Pr_Re_16 text-txt-gray-2">
          보내시려는 정보가 맞다면, 확인 버튼을 눌러 주세요.
        </p>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full flex max-w-[480px]">
        <button
          className="flex-1 h-[80px] bg-gray2 text-txt-black Pr_SB_20 pt-1"
          onClick={() => {
            navigate("/ar");
          }}
        >
          취소
        </button>
        <button
          className="flex-1 h-[80px] bg-main text-txt-black Pr_SB_20 pt-1"
          onClick={() => navigate("/password", { state: { response: parsed } })}
        >
          확인
        </button>
      </div>
    </main>
  );
};

export default TransferConfirm2;
