import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { DialogDemo } from "./components/Dialog/Dialog";

export default function Home() {
  return (
    <main style={{ overflowY: "hidden" }}>
      <div>
        <DialogDemo />
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/ceiboicon.png"
          alt="Ceibo Icon"
          style={{
            width: 200,
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
            }}
          >
            <source src="/grainfilm.mp4" type="video/mp4" />
            Your browser does not support video
          </video>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 50,
          fontSize: "4rem",
          width: "100%",
          height: "100%",
          color: "white",
          padding: "20px",
        }}
      >
        <p>
          Ceibo es una usina de cultura. Somos exploradores y facilitadores de
          ideas y productos que están orientados a poner a la Argentina en
          primer lugar.
        </p>
        <p>
          Con la tradición de nuestro país como guía y la mirada en recuperar la
          particularidad nacional, intervenimos con una marca distintiva: lo
          argentino espera en el futuro.
        </p>
      </div>

      <ul
        style={{
          display: "flex",
          position: "absolute",
          top: 30,
          right: 30,
          color: "white",
          gap: 20,
          fontSize: 30,
          zIndex: 2,
        }}
      >
        <li>
          <a href="">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://x.com/ceiboargentina">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@CEIBOARGENTINA">
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
    </main>
  );
}
