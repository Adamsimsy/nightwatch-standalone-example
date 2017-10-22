const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

const config = {
    "src_folders" : ["tests"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",
  
    "selenium" : {
      "start_process" : true,
      "server_path" : seleniumServer.path,
      "log_path" : "",
      "port" : 5555,
      "host" : "127.0.0.1",
      "cli_args" : {
        "webdriver.chrome.driver" : chromeDriver.path,
        "webdriver.gecko.driver" : geckoDriver.path,
        "webdriver.edge.driver" : ""
      }
    },
  
    "test_settings" : {
      "default" : {
        "launch_url" : "http://www.google.com",
        "selenium_port"  : 5555,
        "selenium_host"  : "127.0.0.1",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
          "marionette": true
        }
      },
  
      "chrome" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      },
  
      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge"
        }
      }
    }
  }
  module.exports = config;