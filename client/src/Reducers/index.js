import { combineReducers } from 'redux';
import videoReducer from './Video';
import authReducer from './auth';
import channelReducers from './channel';
import commentReducer from './comments';
import currentUserReducer from './currentUser';
import HistoryReducer from './history';
import watchLaterReducer from './watchLater';


export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducers,
    videoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer
});