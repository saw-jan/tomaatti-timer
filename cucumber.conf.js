const {
  setDefaultTimeout,
  AfterAll,
  BeforeAll,
} = require('@cucumber/cucumber');
const {
  startWebDriver,
  stopWebDriver,
  createSession,
  closeSession,
} = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async function () {
  await startWebDriver({ env: 'chrome' });
  await createSession();
});

AfterAll(async function () {
  await closeSession();
  await stopWebDriver();
});
