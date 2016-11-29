import {createStore} from 'redux';
import {appReducer} from 'components/App/reducers';

export function configureStore(state) {
  const store = createStore(appReducer, state);

  return store;
}
