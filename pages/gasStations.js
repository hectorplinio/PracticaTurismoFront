import Layout from '../components/layout'
import styles from "../styles/style.module.css"
import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/router';
function fecha(date){
    return new Date(date).toLocaleString();
  }


export default function PageRestaurants () {
  const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('http://turismo:8081/rest/gasStations')
        .then(response => response.json())
        .then(json => setItems(json))
          .catch(error=>alert("Error"+error.message))
    }, [])
  
  return (
    <Layout>
      <div className={styles.cajaCentral}>
        <div className={styles.cajaSuperior}>
          <h1>Gas Stations</h1>
        </div>
        <div className={styles.cajaTriple}>
            {items.map((item, index) => {
                console.log(item);
                return (
                    
                  <div className={styles.cajaRestaurant}>
                    <ul key={index}>
                    <li  className={styles.cuadro}>
                    <br></br>Name: {(item['label'])}
                    <br></br>Address: {item['address']}
                    <br></br>Latitude: {(item['latitude'])}
                    {/* {item['reviewAverage']} */}
                    <br></br>Longitude: {item['longitude']} 
                    <br></br>Date Created: {fecha(item['created_at']['date'])}</li>
                    {/* <Link href={{ pathname:'/reviews',query: { id: item['id']}}} >
                      <a className={styles.buttonView}>View  </a>
                    </Link> */}
                    </ul>
                </div>
                )
              })}
            
        </div>
      </div>
    </Layout>
  )
}