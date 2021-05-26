module.exports = {
  src_folders: ['./test/acceptance/tdd'],

  test_settings: {
    default: {
      launch_url: 'http://localhost:5000',
      webdriver: {
        start_process: true,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
      webdriver: {
        port: 4445,
        server_path: require('chromedriver').path,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
      webdriver: {
        port: 4446,
        server_path: require('geckodriver').path,
      },
    },
  },
};
