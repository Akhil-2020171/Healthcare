import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={
          process.env.NEXT_PUBLIC_PAYTM_HOST +
          "/merchantpgpui/checkoutjs/merchants/" +
          process.env.NEXT_PUBLIC_PAYTM_MID +
          ".js"
        }
      ></Script>
      <div className="flex justify-around">
        <img
          className="w-10/12 rounded-2xl border-gray-400 border-2"
          src="/home.jpeg"
        />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              The one and only portal for secure exchange and verification of
              your electronic health records. You can access the catalog of
              healthcare professionals and organizations along with procuring
              medicines/drugs from our online pharmacy. This can be done only
              after passing a proper authentication system.
            </p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 mt-4">
              Utilities
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mb-10 -mx-4 -mt-4 md:space-y-0">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  fill="green"
                  viewBox="0 0 122.47 122.88"
                >
                  <path d="M84.58,103.47a4.09,4.09,0,1,1-4.08,4.09,4.08,4.08,0,0,1,4.08-4.09Zm3.61-60.62a3.89,3.89,0,0,1,2.2,1.48c1.08,1.39,1.38,3.64,1.08,6a15.16,15.16,0,0,1-2.21,6.2c-1.31,2-3,3.29-5,3.16-.14,6.51-3.33,9.5-7.49,13.41l-1.59,1.51-.54.51.13.09a14.67,14.67,0,0,1-1.58,1.1,17.71,17.71,0,0,1-4.61,2.47,20.48,20.48,0,0,1-6.84,1.12,21.4,21.4,0,0,1-7.11-1.1l-1-.36a16.18,16.18,0,0,1-3.74-1.66l-.5-.31a21.59,21.59,0,0,1-2.26,4.77L62.65,92.05,77.23,79.9A22.93,22.93,0,0,1,75,75.38c6.43,4.57,7.82,14.11,7.61,21.81,0,1-.06,1.26-.08,1.59a8.91,8.91,0,0,0-4.36,15,8.49,8.49,0,0,0,11.77.7,8.9,8.9,0,0,0,3.42-7,7.94,7.94,0,0,0-1.08-4c-1.5-2.6-3.13-3.36-5.62-4.6-.17-.09,0-.47,0-1.53a47.43,47.43,0,0,0-1.46-14.08,21,21,0,0,0,3.4,1.41c8.9,2.1,19.84,3,23.76,5.2a16,16,0,0,1,5,4.26c3.47,4.58,3.76,17.76,5,23.36-.31,3.28-2.16,5.16-5.82,5.44H5.82C2.17,122.6.31,120.71,0,117.44c1.26-5.6,1.56-18.79,5-23.36a15.58,15.58,0,0,1,5.05-4.26c5.57-3.1,19.22-3.94,28.3-6.46a33.06,33.06,0,0,0-1.58,8c-1,.77-3.64,1.67-4.47,2.66a38.55,38.55,0,0,0-3.86,5.53,2,2,0,0,0-.27,1c0,.28.29.57.17.81l-.19.37c-2.6,5-4.29,10.61-3.49,13A3.64,3.64,0,0,0,27.3,117a12.43,12.43,0,0,0,3.15.41c.31,0,.63,0,.94,0a3.07,3.07,0,0,0,.52.39,4.12,4.12,0,0,0,.67.32,2.58,2.58,0,0,0,.91.17A2.51,2.51,0,0,0,36,115.75a2.54,2.54,0,0,0-.23-1,2.58,2.58,0,0,0-2.38-1.61c-.92,0-2.23.46-2.23,1.38v0l0,.06-.64,0a9.17,9.17,0,0,1-2.33-.28c-.45-.12-.71-.29-.77-.48-.58-1.68,1-6.33,3.29-10.83l.29-.55a2,2,0,0,0,1-.88,34,34,0,0,1,3.41-4.92,7.09,7.09,0,0,1,3.38-1.72H39a10.53,10.53,0,0,1,1.72,1.55,30.64,30.64,0,0,1,3.6,5c.23.41.79.5,1,.89,2.65,4.28,4.14,9.19,3.78,11.06-.08.44-.44.7-1,.88a10.49,10.49,0,0,1-2.62.37,1.74,1.74,0,0,0-.1-.19v0c0-.92-1.32-1.35-2.24-1.38a2.58,2.58,0,0,0-2.38,1.61,2.71,2.71,0,0,0-.23,1,2.51,2.51,0,0,0,2.51,2.51,2.63,2.63,0,0,0,.92-.17,4,4,0,0,0,.66-.32,3.27,3.27,0,0,0,.36-.25h.36A12.22,12.22,0,0,0,49,117a3.88,3.88,0,0,0,2.9-3.05c.44-2.44-1.33-7.82-3.94-12.7a2,2,0,0,0,.16-.81,2.13,2.13,0,0,0-.28-1,36,36,0,0,0-4.1-5.7c-.83-.93-2.66-1.2-2.85-2.44-.5-3.23.9-7.23,3-10.71a15.15,15.15,0,0,0,1.46-2.19l.32-.44a8.32,8.32,0,0,1,3.41-2.08q-.73-.55-1.47-1.2L46.07,73.3l-.1-.09c-4-3.48-7.41-6.43-8-13.56-2.78-.24-4.75-2.88-5.72-6a15.2,15.2,0,0,1-.65-5.14,7.82,7.82,0,0,1,1.51-4.56,4.31,4.31,0,0,1,.63-.65l-.14-.09c-.64-8,1.23-21.82-7.43-24.44C42.51-1.55,60.51-5.27,75.6,7.13,91.28,8,98.85,30.64,88.19,42.85Zm-46-5a14,14,0,0,0-.2,7.6,1.67,1.67,0,0,1-2.67,1.77c-2-1.7-3.21-1.86-3.73-1.24a4.7,4.7,0,0,0-.75,2.6,11.77,11.77,0,0,0,.51,4c.68,2.23,2,4.06,3.58,3.6a1.51,1.51,0,0,1,.48-.08,1.67,1.67,0,0,1,1.71,1.63c.17,7,3.24,9.67,7,12.9l.1.08,1.6,1.4a16.87,16.87,0,0,0,5.82,3.46,17.29,17.29,0,0,0,4.44.87,25,25,0,0,0,3.35-.16,23.69,23.69,0,0,0,4.45-.91,15,15,0,0,0,4.91-3.23l1.62-1.54c4-3.74,6.92-6.5,6.36-13.21a1.67,1.67,0,0,1,2.59-1.53c1.13.75,2.25,0,3.08-1.24a11.63,11.63,0,0,0,1.69-4.78,5.27,5.27,0,0,0-.41-3.52c-.4-.52-1.47-.31-3.53,1.26a1.67,1.67,0,0,1-2.73-1.55c1.46-8.54.73-13.82-1.14-17.34-1.63-3-4.23-4.85-7-6.32-6.15,4.7-10.49,5.23-14.81,5.77-3.57.44-7.12.88-11.83,4.13a11.37,11.37,0,0,0-4.47,5.58Z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Search
                </h2>
                <p className="leading-relaxed text-base">
                  Search for the best hospitals and Doctors near you
                </p>
                <Link
                  href={"/search"}
                  legacyBehavior
                  as={
                    "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                  }
                >
                  <a
                    href="#"
                    className="mt-3 text-green-500 inline-flex items-center"
                  >
                    Doctors
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="green"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 293.151 293.151"
                >
                  <path
                    d="M255.316,55.996l-51.928-52.94C201.471,1.102,198.842,0,196.104,0h-82.302h-8.232H45.113
                c-5.631,0-10.197,4.566-10.197,10.192c0,5.626,4.566,10.192,10.197,10.192h60.457h8.232h72.11l0.005,44.231
                c0,5.631,4.561,10.197,10.192,10.197h41.731v197.955H56.592V47.828c0-5.631-4.566-10.197-10.197-10.197
                c-5.631,0-10.192,4.566-10.192,10.197v235.131c0,5.631,4.566,10.192,10.192,10.192h201.642c5.631,0,10.197-4.566,10.197-10.192
                V63.137C258.229,60.467,257.185,57.903,255.316,55.996z M206.307,54.423V35.147l18.906,19.276H206.307z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Upload Documents
                </h2>
                <p className="leading-relaxed text-base">
                  Upload your medical documents here and easily share them with
                  your doctor
                </p>
                {token ? (
                  <Link
                    href={"/uploadDocs"}
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a
                      href="#"
                      className="mt-3 text-green-500 inline-flex items-center"
                    >
                      Upload
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                ) : (
                  <Link
                    href={"/loginUser"}
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a
                      href="#"
                      className="mt-3 text-green-500 inline-flex items-center"
                    >
                      Upload
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                <svg
                  viewBox="0 0 76 76"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="w-15 h-15"
                >
                  <path
                    className="w-10 h-10"
                    fill="green"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    stroke-linejoin="round"
                    d="M 43,30L 50.75,30L 43,22.25L 43,30 Z M 52,34L 39,34L 39,21L 24,21L 24,39L 20,43L 20,17L 43.25,17L 56,29.75L 56,59L 36.5,59L 40.5,55L 52,55L 52,34 Z M 35.1379,40.67L 38.4967,44.0287L 32.8988,49.6266L 38.4967,55.2246L 35.1379,58.5833L 29.54,52.9854L 23.9421,58.5833L 20.5833,55.2246L 26.1813,49.6266L 20.5833,44.0287L 23.9421,40.67L 29.54,46.2679L 35.1379,40.67 Z "
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Delete/Download
                </h2>
                <p className="leading-relaxed text-base">
                  Delete your old documents or Download it
                </p>
                {token ? (
                  <Link
                    href={"/deleteDocs"}
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a
                      href="#"
                      className="mt-3 text-green-500 inline-flex items-center"
                    >
                      Delete And Download
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                ) : (
                  <Link
                    href={"/loginUser"}
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a
                      href="#"
                      className="mt-3 text-green-500 inline-flex items-center"
                    >
                      Delete And Download
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center"></div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.001 512.001"
                  fill="green"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                >
                  <path
                    d="M96.845,381.524h6.474v6.473c0,10.358,8.397,18.755,18.755,18.755s18.755-8.397,18.755-18.755v-6.473h6.474
              c10.358,0,18.755-8.397,18.755-18.755s-8.397-18.755-18.755-18.755h-6.474v-6.473c0-10.358-8.397-18.755-18.755-18.755
              s-18.755,8.397-18.755,18.755v6.473h-6.474c-10.358,0-18.755,8.397-18.755,18.755S86.487,381.524,96.845,381.524z"
                  />
                  <path
                    d="M464.58,32.418H254.058c-26.148,0-47.422,21.273-47.422,47.421V105.5H18.755C8.397,105.5,0,113.897,0,124.255v70.228
              c0,9.568,7.342,18.755,19.508,18.755l-18.01,44.123C0.493,259.709,0,262.297,0,264.709v196.119
              c0,10.358,8.397,18.755,18.755,18.755c2.821,0,436.681,0,445.825,0c26.148,0,47.422-21.273,47.422-47.421V79.84
              C512,53.69,490.728,32.418,464.58,32.418z M106.39,143.01h31.368v32.718H106.39V143.01z M184.124,213.238l13.356,32.718H46.668
              l13.356-32.718H184.124z M37.51,143.01h31.37v32.718c-11.406,0-19.755,0-31.37,0V143.01z M206.638,442.073H37.51V283.464h169.128
              V442.073z M206.638,175.728c-11.614,0-19.958,0-31.37,0V143.01h31.37V175.728z M474.491,432.163h-0.001
              c0,5.465-4.446,9.911-9.911,9.911h-220.43c0-38.918,0-320.769,0-362.235c0-5.465,4.446-9.911,9.911-9.911h210.52
              c5.465,0,9.911,4.446,9.911,9.911V432.163z"
                  />
                  <path
                    d="M359.319,102.816c-10.358,0-18.755,8.397-18.755,18.755v268.86c0,10.358,8.397,18.755,18.755,18.755
              c10.358,0,18.755-8.397,18.755-18.755v-268.86C378.074,111.213,369.677,102.816,359.319,102.816z"
                  />
                  <circle cx="426.277" cy="256.007" r="26.282" />
                  <circle cx="426.277" cy="147.853" r="26.27" />
                  <circle cx="426.277" cy="362.773" r="26.282" />
                  <circle cx="292.354" cy="256.007" r="26.282" />
                  <circle cx="292.354" cy="147.853" r="26.27" />
                  <circle cx="292.354" cy="362.773" r="26.282" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Shop for Medicine
                </h2>
                <p className="leading-relaxed text-base">
                  Buy your prescription Medicines from our online medical store
                </p>
                <Link
                  href={"/product"}
                  legacyBehavior
                  as={
                    "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                  }
                >
                  <a
                    href="#"
                    className="mt-3 text-green-500 inline-flex items-center"
                  >
                    Buy
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            legacyBehavior
            as={
              "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
            }
          >
            <a href="#">
              <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Us
              </button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
