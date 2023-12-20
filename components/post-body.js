import styles from 'styles/post-body.module.css'

const Postbody = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}
export default Postbody
