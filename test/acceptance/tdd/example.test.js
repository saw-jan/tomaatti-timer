describe('Tomaatti Timer: Acceptance Tests', function () {
  it('set timer name', function (browser) {
    // before
    browser.url(browser.launchUrl);
    // action
    browser.setValue('#timer-label', 'testing');
    // assertion
    browser.expect.element('#timer-label').to.have.value.that.equals('testing');
  });

  it('start and pause timer', function (browser) {
    // before
    browser.url(browser.launchUrl).setValue('#timer-label', 'testing');
    // action
    browser.click('#start-timer').pause(3000);
    browser.click('#pause-timer');
    // assertion
    browser.expect.element('.timer-table .seconds').text.to.equal('57');
  });
});
