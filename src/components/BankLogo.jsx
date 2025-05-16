import kakao from "../assets/bankbooks/logos/logo_kakao.png";
import kukmin from "../assets/bankbooks/logos/logo_kukmin.png";
import shinhan from "../assets/bankbooks/logos/logo_shinhan.png";
import hana from "../assets/bankbooks/logos/logo_hana.png";

const BankLogo = ({ bank = "kakao", size = 48 }) => {
  let logo;
  if (bank === "kakao") {
    logo = kakao;
  } else if (bank === "kukmin") {
    logo = kukmin;
  } else if (bank === "shinhan") {
    logo = shinhan;
  } else if (bank === "hana") {
    logo = hana;
  }

  return (
    <div className=" rounded-full bg-gray1 " style={{ width: size + "px", height: size + "px" }}>
      <img src={logo} alt="logo" style={{ width: size + "px", height: size + "px" }} />
    </div>
  );
};

export default BankLogo;
