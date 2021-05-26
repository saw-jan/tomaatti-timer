module.exports = {
  src_folders: ['./test/acceptance/tdd'],

  test_settings: {
    default: {
      launch_url: 'http://localhost:5000',
    },
    selenium: {
      selenium: {
        start_process: true,
        port: 4444,
        server_path: require('selenium-server').path,
      },
    },
    'selenium.chrome': {
      extends: 'selenium',
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': require('chromedriver').path,
        },
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    'selenium.firefox': {
      extends: 'selenium',
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': require('geckodriver').path,
        },
      },
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};
