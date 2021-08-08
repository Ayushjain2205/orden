import "../styles/globals.css";
import "../styles/embla.css";
import Link from "next/link";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
