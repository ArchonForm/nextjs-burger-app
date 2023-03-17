import styles from '../../styles/Burgers.module.css'
import { GiHamburger } from 'react-icons/gi'

interface BurgerItem {
  name: string
  desc: string
  price: number
  id: number
}

interface BurgerProps<T> {
  burger: T
}

interface BurgerContext<T> {
  params: T
}

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:5000/items')
  const data = await response.json()

  const paths = data.map((burger: BurgerItem) => {
    return {
      params: {
        id: burger.id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: BurgerContext<BurgerItem>) => {
  const response = await fetch(
    `http://localhost:5000/items/${context.params.id}`
  )
  const data = await response.json()

  return {
    props: {
      burger: data,
    },
  }
}

const Details = ({ burger }: BurgerProps<BurgerItem>) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <GiHamburger size={200} opacity={0.2} />
      </div>
      <div className=''>{burger.desc}</div>
    </div>
  )
}

export default Details
