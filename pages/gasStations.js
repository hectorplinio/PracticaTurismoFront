import Layout from '../components/layout'
import styles from '../styles/style.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import IMAGES_GASSTATION from '../components/constants'
function date (date) {
  return new Date(date).toLocaleString()
}

export default function PageRestaurants () {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://turismo:8081/rest/gasStations')
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert('Error' + error.message))
  }, [])

  return (
    <Layout>
      <div className={styles.boxCenter}>
        <div className={styles.boxUp}>
          <h1>Gas Stations</h1>
        </div>
        <div className={styles.boxTriple}>
          {items.map((item, index) => {
            let image =
              'https://cdn.pixabay.com/photo/2013/07/13/12/44/fuel-160231_640.png'
            if (
              item.label == 'REPSOL' ||
              item.label == 'CEPSA' ||
              item.label == 'CARREFOUR' ||
              item.label == 'AVIA' ||
              item.label == 'CAMPSA' ||
              item.label == 'GALP'
            ) {
              image = IMAGES_GASSTATION[item.label]
            }
            return (
              <div className={styles.boxRestaurant}>
                <ul key={index}>
                  <li className={styles.frame}>
                    <img src={image} className={styles.image}></img>
                    <br></br>Name: {item.label}
                    <br></br>Address: {item.address}
                    <br></br>Latitude: {item.latitude}
                    <br></br>Longitude: {item.longitude}
                    <br></br>Date Created: {date(item.created_at.date)}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
