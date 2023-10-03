"use client";

import React, { useEffect, useState } from 'react';
import styles from './PaginationComponent.module.css';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useCurrentData, useCurrentPage, useCurrentRecords, useSetCurrentRecords } from '../../_contexts/CarProvider';
import { useRouter } from 'next/navigation';

const PaginationComponent = () => {
  const [number] = useState(6);
  // const [nPages, setNPages] = useState(1);

  const router = useRouter();

  const cars = useCurrentData();
  const currentRecords = useCurrentRecords();
  const setCurrentRecords = useSetCurrentRecords();
  const currentPage = useCurrentPage();

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = cars.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    // const pageCount = Math.ceil(cars.length / number);
    // setNPages(pageCount);
  }, [currentPage, cars])

  return (
    <>
      <div className={styles.container}>
        <p className={styles.label}>{currentRecords.length} of {cars.length}</p>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          color='primary'
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          onChange={(e, val) => {
            router.replace(`/page/${val}`);
          }} />
      </div>
    </>
  )
}

export default PaginationComponent