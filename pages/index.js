import Layout from "../components/layout";
import styles from "../styles/style.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function fecha(date) {
  return new Date(date).toLocaleString();
}
export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://turismo:8081/rest/news")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert("Error" + error.message));
  }, []);
  console.log(items);
  return (
    <Layout>
      <div className={styles.cajaCentral}>
        <div className={styles.cajaSuperior}>
          <h1>Welcome to the Cuenca tourism web, see the news </h1>
        </div>
        <div className={styles.cajaInferior}>
          <h2>
            Into this web, you can see the best Restaurants in Cuenca where you
            can have dinner, launch or breakfast. You can see gas stations too.
          </h2>
        </div>

        <div className={styles.cajaTriple}>
          {items.map((item, index) => {
            console.log(item);
            return (
              <div className={styles.cajaRestaurant}>
                <ul key={index}>
                  <li className={styles.cuadro}>
                    <Link href={item["url"]}>
                      <a target="_blank">
                        <img
                          src={item["img_url"]}
                          layout="fill"
                          className={styles.imagenes}
                        />
                      </a>
                    </Link>
                    <br></br><b>{item["title"]}</b>
                    <br></br><b>{fecha(item["pubDate"])}</b>
                    <button className={styles.buttonNew}>
                      <Link href={item["url"]}>
                        <a target="_blank">See More </a>
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
