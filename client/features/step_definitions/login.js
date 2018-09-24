import React from 'react';
import { Given, When, Then } from 'cucumber';
import assert from 'assert';

Given('a username of {string} and a password of {string}', function(username, password) {
  this.username = username;
  this.password = password;
  this.accepted = false;
})

When('I click login', function() {
  if (this.username == 'valid' && this.password == 'test') {
    this.accepted = true;
  }
})

Then('the landing page should appear', function() {
  assertLandingPage(this, true);
})

Then('the landing page should not appear', function() {
  assertLandingPage(this, false);
})


function assertLandingPage(that, shouldAppear) {
  assert.equal(that.accepted, shouldAppear);
}
