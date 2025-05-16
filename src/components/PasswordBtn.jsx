const PasswordBtn = ({ d, pressNumber }) => {
  return (
    <button
      onClick={() => pressNumber(d)}
      className="max-w-[104px] aspect-square bg-bg flex items-center justify-center text-[36px] font-semibold"
    >
      {d}
    </button>
  );
};

export default PasswordBtn;
