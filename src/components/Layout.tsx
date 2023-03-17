import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
