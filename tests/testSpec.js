//import { shallow } from './test/enzyme';
import React from 'react';
import {mount} from './enzyme';

describe(' String to describe test suite ', function() {
    it(' String to describe test spec ', function() {
      var a = 12, b = a;
      //const wrapper = mount(<TestPage/>);
      expect(a).toBe(b);
      expect(a).not.toBe(null);
    });
  });