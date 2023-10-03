import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <section className={styles.layout}>
        <div>
          {children}
        </div>
      </section>
    </>
  )
}

export default Layout