import React from 'react';
import { Given, When, Then } from 'cucumber';
import assert from 'assert';

Given('a username of {string} and a password of {string}', function(username, password) {
  this.username = username;
  this.password = password;
})

When('I click login', function() {
  this.incrementBy(number)
})

Then('the variable should contain {int}', function(number) {
  assert.equal(this.variable, number)
})
