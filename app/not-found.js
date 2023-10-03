import Link from "next/link";
import styles from './page.module.css';

export default function NotFound() {
  return (
    <>
      <div className={styles.not_found}>
        <h2>Page not found</h2>
        <Link href='/'>Back to home</Link>
      </div>
    </>
  )
}
