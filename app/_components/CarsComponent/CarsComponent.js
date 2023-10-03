"use client";

import styles from './CarsComponent.module.css';
import { ReuseableCard } from '../index';
import { useCurrentRecords, useError, useLoading } from '../../_contexts/CarProvider';

const CarsComponent = () => {
  const currentRecords = useCurrentRecords();
  const isLoading = useLoading();
  const error = useError();

  return (
    <>
      <main className={styles.container}>
        {isLoading ?
          <p>Loading..</p> :
          error ?
            <p>{error === 'Failed to fetch' ? 'Failed to fetch cars. Check that the server is running and try again' : 'An Error Occurred'}</p> :
            currentRecords.length ?
              currentRecords.map(car => (
                <ReuseableCard
                  key={car.id}
                  car={car}
                />
              )) :
              <p>No cars available</p>}
      </main>
    </>
  )
}

export default CarsComponent