import React from "react";
import Image from "next/image";

export default function LastestNews() {
  return (
    <section className="text-white mt-14 mx-24 mb-10">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-8 relative">
          <Image
            className="w-[100%]"
            src="/Rectangle 17.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="lastest1"
          />
          <div className="absolute bottom-0 right-0 left-0 bg-[#0A0A0A]/60">
            <div className="h-full flex flex-col justify-end px-4 pb-1">
              <h2 className="font-semibold text-4xl my-4">
                DK TƯNG BỪNG KHAI TRƯƠNG GIẢI BÓNG ĐÁ
              </h2>
              <p className="text-md">26/11/2023</p>
            </div>
          </div>
        </div>
        <div className="h-[100%] col-span-4 relative flex flex-col gap-4">
          <div className="h-[50% relative">
            <Image
              className="w-[100%]"
              src="/Rectangle 17.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="lastest1"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-[#0A0A0A]/60">
              <div className="h-full flex flex-col justify-end px-2 pb-1">
                <h2 className="font-semibold text-xl mt-3">
                  DK TƯNG BỪNG KHAI TRƯƠNG GIẢI BÓNG ĐÁ
                </h2>
                <p className="text-md">26/11/2023</p>
              </div>
            </div>
          </div>
          <div className="h-[50% relative">
            <Image
              className="w-[100%]"
              src="/Rectangle 17.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="lastest1"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-[#0A0A0A]/60">
              <div className="h-full flex flex-col justify-end px-2 pb-1">
                <h2 className="font-semibold text-xl mt-3">
                  DK TƯNG BỪNG KHAI TRƯƠNG GIẢI BÓNG ĐÁ
                </h2>
                <p className="text-md">26/11/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
