"use client";

import Link from "next/link";
import "../Layout/InterFont.css";
import Dropdown from "../Components/MainContentSolution/Dropdown";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MainNavigation() {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const pathname = usePathname();

  return (
    <header className="w-full h-12 flex items-center justify-between bg-white fixed shadow px-12 z-10">
      <div className="ml-4 text-4xl text-customPurple font-bold">Logo</div>
      <nav>
        <ul className="list-none m-0 p-0 flex items-baseline">
          <li
            className={`ml-12 ${
              pathname === "/" ? "underline decoration-orange-500" : ""
            }`}
          >
            <Link
              className="text-customBlue font-sans font-bold hover:underline hover:decoration-orange-500"
              href="/"
            >
              Trang chủ
            </Link>
          </li>
          <li className={`ml-12 ${
              pathname === "/Introduction" ? "underline decoration-orange-500" : ""
            }`}>
            <Link
              className="text-customBlue font-sans font-bold hover:underline hover:decoration-orange-500"
              href="/Introduction"
            >
              Giới thiệu
            </Link>
          </li>
          <Dropdown options={dropdownOptions} />
          <li className={`ml-7 ${
              pathname === "/News" ? "underline decoration-orange-500" : ""
            }`}>
            <Link
              className="text-customBlue font-sans font-bold hover:underline hover:decoration-orange-500"
              href="/News"
            >
              Tin tức
            </Link>
          </li>
          <li className={`ml-12 ${
              pathname === "/Contact" ? "underline decoration-orange-500" : ""
            }`}>
            <Link
              className="text-customBlue font-sans font-bold hover:underline hover:decoration-orange-500"
              href="/Contact"
            >
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
