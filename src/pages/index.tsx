import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GiHamburger } from 'react-icons/gi'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Hot</h1>
      <div className={styles.mainImage}>
        <GiHamburger size={150} />
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices,
        lobortis habitasse ex sociosqu proin bibendum neque quam, luctus ut
        phasellus curabitur varius eros metus.
      </p>
      <Link href='/burgers' className={styles.btn}>
        All burgers
      </Link>
    </div>
  )
}
