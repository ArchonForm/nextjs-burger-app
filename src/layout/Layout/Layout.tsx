import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.content}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
