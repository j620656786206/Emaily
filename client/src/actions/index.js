import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user', FETCH_USER);

  dispatch({ type: FETCH_USER, payload: res.data });
};
