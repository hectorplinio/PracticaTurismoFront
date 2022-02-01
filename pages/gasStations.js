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
                if (item['label'] == "REPSOL"){
                  (item['image_url']) = "https://www.pta.es/wp-content/uploads/2020/04/logo-repsol.jpg";
                } else if (item['label'] == "GALP"){
                  (item['image_url']) = "https://www.telefonodirecto.es/wp-content/uploads/2017/07/Tel%C3%A9fono-de-Galp-Espa%C3%B1a.png";
                }else if (item['label'] == "AVIA"){
                  (item['image_url']) = "https://avia.ch/fileadmin/images/AVIA_HighRes-310_Mitgliedfirmen.jpg";
                }else if (item['label'] == "CEPSA"){
                  (item['image_url']) = "https://alastria.io/wp-content/uploads/2019/04/Logo-CEPSA-Compa%C3%B1%C3%ADa-Espa%C3%B1ola-de-Petr%C3%B3leos.png";
                }else if (item['label'] == "CAMPSA"){
                  (item['image_url']) = "https://www.telefonoasistencia.net/wp-content/uploads/2019/06/telefono-campsa.jpg";
                }else if (item['label'] == "CARREFOUR"){
                  (item['image_url']) = "https://www.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_600%2Cw_1200/v1578400400/carrefour-france.jpg";
                }else {
                  (item['image_url']) = "https://cdn.pixabay.com/photo/2013/07/13/12/44/fuel-160231_640.png";
                }
                return (
                    
                  <div className={styles.cajaRestaurant}>
                    <ul key={index}>
                    <li  className={styles.cuadro}>
                    <img src={(item['image_url'])} className={styles.imagenes}></img>
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