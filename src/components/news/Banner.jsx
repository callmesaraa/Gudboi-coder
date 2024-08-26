import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-white text-white relative h-[550px]">
      <Image src="/Rectangle 12.png" fill={true} />
      <div className="absolute bg-[#0A0A0A]/60 bottom-0 left-0 w-[58%] h-[40%]">
        <div className="h-full flex flex-col justify-end px-4 pb-4">
          <div className="h-12"></div>
          <h2 className="font-bold text-5xl my-2 uppercase">tin tức</h2>
          <p className="text-2xl mr-16">
            Giải pháp đột phá nhằm tăng năng suất và sản lượng cây trồng vượt
            trội so với canh tác truyền thống
          </p>
        </div>
      </div>
    </div>
  );
}
