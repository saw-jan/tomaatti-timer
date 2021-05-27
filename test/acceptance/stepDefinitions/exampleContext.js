const { client } = require('nightwatch-api');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('user has browsed to timer page', () => {
  return client.url(client.launchUrl);
});

When('user sets {string} as timer name', (name) => {
  return client.setValue('#timer-label', name);
});

Then('name {string} should be visible', (name) => {
  return client.expect.element('#timer-label').to.have.value.that.equals(name);
});
