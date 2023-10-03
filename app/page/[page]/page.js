import { CarsComponent, Navbar, PaginationComponent } from '../../_components';
import styles from '../../page.module.css';
import { notFound } from 'next/navigation';

const CarsPage = ({ params }) => {
  if (Number(params.page) > 10 || Number(params.page) < 1 || isNaN(Number(params.page))) {
    notFound();
  }

  return (
    <>
      <div className={styles.main}>
        <Navbar />

        <CarsComponent />

        <PaginationComponent />
      </div>
    </>
  )
}

export default CarsPage