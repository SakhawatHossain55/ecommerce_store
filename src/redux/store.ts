import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk'; // no changes here 😀

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export type AppState = ReturnType<typeof rootReducer>;

export default store;
