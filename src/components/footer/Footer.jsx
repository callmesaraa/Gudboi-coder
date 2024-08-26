import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section>
      <div className="flex justify-center gap-6 bg-[#ECECEC] text-[#0A0A0A] pt-6 pb-4">
        <div className="w-[14%] text-xs">
          <h3 className="font-bold">GIỚI THIỆU</h3>
          <p className="text-wrap">
            Công Ty TNHH TM&XD D&K Việt Nam được thành lập năm 1993. Là đơn vị
            hàng đầu trong ngành xây dựng Việt Nam
          </p>
          <div className="flex gap-1 mt-4">
            <Image src="/Link.png" width={25} height={25} />
            <Image src="/Link (1).png" width={25} height={25} />
            <Image src="/Link (2).png" width={25} height={25} />
            <Image src="/Link (3).png" width={25} height={25} />
            <Image src="/Link (4).png" width={25} height={25} />
          </div>
        </div>
        <div className="w-[14%] text-xs">
          <h3 className="font-bold">LIÊN KẾT</h3>
          <p className="my-2">Tổng thầu Delta-V</p>
          <p className="my-2">Thông tin tuyển dụng</p>
          <p className="my-2">Các dự án của Deltacorp</p>
          <p className="my-2">Liên hệ</p>
        </div>
        <div className="w-[14%] text-xs">
          <h3 className="font-bold">TRỤ SỞ HÀ NỘI</h3>
          <p className="my-1">
            Điạ chỉ: 81 Phố Lạc Trung, Quận Hai Bà Trưng, Hà Nội.
          </p>
          <p className="my-1">ĐT: +84(24) 3821 7885</p>
          <p className="my-1">Fax: +84(24) 3976 0988</p>
          <p className="my-1">Email: info@deltagroup.vn</p>
        </div>
      </div>
      <div className="flex justify-center text-xs gap-20 bg-[#2D3E4B] pt-4 pb-1 mb-10">
        <div className="flex items-center">
          <Image src="/Phone.png" width={30} height={30} />
          Hotline: +84(24) 3821 7885
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <p>Copyright © 2020 DeltaGroup | All rights reserved</p>
          <p className="text-[#FFFFFF]/20">
            Thiết kế và vận hành bởi Greenweb.vn
          </p>
        </div>
        <div className="flex items-center">
          Kết nối với DK Việt Nam :
          <Image src="/Link (5).png" width={30} height={30} />
          <Image src="/Link (6).png" width={30} height={30} />
        </div>
      </div>
    </section>
  );
}
