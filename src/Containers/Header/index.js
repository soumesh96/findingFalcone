import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderWrapper, Heading, RightHeader } from './skins';
import { Home } from '../../urls';
import { startAgain } from '../store/actions';

const Header = () => {
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);
  const { planets, vehicles } = home;
  const redirectTo = () => {
    if (window.location.pathname !== Home) {
      window.location.replace(Home);
    }
  }

  const resetHandler = () => {
    dispatch(startAgain({planets, vehicles}));
  }
  return (
    <HeaderWrapper>
      <Heading>
        <p>Finding Falcone!</p>
      </Heading>
      <RightHeader>
        <div onClick={redirectTo}>Home</div>
        <div onClick={resetHandler}>Reset</div>
      </RightHeader>
    </HeaderWrapper>
  );
}

export default Header;

