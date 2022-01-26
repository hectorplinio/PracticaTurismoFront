import Layout from '../components/layout'
import styles from "../styles/style.module.css"
import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/router';

function stars($avg){
  var $resta = 0;
  var $fila = "";
  var $fila2 = "";
  const router = useRouter();
  const {id} = router.query;

    console.log($avg);
    $avg=parseInt($avg);
    $resta = 10 - $avg;
    for(var i = $avg; i>0; i--){
      $fila+=("★");
    }
    for(var i = $resta; i>0; i--){
      $fila2+=("✩");

    }
    return($fila+$fila2);
  
}

export default function PageRestaurants () {
  const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('http://turismo:8081/rest/restaurants')
        .then(response => response.json())
        .then(json => setItems(json))
          .catch(error=>alert("Error"+error.message))
    }, [])
  
  return (
    <Layout>
      <div className={styles.cajaCentral}>
        <div className={styles.cajaSuperior}>
          <h1>Restaurants</h1>
        </div>
        <div className={styles.cajaTriple}>
            {items.map((item, index) => {
                return (
                  <div className={styles.cajaRestaurant}>
                    <ul key={index}>
                    <li  className={styles.cuadro}>
                    <img src={(item['image_url'])} className={styles.imagenes}></img>
                    <br></br>Name: {(item['name'])}
                    <br></br>Address: {item['address']}
                    <br></br>ReviewAverage: {stars(item['reviewAverage'])}
                    {/* {item['reviewAverage']} */}
                    <br></br>Num reviews: {item['numReviews']} </li>
                    <button className={styles.buttonNew}><Link href={{ pathname:'/reviews',query: { id: item['id']}}} >
                      <a >View  </a>
                    </Link></button>
                    </ul>
                </div>
                )
              })}
            
        </div>
      </div>
    </Layout>
  )
}