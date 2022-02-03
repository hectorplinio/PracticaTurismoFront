import Link from "next/link";
import styles from "./style.module.css";
import React, { useEffect, useState } from "react";

export default function Header() {
  const navegator = ["", "restaurants","gasStations", "videos", "map"]
  const [items, setItems] = useState([]);
  const loading = {
    loading: () => "Loading...",
    ssr: false,
  };

  useEffect(() => {
    fetch("http://turismo:8081/rest/weather")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert("Error" + error.message));
  }, []);
  const weather = {
    main: items.main,
    icon: items.icon,
    celsius: items.celsius,
  };

  return (
    <header>
      <div className={styles.header}>
        <nav className={styles.navegator}>
          <ul className={styles.listNav}>
          {navegator.map((nav, index) => {
                <li className={styles.liNav}>
                <Link href={'/'+nav}>
                  <a>Home</a>
                </Link>
              </li>
              })}
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
        <div className={styles.windowMain}>
          <h1 className={styles.titleCelsius}>{weather["celsius"]} C</h1>
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

        <h1 className={styles.title}>Welcome to Cuenca</h1>
      </div>
    </header>
  );
}
