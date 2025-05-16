import kakao from "../assets/bankbooks/kakao.png";
import kukmin from "../assets/bankbooks/kukmin.png";
import shinhan from "../assets/bankbooks/shinhan.png";
import hana from "../assets/bankbooks/hana.png";

const Bankbook = ({ bank = "kakao", ...props }) => {
  let bankImage = null;
  if (bank === "kakao") {
    bankImage = kakao;
  } else if (bank === "kukmin") {
    bankImage = kukmin;
  } else if (bank === "shinhan") {
    bankImage = shinhan;
  } else if (bank === "hana") {
    bankImage = hana;
  }

  return (
    <button {...props}>
      <img src={bankImage} alt={bank} />
    </button>
  );
};

export default Bankbook;
