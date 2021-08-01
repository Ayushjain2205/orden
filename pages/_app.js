import "../styles/globals.css";
import "../styles/embla.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Blob1 from "../assets/Blob1.png";
import Blob2 from "../assets/Blob2.png";
import Blob3 from "../assets/Blob3.png";
import exploreArrow from "../assets/explore-arrow.png";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
