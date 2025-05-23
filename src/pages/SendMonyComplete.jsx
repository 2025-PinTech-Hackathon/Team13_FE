import { useLocation } from "react-router-dom";
import ic_check from "../assets/ic_check.svg";
import BottomBtn from "../components/BottomBtn";
import { parseBankName } from "../utils/parseBankName";

const SendMonyComplete = () => {
  const location = useLocation();
  const { response, korName } = location.state || {};

  // 3) 구조 분해 할당
  const { Left, Right } = response;
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

  const senderBankName = parseBankName(senderBank);
  const recipientBankName = parseBankName(receiveBank);

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen">
      <img src={ic_check} alt="ic_check" />
      <p className="mt-[17px] mb-[13px] Pr_SB_28">송금이 완료되었습니다.</p>
      <p className="mb-[57px] Pr_Re_20 text-txt-gray-2">아래 내용을 확인해주세요.</p>

      <div className="pb-[39px] w-[90%] h-[320px] border border-solid border-main rounded-[10px]">
        <div className="py-[13px] px-[16px] h-[56px] bg-main rounded-t-[10px]">
          <p className="Pr_Re_20">송금 내역</p>
        </div>

        <div className="mt-[12px] px-[24px] mt-[26px]">
          <div className="flex justify-end">
            <p className="Pr_Re_16 text-txt-gray-2">2025.05.16 12:00</p>
          </div>

          <div className="flex justify-between mt-[23px]">
            <p className="Pr_Re_20 text-txt-gray-2">예금주</p>
            <p className="Pr_SB_28">{korName.recipientNameKr}</p>
          </div>

          <div className="flex justify-between mt-[23px]">
            <p className="Pr_Re_20 text-txt-gray-2">송금액</p>
            <p className="Pr_SB_28">{senderAmountRaw.toLocaleString()}원</p>
          </div>

          <div className="flex justify-between items-center mt-[26px]">
            <p className="Pr_Re_20 text-txt-gray-2">송금 계좌</p>
            <div className="flex gap-[4px]">
              <p className="Pr_SB_20">{recipientBankName.korean}</p>
              <p className="Pr_Re_20">{receiveAccountNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[112px] mb-[24px] w-[90%]">
        <div className="flex justify-between items-center">
          <p className="Pr_Re_20 text-txt-gray-2">출금 계좌</p>
          <div className="flex gap-[4px]">
            <p className="Pr_SB_20">{senderBankName.korean}</p>
            <p className="Pr_Re_20">{senderAccountNumber}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[26px]">
          <p className="Pr_Re_20 text-txt-gray-2">거래 후 잔액</p>
          <div className="flex">
            <p className="Pr_SB_20">43,000</p>
            <p className="Pr_Re_20">원</p>
          </div>
        </div>
      </div>

      <BottomBtn leftText="내 통장 보기" prevRoute="/account_view" nextRoute="/" />
    </main>
  );
};

export default SendMonyComplete;
