import Layout from "../components/layout";
import styles from "../styles/style.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import youtube from "../public/youtube.png";
import Image from "next/image";

import { useRouter } from "next/router";
function fecha(date) {
  return new Date(date).toLocaleString();
}

export default function PageRestaurants() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://turismo:8081/rest/videos")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert("Error" + error.message));
  }, []);

  return (
    <Layout>
      <div className={styles.cajaCentral}>
        <div className={styles.cajaSuperior}>
          <h1>Videos</h1>
        </div>
        <div className={styles.cajaTriple}>
          {items.map((item, index) => {
            console.log(item);
            return (
              <div className={styles.cajaRestaurant}>
                <ul key={index}>
                  <li className={styles.cuadro}>
                    <div className={styles.iconoYoutube}>
                      <Link href={item["url"]} target="_blank" className={styles.iconoYoutube}>
                        <Image src={youtube} />
                      </Link>
                    </div>
                    <br></br>Title: {item["title"]}
                    <br></br>Description: {item["description"]}
                    <br></br>Date Updated: {fecha(item["updated_at"]["date"])}
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
