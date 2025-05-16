import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <FadeLoader height={20} margin={20} width={5} />
    </main>
  );
};

export default Loading;
