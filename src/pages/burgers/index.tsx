import Link from 'next/link'
import styles from '../../styles/Burgers.module.css'
import { GiHamburger } from 'react-icons/gi'

interface BurgerItem {
  name: string
  desc: string
  price: number
  id: number
}

interface BurgersProps<T> {
  burgers: T[]
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/items')
  const data = await response.json()

  return {
    props: {
      burgers: data,
    },
  }
}

const Burgers = ({ burgers }: BurgersProps<BurgerItem>) => {
  return (
    <div>
      <h1>Our burgers</h1>
      {burgers.map(burger => (
        <Link
          key={burger.id}
          href={`/burgers/${burger.id}`}
          className={styles.burgerCard}
        >
          <div className={styles.imageContainer}>
            <GiHamburger size={100} opacity={0.2} />
          </div>
          <div>
            <h3>{burger.name}</h3>
            <p className=''>{burger.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Burgers
