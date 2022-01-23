import Layout from '../components/layout'
import styles from "../styles/style.module.css"
import Link from "next/link"

export default function Page () {
  return (
    <Layout>
      <div className={styles.cajaCentral}>
        <div className={styles.cajaSuperior}>
          <h1>Welcome to the Cuenca tourism web</h1>
        </div>
        <div className={styles.cajaInferior}>
          <h2>Into this web, you can see the best Restaurants in Cuenca where you can have dinner, launch or breakfast. You can see gas stations too.
          </h2>
        </div>
      </div>
    </Layout>
  )
}