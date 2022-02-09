import Layout from '../components/layout'
import styles from '../styles/style.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function date (date) {
  return new Date(date).toLocaleString()
}

export default function PageRestaurants () {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://turismo:8081/rest/videos')
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert('Error' + error.message))
  }, [])

  return (
    <Layout>
      <div className={styles.boxCenter}>
        <div className={styles.boxUp}>
          <h1>Videos</h1>
        </div>
        <div className={styles.boxTriple}>
          {items.map((item, index) => {
            return (
              <div className={styles.boxRestaurant}>
                <ul key={index}>
                  <li className={styles.frame}>
                    <Link href={item.url}>
                      <a target="_blank">
                        <img
                          src={item.img_url}
                          layout="fill"
                          className={styles.image}
                        />
                      </a>
                    </Link>
                    <br></br>Title: {item.title}
                    <br></br>Description: {item.description}
                    <br></br>Date Updated: {date(item.pubDate)}
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
