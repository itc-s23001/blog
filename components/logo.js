import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ box0n = false }) => (
  <Link className={box0n ? styles.box : styles.basic} href='/'>
    CUBE
  </Link>
)

export default Logo
