import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import { getToken, startAgain } from '../store/actions';
import { Home } from '../../urls';
import { ResultWrapper, ButtonWrapper, LoaderWrapper, TextWrapper } from './skins';

const Result = (props) => {
  const { history: { replace } } = props;
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);
  const { planets, vehicles, falconePlanet, timeTaken, isFalconeFetched } = home;
  const { planet_name, status } = falconePlanet;
  useEffect(() => {
    if (!falconePlanet) {
      redirectToHome();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [falconePlanet]);

  const redirectToHome = () => {
    dispatch(getToken());
    dispatch(startAgain({planets, vehicles}));
    replace(Home);
  };

  return (
    <ResultWrapper>
      {isFalconeFetched ?
        <div>
          {status !== 'false' ?
            <div>
              <TextWrapper>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</TextWrapper>
              <TextWrapper>Time taken: <span>{timeTaken}</span></TextWrapper>
              <TextWrapper>Planet Found: <span>{planet_name}</span></TextWrapper>
            </div>
            :
            <div>
              <TextWrapper>Planet Not Found! Please Try Again.</TextWrapper>
            </div>}
          <ButtonWrapper onClick={redirectToHome}>Start Again</ButtonWrapper>
        </div>
        :
        <LoaderWrapper>
          <CircularProgress />
        </LoaderWrapper>}
    </ResultWrapper>
  );
}

Result.propTypes = {
  history: PropTypes.object,
};

export default Result;