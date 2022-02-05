import Layout from "../components/layout";
import styles from "../styles/style.module.css";
import dynamic from "next/dynamic";

import React, { useEffect, useState } from "react";
const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});
export default function IndexPage() {
  const [locations, setLocations] = useState(['Cuenca']);
  const [resourceType, setResourceType] = useState("restaurant");

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${resourceType}.json?access_token=pk.eyJ1IjoiaGVjdG9ycGxpbmlvIiwiYSI6ImNrejQ3cDc2ZTBjbHEyb3J4MzMzZHpmMWMifQ.XT3g3xJFTaNGxYeMBtBoaQ&bbox=-2.4827%2C40.0385%2C-2.067%2C40.1178&limit=100`;

  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, [resourceType]);
  return (
    <Layout>
      <div className={styles.boxCenter}>
        <div className={styles.boxUp}>
          <h1>MAPS</h1>
          <button className={styles.buttonSearch} onClick={() => setResourceType(["gas"])}>Gas</button>
          <button className={styles.buttonSearch} onClick={() => setResourceType(["restaurant"])}>Restaurant</button>
          <button className={styles.buttonSearch} onClick={() => setResourceType(["hotel"])}>Hotel</button>
          <button className={styles.buttonSearch} onClick={() => setResourceType(["shop"])}>Market</button>
          <div className={styles.map}>
            <Map locations={locations} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
Layout;
