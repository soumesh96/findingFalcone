import { GET_PLANETS, GET_VEHICLES, GET_TOKEN, FALCONE_RESULT, START_AGAIN, UPDATE_FALCON_ARRAY } from '../actions/constants';

import { initialState } from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload.data,
        isPlanetDataFetched: true,
      };
    case GET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload.data,
        isVehicleDataFetched: true,
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload.data,
      };
    case FALCONE_RESULT:
      return {
        ...state,
        falconePlanet: action.payload.data,
        isFalconeFetched: true,
        timeTaken: action.payload.timeTaken,
      };
    case START_AGAIN:
      const falconeArray = [...state.falconeData];
      const modifiedFalconArray = falconeArray.map((falcone) => {
        return {
          ...falcone,
          selectedPlanet: '',
          selectedVehicle: '',
          planets: action.payload.planets,
          vehicles: action.payload.vehicles,
          time: 0,
        };
      });
      return {
        ...state,
        isFalconeFetched: false,
        falconePlanet: '',
        timeTaken: 0,
        falconeData: modifiedFalconArray,
      };
    case UPDATE_FALCON_ARRAY:
      return {
        ...state,
        falconeData: action.payload.data,
      };
    default:
      return state
  }
}