import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout ({ children }) {
  return (
    <>
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
