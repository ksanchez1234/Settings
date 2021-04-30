import {combineReducers} from 'redux';
import picReducer from './setProfilePic';
import usernameReducer from './setUserName';

//Combining all reducers
const allReducers = combineReducers({
    myPicture: picReducer,
    myUsername: usernameReducer
});

export default allReducers;