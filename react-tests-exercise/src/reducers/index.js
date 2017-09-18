import { combineReducers } from 'redux';
import commentsReducer from './comment_reducer';

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
