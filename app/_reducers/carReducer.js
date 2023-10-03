import { ACTIONS } from '../_actions/carActions';

export const carReducer = (currentData, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CARS: {
      return action.payload.data;
    }
    case ACTIONS.FILTER_CARS: {
      return action.payload.cars.filter(car => car.name.toLowerCase().includes(action.payload.name.trim().toLowerCase()));
    }
    default: return currentData;
  }
}