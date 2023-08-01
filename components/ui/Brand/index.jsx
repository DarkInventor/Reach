import Image from "next/image";
import logoo from "../Brand/Logoo.svg";

const Brand = ({ ...props }) => (
  <div className="flex items-center">
    <Image src={logoo} alt="Split logo" {...props} width={86} height={48} priority />
    <div style={{
      background: "linear-gradient(90deg, #9867F0, #ED4E50)",
      // backgroundColor: "black",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "24px",
      fontWeight: "bold",
      fontFamily: "'ui-sans-serif'",
      marginLeft: "20px", 
      marginRight: "160px"
    }}>
      REACHACTORY
    </div>
  </div>
);

export default Brand;

