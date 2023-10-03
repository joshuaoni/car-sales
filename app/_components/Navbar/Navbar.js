"use client";

import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useEffect, useState } from "react";
import styles from './Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCars, useDispatch } from "../../_contexts/CarProvider";
import { ACTIONS } from "../../_actions/carActions";

const Navbar = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const cars = useCars();

  useEffect(() => {
    dispatch({
      type: ACTIONS.FILTER_CARS, payload: { cars, name }
    })
  }, [name])

  return (
    <>
      <header className={styles.nav}>
        <OutlinedInput
          id="outlined-adornment-password"
          type='text'
          value={name}
          className={styles.input}
          sx={{ borderRadius: '1000px' }}
          onChange={event => {
            setName(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Search..."
        />

        <div className={styles.item}>
          <p>Relevance</p>
          <ExpandMoreIcon />
        </div>

        <div className={styles.item}>
          <p>All brands</p>
          <ExpandMoreIcon />
        </div>
      </header>
    </>
  )
}

export default Navbar