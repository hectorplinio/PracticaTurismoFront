import Link from "next/link"

export default function Header() {
    
  
    return (
      <header>
        <nav>
          <ul className="">
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/client">
                <a>Restaurant</a>
              </Link>
            </li>
            <li className="">
              <Link href="/server">
                <a>GasStations</a>
              </Link>
            </li>
            <li className="">
              <Link href="/protected">
                <a>Map</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }