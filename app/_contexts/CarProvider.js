"use client";

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { carReducer } from "../_reducers/carReducer";
import { getCars } from "../_utils/carUtils";
import { ACTIONS } from "../_actions/carActions";
import { usePathname } from "next/navigation";

const CarContext = createContext([]);
const CarDispatchContext = createContext(() => { });
const CurrentDataContext = createContext([]);
const CurrentRecordsContext = createContext();
const SetCurrentRecordsContext = createContext(() => { });
const CurrentPageContext = createContext(1);
const SetCurrentPageContext = createContext(() => { });
const LoadingContext = createContext(true);
const ErrorContext = createContext(null);

export function useCars() {
  return useContext(CarContext);
}

export function useDispatch() {
  return useContext(CarDispatchContext);
}

export function useCurrentData() {
  return useContext(CurrentDataContext);
}

export function useCurrentRecords() {
  return useContext(CurrentRecordsContext);
}

export function useSetCurrentRecords() {
  return useContext(SetCurrentRecordsContext);
}

export function useCurrentPage() {
  return useContext(CurrentPageContext);
}

export function useSetCurrentPage() {
  return useContext(SetCurrentPageContext);
}

export function useLoading() {
  return useContext(LoadingContext);
}

export function useError() {
  return useContext(ErrorContext);
}

const CarProvider = ({ children }) => {
  const path = usePathname().replace('/page/', '');
  const pathname = isNaN(Number(path)) ? 0 : Number(path);

  const [currentData, dispatch] = useReducer(carReducer, []);
  const [cars, setCars] = useState([]);
  const [currentRecords, setCurrentRecords] = useState(cars);
  const [currentPage, setCurrentPage] = useState(pathname);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCarsFunction = async () => {
      let [data, error] = await getCars();

      if (data !== null) {
        setCars(data);
        dispatch({
          type: ACTIONS.ADD_CARS, payload: { data }
        })
      } else {
        setError(error.message);
      }
      setIsLoading(false);
    }

    getCarsFunction();
  }, [])

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname])

  return (
    <>
      <CarContext.Provider value={cars}>
        <CarDispatchContext.Provider value={dispatch}>
          <CurrentDataContext.Provider value={currentData}>
            <CurrentRecordsContext.Provider value={currentRecords}>
              <SetCurrentRecordsContext.Provider value={setCurrentRecords}>
                <CurrentPageContext.Provider value={currentPage}>
                  <SetCurrentPageContext.Provider value={setCurrentPage}>
                    <LoadingContext.Provider value={isLoading}>
                      <ErrorContext.Provider value={error}>
                        {children}
                      </ErrorContext.Provider>
                    </LoadingContext.Provider>
                  </SetCurrentPageContext.Provider>
                </CurrentPageContext.Provider>
              </SetCurrentRecordsContext.Provider>
            </CurrentRecordsContext.Provider>
          </CurrentDataContext.Provider>
        </CarDispatchContext.Provider>
      </CarContext.Provider>
    </>
  )
}

export default CarProvider