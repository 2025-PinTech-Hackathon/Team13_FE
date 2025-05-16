import ic_down_arrow from "../assets/ic_down_arrow.svg";

const ScrollDownAnimation = ({ content }) => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center animate-bounce"
        style={{
          animation: "moveArrow 1.5s infinite ease-in-out",
        }}
      >
        <div className="flex justify-center items-center mb-[4px] w-[267px] h-[56px] rounded-[10px] bg-gray2 Pr_Re_20 text-txt-gray-1">
          {content}
        </div>
        <img className="w-[48px] h-[24px] " src={ic_down_arrow} alt="ic_down_arrow" />
      </div>

      <style jsx>{`
        @keyframes moveArrow {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ScrollDownAnimation;
