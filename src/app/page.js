import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

import LikeBtn from "./LikeBtn";


export default function Home() {
  return (
    <main>
        <h1>Hello World</h1>
        <LikeBtn />
    </main>
  );
}
