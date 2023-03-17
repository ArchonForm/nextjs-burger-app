import Link from 'next/link'
import { GiHamburger } from 'react-icons/gi'

const Header = () => {
  return (
    <header>
      <div>
        <GiHamburger />
      </div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/reviews'>Reviews</Link>
        <Link href='/burgers'>Burgers</Link>
      </nav>
    </header>
  )
}

export default Header
