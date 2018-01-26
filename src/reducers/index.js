import { combineReducers } from 'redux';
import SeatReducer from './SeatReducer';

export default combineReducers({
  seats: SeatReducer
});
