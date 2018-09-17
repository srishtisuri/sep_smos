
//import { Thunk } from 'redux-testkit';
// import {pushErr} from '../client/src/actions/errorActions';
// import itemActions from '../client/src/actions/itemActions';
// import notificationActions from '../client/src/actions/notificationActions';
// import redirectActions from '../client/src/actions/redirectActions';
// import userActions from '../client/src/actions/userActions';


var initialState = {};

describe('error actions', () => {
  beforeEach( () => {
    initialState = {
      errors: []
  }
  });

  it('should push error to state', () => {
    const error = {type: 'TEST_DISPATCH', payload: 'test error'};
    // const dispatches = 'await Thunk(pushErr).execute(error)';
    //Reducer(""errorReducer"").expect(action).toReturnState({...initialState, errors: ['auth error']});

    // expect(dispatches.length).toBe(1);
    // expect(dispatches[0].isPlainObject()).toBe(true);
    // expect(dispatches[0].getAction()).toEqual(error);
  });
});