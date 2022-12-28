import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font shadow-xl mt-2 sm:mt-0 bottom-0">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col shadow-xl">
          <Link href={"/"} legacyBehavior>
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="45px"
                viewBox="0 0 107 122"
              >
                <path d="M36.69,14.05h8.74a3,3,0,0,1,3,3V27.15H58.53a3,3,0,0,1,3,3v8.74a3,3,0,0,1-3,3H48.4V51.7a3,3,0,0,1-3,3H36.69a3,3,0,0,1-3-3V41.83H23.59a3,3,0,0,1-3-3V30.11a3,3,0,0,1,3-3H33.72V17a3,3,0,0,1,3-3Z" />
                <path d="M107.51,64.09c1.58,32-10.24,50.91-31.18,58.79C56.1,115.49,44.14,97.41,45,63.6c10.63.56,21.07-1.74,31.18-9.59,9,5.69,20.41,11.07,31.3,10.08Zm-90.3,9.7a2.88,2.88,0,1,1,0-5.76H32.94a2.88,2.88,0,0,1,0,5.76ZM82,17h9.16a6.56,6.56,0,0,1,6.55,6.55c0,11,4.73,30.86-5.61,26.41V23.53a.87.87,0,0,0-.28-.65.92.92,0,0,0-.66-.29H82V44.87q-2.76-1.56-5.58-3.36h0l0,0v-35a1,1,0,0,0-.95-.94H6.55a.84.84,0,0,0-.65.29.86.86,0,0,0-.29.65V84.36A.85.85,0,0,0,5.9,85a.92.92,0,0,0,.65.28H36.21q.57,2.9,1.29,5.61H21.32v10.42a.87.87,0,0,0,.28.66,1,1,0,0,0,.66.29H41.4c.84,1.95,1.76,3.82,2.73,5.61H22.26a6.56,6.56,0,0,1-6.55-6.56V90.92H6.55A6.56,6.56,0,0,1,0,84.36V6.55A6.56,6.56,0,0,1,6.55,0H75.43A6.56,6.56,0,0,1,82,6.55V17ZM97.81,71.83c1.08,21.82-7,34.71-21.26,40.09l-.27-.1V65.09l.18-.13c6.11,3.87,13.92,7.55,21.35,6.87ZM76.22,58c10.34,6.55,19.68,9.66,27.7,8.92,1.4,28.33-9.06,45.06-27.59,52-17.91-6.53-28.49-22.54-27.72-52.47A39.53,39.53,0,0,0,76.22,58Z" />
              </svg>
              <span class="ml-3 text-xl">Healthcare</span>
            </a>
          </Link>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Healthcare — FCS16
            {/* <a
              href="https://github.com/Darkcoder02"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Darkcoder02
            </a> */}
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default footer;
