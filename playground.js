const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'CHANGE_NAME': {
      state = {...state, name: action.payload}
      break;
    }
    case 'CHANGE_AGE': {
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

// Create a store
const store = createStore(reducer);

// Call each time the store is updated
store.subscribe(() => {
  console.log('Store changed', store.getState());
})

// Update the store
store.dispatch({type:'CHANGE_USER', payload: 'Will'})
store.dispatch({type:'CHANGE_AGE', payload: 35})
