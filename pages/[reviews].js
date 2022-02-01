import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import styles from "../styles/style.module.css";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Modal from "../components/modal";
function fecha(date) {
  return new Date(date).toLocaleString();
}

export default function useEffectPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const id = router.query;
  console.log(id);
  const resourceType = id.id;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://turismo:8081/rest/reviewsRestaurant/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <Layout>
      <div className={styles.cajaCentral}>
        <div className={styles.cajaSuperior}>
          <h1>Reviews</h1>
          <button onClick={() => setShowModal(true)}>Open Modal</button>
          <Modal onClose={() => setShowModal(false)} show={showModal}>
            Hello from the modal!
          </Modal>
        </div>
        <div className={styles.cajaTriple}>
          {items.map((item, index) => {
            console.log(item);
            return (
              <div className={styles.cajaRestaurant}>
                <ul key={index}>
                  <li className="cuadro">
                    <img
                      src="https://www.edesk.com/wp-content/uploads/2021/04/amazon-review-tool.png"
                      className={styles.imagenes}
                    ></img>
                    <br></br>Review nº: {item["id"]}
                    <br></br>Descripcion: {item["description"]}
                    <br></br>Puntuacion: {item["punctuation"]}
                    <br></br>Email: {item["email"]}
                    <br></br>Date Created: {fecha(item["created_at"]["date"])}{" "}
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
