import Link from "next/link"
import styles from "./style.module.css"

export default function Header() {
    
  
    return (
      <header>
        <div className={styles.cabecera}>
            <nav className={styles.navegator}>
              <ul className={styles.listaNav}>
                <li className={styles.liNav}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className={styles.liNav}>
                  <Link href="/restaurants">
                    <a>Restaurant</a>
                  </Link>
                </li>
                <li className={styles.liNav}>
                  <Link href="/gasStations">
                    <a>GasStations</a>
                  </Link>
                </li>
                <li className={styles.liNav}>
                  <Link href="/map">
                    <a>Map</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <h1 className={styles.titulo}>Welcome to Cuenca</h1>
          </div>
        
      </header>
    )
  }