import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getPlanets, getVehicles, getToken, findRequiredFalcone, updateFalconMapArray } from '../store/actions';
import Home from '../../Components/Home';
import { HomeConWrapper, LoaderWrapper } from '../../Components/Home/skins';

const HomeCon = (props) => {
  const { history: { push } } = props;
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);
  const { isPlanetDataFetched, isVehicleDataFetched, token, isFalconeFetched } = home;

  useEffect(() => {
    dispatch(getPlanets());
    dispatch(getVehicles());
    dispatch(getToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findFalconeHandler = (planet_names, vehicle_names, timeTaken) => {
    dispatch(findRequiredFalcone({token, planet_names, vehicle_names, timeTaken, push}));
  }

  const updateFalconHandler = (falconArray) => {
    dispatch(updateFalconMapArray(falconArray));
  }


  return (
    <HomeConWrapper>
      {isPlanetDataFetched || isVehicleDataFetched || isFalconeFetched ?
        <Home home={home} findFalcone={findFalconeHandler} updateFalcone={updateFalconHandler} {...props} />
        :
        <LoaderWrapper>
          <CircularProgress />
        </LoaderWrapper>}
    </HomeConWrapper>
  );
};

HomeCon.propTypes = {
  history: PropTypes.object,
};

export default HomeCon;
