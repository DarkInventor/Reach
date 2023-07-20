// import Image from "next/image"
// import logoo from "../../../../split/components/logoo.svg"

// const Brand = ({ ...props }) => (
//     <Image
//         src={logoo}
//         alt="Split logo"
//         {...props}
//         width={86}
//         height={48}
//         priority
//     />
// )
// export default Brand

import Image from "next/image";
import logoo from "../../../../split/components/logoo.svg";

const Brand = ({ ...props }) => (
  <div className="flex items-center">
    <Image src={logoo} alt="Split logo" {...props} width={86} height={48} priority />
    <div style={{
      background: "linear-gradient(90deg, #9867F0, #ED4E50)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "24px",
      fontWeight: "bold",
      fontFamily: "'Your Calligraphy Font', cursive",
      marginLeft: "10px"
    }}>
      REACH
    </div>
  </div>
);

export default Brand;

