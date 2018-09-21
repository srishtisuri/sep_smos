import React from 'react';

import ShallowRenderer from 'react-test-renderer';
//import { NotFoundPage } from '../src/containers/NotFoundPage';
import configureStore from 'redux-mock-store';


const mockStore = configureStore();

describe(' String to describe test suite ', function() {
    it(' String to describe test spec ', function() {
      var a = 12, b = a;
      expect(a).toBe(b);
      expect(a).not.toBe(null);

      // const renderer = new ShallowRenderer();
      // renderer.render(<NotFoundPage />);
      // const result = renderer.getRenderOutput();
    });
  });

  