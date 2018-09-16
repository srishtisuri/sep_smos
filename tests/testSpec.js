// describe('title', function() {
//     it('Should exist', function() {
//         expect(document.getElementsByClassName('title')).toExist();
//     });
// });

//var request = require("request");
//var App = require("../client/src/index.js");
//import { shallow } from './test/enzyme';
import React from 'react';
import TestPage from '../client/src/Containers/TestPage';
import {mount} from './enzyme';
import { BrowserRouter } from 'react-router-dom';
import { shape } from 'prop-types';



// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
};


const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) },
});

function mountWrap(node) {
  return mount(node, createContext());
}


describe(' String to describe test suite ', function() {
    it(' String to describe test spec ', function() {
      var a = 12, b = a;
      const wrapper = mount(<TestPage/>);
      expect(a).toBe(b);
      expect(a).not.toBe(null);
    });
      describe(' Nested suite ', function() {
        it(' Nested spec ', function() {
           /* code goes here */
        });  
      });
  });