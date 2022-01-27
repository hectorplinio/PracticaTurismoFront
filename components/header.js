import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

import React, { useEffect, useState } from "react";

export default function Header() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://turismo:8081/rest/weather")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert("Error" + error.message));
  }, []);
  console.log(items);
  const weather = {
    main: items.main,
    icon: items.icon,
    celsius : items.celsius,
  };

  return (
    <header>
      <div className={styles.cabecera}>
        <nav className={styles.navegator}>
          <ul className={styles.listaNav}>
            <li className={styles.liNav}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.liNav}>
              <Link href="/restaurants">
                <a>Restaurant</a>
              </Link>
            </li>
            <li className={styles.liNav}>
              <Link href="/gasStations">
                <a>GasStations</a>
              </Link>
            </li>
            <li className={styles.liNav}>
              <Link href="/videos">
                <a>Videos</a>
              </Link>
            </li>
            <li className={styles.liNav}>
              <Link href="/map">
                <a>Map</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.ventanaClima}>
          <h1 className={styles.tituloCelsius}>{weather["celsius"]} C</h1> 
          <div className={{ width: "30%", height: "30%" }}>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                weather["icon"] +
                "@2x.png"
              }
              layout="fill"
            />
          </div>
        </div>

        <h1 className={styles.titulo}>Welcome to Cuenca</h1>
      </div>
    </header>
  );
}
