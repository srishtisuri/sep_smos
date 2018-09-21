Feature: login
  As a staff/student
  I want to login to the system
  so that i can access the system

  Scenario: login success
    Given a username of 'valid' and a password of 'test'
    When I click login
    Then the landing page should appear

  Scenario: login failed
    Given a username of 'invalid' and a password of 'detest'
    When I click login
    Then the landing page should not appear