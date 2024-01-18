import Image from "next/image";
import React from "react";
import Img1 from "@/app/img/pie1.png";

const Box = ({ img, title, text }: any) => {
  return (
    <div className=" border-2 border-orange-text flex flex-col items-center justify-center">
      <Image src={img} alt="Image" width={150} height={150} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Box;
