import { useNavigate } from "react-router-dom";

const BottomBtn = ({ prevRoute, nextRoute, leftText = "취소", rightText = "확인" }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 left-0 w-full flex">
      <button
        className="flex-1 h-[80px] bg-gray2 text-txt-black Pr_SB_20 pt-1"
        onClick={() => {
          navigate(prevRoute);
        }}
      >
        {leftText}
      </button>
      <button
        className="flex-1 h-[80px] bg-main text-txt-black Pr_SB_20 pt-1"
        onClick={() => navigate(nextRoute)}
      >
        {rightText}
      </button>
    </div>
  );
};

export default BottomBtn;
