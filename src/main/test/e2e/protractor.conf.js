exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],
  
  seleniumAddress: 'http://hub:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://web:8080',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
