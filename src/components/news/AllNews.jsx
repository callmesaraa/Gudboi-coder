import React from "react";
import Image from "next/image";

export default function AllNews() {
  return (
    <section className="mt-14 mx-24">
      <div className="flex justify-between">
        <div>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="mb-3">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-r-0 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5 bg-black"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-4">
          <div className="relative">
            <Image
              src="/image 8.png"
              className="w-[100%]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div>
            <h3 className="text-xl my-2 text-[#0C0259]">
              DK TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
            </h3>
            <p className="text-[#000000]">20/11/2023</p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <Image
              src="/image 8.png"
              className="w-[100%]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div>
            <h3 className="text-xl my-2 text-[#0C0259]">
              DK TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
            </h3>
            <p className="text-[#000000]">20/11/2023</p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <Image
              src="/image 8.png"
              className="w-[100%]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div>
            <h3 className="text-xl my-2 text-[#0C0259]">
              DK TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
            </h3>
            <p className="text-[#000000]">20/11/2023</p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <Image
              src="/image 8.png"
              className="w-[100%]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div>
            <h3 className="text-xl my-2 text-[#0C0259]">
              DK TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
            </h3>
            <p className="text-[#000000]">20/11/2023</p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <Image
              src="/image 8.png"
              className="w-[100%]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div>
            <h3 className="text-xl my-2 text-[#0C0259]">
              DK TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
            </h3>
            <p className="text-[#000000]">20/11/2023</p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <Image
              src="/image 8.png"
              className="w-[100%]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div>
            <h3 className="text-xl my-2 text-[#0C0259]">
              DK TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
            </h3>
            <p className="text-[#000000]">20/11/2023</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <button className="bg-[#C15A20] text-2xl font-bold py-3 px-12 rounded-full my-6">
          Tải thêm bài viết
        </button>
      </div>
    </section>
  );
}
