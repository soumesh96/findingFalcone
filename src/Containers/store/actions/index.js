import axios from 'axios';

import { Result } from '../../../urls';
import { GET_PLANETS, GET_PLANETS_API, GET_VEHICLES, GET_VEHICLES_API, GET_TOKEN, GET_TOKEN_API, FIND_FALCONE_API, FALCONE_RESULT, START_AGAIN, UPDATE_FALCON_ARRAY } from './constants';

export const getPlanets = () => async (dispatch) => {
  try {
    const res = await axios.get(GET_PLANETS_API);
    const { status, data } = res;
    if (status === 200) {
      dispatch({
        type: GET_PLANETS,
        payload: {
          data: data,
        }
      })
    }
  } catch (err) {
    console.error('error', err);
  }
}

export const getVehicles = () => async (dispatch) => {
  try {
    const res = await axios.get(GET_VEHICLES_API);
    const { status, data } = res;
    if (status === 200) {
      dispatch({
        type: GET_VEHICLES,
        payload: {
          data: data,
        }
      })
    }
  } catch (err) {
    console.error('error', err);
  }
}

export const getToken = () => (dispatch) => {
  const headers = {
    'Accept': 'application/json',
  }

  axios.post(GET_TOKEN_API, '', {
    headers: headers
  })
    .then((response) => {
      const { status, data } = response;
      if (status === 200) {
        dispatch({
          type: GET_TOKEN,
          payload: {
            data: data.token,
          },
        })
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
}

export const findRequiredFalcone = (datapack) => (dispatch) => {
  const { token, planet_names, vehicle_names, timeTaken, push  } = datapack;
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  const data = {
    token,
    planet_names,
    vehicle_names,
  }

  axios.post(FIND_FALCONE_API, data, {
    headers: headers
  })
    .then((response) => {
      const { status, data } = response;
      if (status === 200) {
        dispatch({
          type: FALCONE_RESULT,
          payload: {
            data: data,
            timeTaken,
          },
        });
        push(Result);
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
}

export const startAgain = (datapack) => (dispatch) => {
  try {
    const { planets, vehicles } = datapack;
    dispatch({
      type: START_AGAIN,
      payload: {
        planets,
        vehicles,
      }
    })
  } catch (err) {
    console.log('error', err)
  }
}

export const updateFalconMapArray = (datapack) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_FALCON_ARRAY,
      payload: {
        data: datapack,
      },
    })
  } catch (err) {
    console.log('error', err)
  }
}

