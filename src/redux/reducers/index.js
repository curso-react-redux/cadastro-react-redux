import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux'
import UserFormReducer from './user/UserFormReducer';
export default combineReducers({
    UserFormReducer,
    form: reduxFormReducer
})