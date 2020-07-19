
import { combineReducers } from 'redux';
import homePageReducer from '../Containers/store/reducers';

export default combineReducers({
    home: homePageReducer,
});