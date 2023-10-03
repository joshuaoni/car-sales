import Image from 'next/image';
import styles from './ReuseableCard.module.css';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

const ReuseableCard = ({ car }) => {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={car.image}
          alt='car'
          width={0}
          height={0}
          sizes='100vw'
          className={styles.image}
          priority
        />

        <div className={styles.description}>
          <div className={styles.name}>
            <h4>{car.name}</h4>
            <p>{car.year}</p>
          </div>

          <div className={styles.details}>
            <div>
              <PeopleOutlineIcon />
              <p>{car.capacity}</p>
            </div>
            <div>
              <LocalGasStationIcon />
              <p>{car.fuel}</p>
            </div>
            <div>
              <SpeedIcon />
              <p>{car.rating}</p>
            </div>
            <div>
              <TimeToLeaveIcon />
              <p>{car.type}</p>
            </div>
          </div>

          <div className={styles.bottom_content}>
            <p className={styles.price}>${car.price}<span>/month</span></p>
            <div>
              <div className={styles.like}>
                <FavoriteBorderIcon />
              </div>
              <Button
                sx={{ borderRadius: '20px' }}
                className={styles.btn}
                variant="contained"
              >
                Rent now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReuseableCard