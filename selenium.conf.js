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
        // to run with selenium start manually
        // start_process: false,
        // port: 4444,
        // host: 'localhost',
      },
    },
    chrome: {
      extends: 'selenium',
      selenium: {
        // if running selenium manually, this has no effect
        // chromedriver path must be provided at the time of starting selenium server
        cli_args: {
          'webdriver.chrome.driver': require('chromedriver').path,
        },
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    firefox: {
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
