import { Thunk } from 'redux-testkit';
import axios from 'axios';
import { getItems } from '../src/actions/itemActions';
import notificationActions from '../src/actions/notificationActions';
import MockAdapter from 'axios-mock-adapter';

var initialState = {};

describe('item actions', () => {
  beforeEach( () => {
    initialState = {
      errors: []
  }
  });

  it('should get items', async () => {
    var mock = new MockAdapter(axios);
    var item = {};
    mock.onGet('/api/items').reply(200, 'items');

    var dispatches = await Thunk(getItems).execute();
    expect(dispatches[0].getAction().type).toEqual('LOADING_START');
    expect(dispatches[1].getAction().type).toEqual('GET_ITEMS_SUCCESS');
    expect(dispatches[1].getAction().payload).toEqual('items');
    expect(dispatches[2].getAction().type).toEqual('GET_ITEMS_FETCHED');
    expect(dispatches[3].getAction().type).toEqual('LOADING_FIN');
  });
});