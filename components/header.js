import Link from "next/link";
import styles from "./style.module.css";
import React, { useEffect, useState } from "react";

export default function Header() {
  const navegator = ["Home", "Restaurants", "GasStations", "Videos", "Map"];
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
            {navegator.map((nav) => {
              return (
                <li className={styles.liNav}>
                  {(() => {
                    if (nav == "Home") {
                      return (
                        <Link href={"/"}>
                          <a>{nav}</a>
                        </Link>
                      );
                    } else {
                      return (
                        <Link href={"/" + nav}>
                          <a>{nav}</a>
                        </Link>
                      );
                    }
                  })()}
                </li>
              );
            })}
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
