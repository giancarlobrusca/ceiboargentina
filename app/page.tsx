"use client";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { DialogDemo } from "./components/Dialog/Dialog";
import { FilmGrain } from "./components/FilmGrain/FilmGrain";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FilmGrain>
        <DialogDemo />

        {/* hero section with logo */}
        <div className="flex h-screen w-full justify-center items-center">
          <img
            src="/ceiboicon.png"
            alt="Ceibo Icon"
            className="w-32 md:w-48 lg:w-52"
          />
        </div>

        {/* manifest section */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 p-4 md:p-8 lg:p-12 text-white text-center">
          <p className="text-6xl md:text-3xl lg:text-9xl">
            Ceibo es una usina de cultura.
          </p>
          <p className="text-3xl md:text-2xl lg:text-6xl">
            Somos exploradores y facilitadores de ideas y productos que están
            orientados a poner a la Argentina en primer lugar.
          </p>
          <p className="text-4xl md:text-2xl lg:text-7xl">
            Con la tradición de nuestro país como guía y la mirada en recuperar
            la particularidad nacional, intervenimos con una marca distintiva:
          </p>
          <p className="text-6xl md:text-2xl lg:text-9xl">
            lo argentino espera en el futuro.
          </p>
        </div>

        {/* social media links */}
        <ul className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-4 md:gap-6 text-white z-10">
          <li>
            <a
              href="https://www.instagram.com/argentinaceibo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-3xl hover:text-gray-300 transition-colors"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ceiboargentina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-3xl hover:text-gray-300 transition-colors"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@CEIBOARGENTINA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-3xl hover:text-gray-300 transition-colors"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
        {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          background: "white",
          color: "black",
        }}
      >
        PRESENTACION YOUTUBE
      </div> */}
      </FilmGrain>
    </main>
  );
}
