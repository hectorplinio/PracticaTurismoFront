import Link from "next/link"
import Image from "next/image"
import instagram from '../public/Instagram.png'
import facebook from '../public/facebook.png'
import twitter from '../public/twitter.png'
import youtube from '../public/youtube.png'
import styles from "./style.module.css"



export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.down}>
      <nav className={styles.navegatorFooter}>
        <ul className={styles.liInfo}>
            <li className={styles.info}>
                <Link href="">
                    <a>About</a>
                </Link>
            </li>
            <li className={styles.info}>
                <Link href="">
                    <a>Terms</a>
                </Link>
            </li>
            <li className={styles.info}>
                <Link href="">
                    <a>Privacy Policy</a>
                </Link>
            </li>
            <li className={styles.info}>
                <Link href="">
                    <a>FAQ</a>
                </Link>
            </li>
        </ul>
      </nav>
      <nav className={styles.navegatorIcons}>
      <ul className={styles.listaIcons}>
        <li className={styles.icons}>
            <Link href="https://www.instagram.com/turismo_aytocuenca/">
                <Image 
                    src={instagram}
                />
            </Link>
        </li>
        <li className={styles.icons}>
            <Link href="https://www.facebook.com/ayuntamientodecuenca/">
                <Image 
                    src={facebook}
                />
            </Link>        
        </li>
        <li className={styles.icons}>
            <Link href="https://twitter.com/aytocuenca?lang=es">
                <Image 
                    src={twitter}
                />
            </Link>  
        </li>
        <li className={styles.icons}>
            <Link href="https://www.youtube.com/channel/UCNnoh0F1FDnJhbHaxxv8VWg">
                <Image 
                    src={youtube}
                />
            </Link>  
        </li> 
      </ul>
    </nav>
        <div className={styles.policy}>
            <p>Copyright © 2022 Hector Plinio Productions. All Rights Reserved.</p>
        </div>
    </div>
    </footer>
  )
}
