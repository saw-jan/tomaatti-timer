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

BeforeAll(async () => {
  await startWebDriver({ env: 'chrome' });
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});
