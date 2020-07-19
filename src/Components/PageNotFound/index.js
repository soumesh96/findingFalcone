import React from 'react';
import PropTypes from 'prop-types';

import { ResultWrapper, ButtonWrapper } from './skins';
import { Home } from '../../urls';

const NoPageFound = (props) => {
  const { history: { replace } } = props;
  const redirectToHome = () => {
    replace(Home);
  }
  return (
    <ResultWrapper>
      <div>
        <div>
          <p>No Page Found!</p>
        </div>
        <ButtonWrapper onClick={redirectToHome}>Go To Home</ButtonWrapper>
      </div>
    </ResultWrapper>
  );
}

NoPageFound.propTypes = {
  history: PropTypes.object,
};

export default NoPageFound;
