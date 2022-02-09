import Link from 'next/link'
import Image from 'next/image'
import instagram from '../public/Instagram.png'
import facebook from '../public/facebook.png'
import twitter from '../public/twitter.png'
import youtube from '../public/youtube.png'
import styles from './style.module.css'
import RRSS_CUENCA from './constants'

export default function Footer () {
  const navegatorFooter = [instagram, facebook, twitter, youtube]
  const navegatorPolicy = ['About', 'Terms', 'Privacy Policy', 'FAQ']

  return (
    <footer className={styles.footer}>
      <div className={styles.down}>
        <nav className={styles.navegatorFooter}>
          <ul className={styles.liInfo}>
            {navegatorPolicy.map((nav) => {
              return (
                <li className={styles.info}>
                  <Link href="">
                    <a>{nav}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <nav className={styles.navegatorIcons}>
          <ul className={styles.listaIcons}>
            {navegatorFooter.map((nav) => {
              return (
                <li className={styles.icons}>

                  <Link href={{ pathname: '/' }}>
                    <Image src={nav} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.policy}>
          <p>
            Copyright © 2022 Hector Plinio Productions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
