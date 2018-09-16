
import React from 'react';
import { Reducer } from 'redux-testkit';
import errorReducer from '../client/src/reducers/errorReducer';
import itemReducer from '../client/src/reducers/itemReducer';
import loaderReducer from '../client/src/reducers/loaderReducer';
import mobiReducer from '../client/src/reducers/mobiReducer';
import notificationReducer from '../client/src/reducers/notificationReducer';
import redirectReducer from '../client/src/reducers/redirectReducer';
import userReducer from '../client/src/reducers/userReducer';

var initialState = {};

describe('error reducer', () => {
  beforeEach( () => {
    initialState = {
      errors: []
  }
  });

  it('should have initial state', () => {
    expect(errorReducer()).toEqual(initialState);
  });

  it('should set error messages', () => {
    var action = {type: 'AUTH_FAIL', payload: 'auth error'};
    Reducer(errorReducer).expect(action).toReturnState({...initialState, errors: ['auth error']});
    action = {type: 'SIGNUP_FAIL', payload: 'signup error'};
    Reducer(errorReducer).expect(action).toReturnState({...initialState, errors: ['signup error']});
    action = {type: 'LOGOUT_FAIL', payload: 'logout error'};
    Reducer(errorReducer).expect(action).toReturnState({...initialState, errors: ['logout error']});
    action = {type: 'NOT_AUTH', payload: 'not auth error'};
    Reducer(errorReducer).expect(action).toReturnState({...initialState, errors: ['not auth error']});
  });

  it('should add to existing errors', () => {
    var action = {type: 'AUTH_FAIL', payload: 'error3'};
    const errors = ['error1', 'error2'];
    Reducer(errorReducer).withState({errors: errors}).expect(action).toReturnState({errors: errors.concat('error3')});
    action = {type: 'SIGNUP_FAIL', payload: 'error4'};
    Reducer(errorReducer).withState({errors: errors}).expect(action).toReturnState({errors: errors.concat('error4')});
    action = {type: 'LOGOUT_FAIL', payload: 'error5'};
    Reducer(errorReducer).withState({errors: errors}).expect(action).toReturnState({errors: errors.concat('error5')});
    action = {type: 'NOT_AUTH', payload: 'error6'};
    Reducer(errorReducer).withState({errors: errors}).expect(action).toReturnState({errors: errors.concat('error6')});
  })

  it('should clear errors', () => {
    const action = {type: 'CLEAR_ERRORS'};
    const existingState = {errors: ['error1', 'error2']};
    Reducer(errorReducer).withState(existingState).expect(action).toReturnState({errors: []});
  })
});

describe('item reducer', () => {
  beforeEach( () => {
    initialState = {
      items: [],
      fetched: false
    }
  });

  it('should have initial state', () => {
    expect(itemReducer()).toEqual(initialState);
  });

  it('should store items', () => {
    const items = [{testitem: 'test'}];
    const action = {type: 'GET_ITEMS_SUCCESS', payload: items};
    Reducer(itemReducer).expect(action).toReturnState({...initialState, items});
  });

  it('should set items.fetched to true', () => {
    const action = {type: 'GET_ITEMS_FETCHED'};
    Reducer(itemReducer).expect(action).toReturnState({...initialState, fetched: true});
  });
});

describe('loader reducer', () => {
  beforeEach( () => {
    initialState = {
      loading: false
  }
  });

  it('should have initial state', () => {
    expect(loaderReducer()).toEqual(initialState);
  });

  it('should set loading start', () => {
    const action = {type: 'LOADING_START'};
    Reducer(loaderReducer).expect(action).toReturnState({loading: true});
  });

  it('should set loading finish', () => {
    const action = {type: 'LOADING_FIN'};
    const existingState = {loading: true};
    Reducer(loaderReducer).withState(existingState).expect(action).toReturnState({loading: false});
  });
});

describe('mobi reducer', () => {
  beforeEach( () => {
    initialState = {
      mobi: false
  }
  });

  it('should have initial state', () => {
    expect(mobiReducer()).toEqual(initialState);
  });

  it('should set mobi true', () => {
    const action = {type: 'MOBI_TRUE'};
    Reducer(mobiReducer).expect(action).toReturnState({mobi: true});
  });

  it('should set mobi false', () => {
    const action = {type: 'MOBI_FALSE'};
    const existingState = {mobi: true};
    Reducer(mobiReducer).withState(existingState).expect(action).toReturnState({mobi: false});
  });
});

describe('notification reducer', () => {
  beforeEach( () => {
    initialState = {
      notification: null,
      notificationColor: ""
  }
  });

  it('should have initial state', () => {
    expect(notificationReducer()).toEqual(initialState);
  });

  it('should store notification', () => {
    const action = {type: 'PUSH_NOTIFICATION', payload: {notification: 'test', notificationColor: 'red'}};
    Reducer(notificationReducer).expect(action).toReturnState({notification: 'test', notificationColor: 'red'});
  });

  it('should remove specified stored notification', () => {
    const existingState = {notification: 'test', notificationColor: 'red'};
    var action = {type: 'CLOSE_NOTIFICATION', payload: 'nottest'};
    Reducer(notificationReducer).withState(existingState).expect(action).toReturnState(existingState);
  
    action = {type: 'CLOSE_NOTIFICATION', payload: 'test'};
    Reducer(notificationReducer).withState(existingState).expect(action).toReturnState(initialState);
  });
});

describe('redirect reducer', () => {
  beforeEach( () => {
    initialState = {
      redirecting: false
  }
  });

  it('should have initial state', () => {
    expect(redirectReducer()).toEqual(initialState);
  });

  it('should set redirecting started', () => {
    const action = {type: 'REDIRECT_START'};
    Reducer(redirectReducer).expect(action).toReturnState({redirecting: true});
  });

  it('should set redirecting finished', () => {
    const action = {type: 'REDIRECT_FIN'};
    const existingState = {redirecting: true};
    Reducer(redirectReducer).withState(existingState).expect(action).toReturnState({redirecting: false});
  });
});

describe('user reducer', () => {
  beforeEach( () => {
    initialState = {
      user: null,
      authenticated: false,
  }
  });

  it('should have initial state', () => {
    expect(userReducer()).toEqual(initialState);
  });

  it('should store user', () => {
    const user = {name: 'test'};
    const action = {type: 'AUTH_SUCCESS', payload: user};
    Reducer(userReducer).expect(action).toReturnState({user: user, authenticated: true});
  });

  it('should logout', () => {
    const action = {type: 'LOGOUT_SUCCESS'};
    const existingState = {user: 'test', authenticated: true};
    Reducer(userReducer).withState(existingState).expect(action).toReturnState(initialState);
  });

});