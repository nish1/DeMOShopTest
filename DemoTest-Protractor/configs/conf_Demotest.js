var protractorFixedConfig = require('../classes/config/protractorFixedConfig.js');
var protractorConfig = new protractorFixedConfig();

exports.config = {
    directConnect: true,

    baseUrl: 'http://demoshop24.com/',

    params: {
        login: {
            email: 'nishmithab3gs@gmail.com',
            password: 'Test123'
        },
        searchBy: {
            os: 'mac'
        },
        billingDetails:{
            firstName: 'N',
            lastName: 'B',
            address: 'Kar',
            city: 'Ban',
            postalCode: '560002'        
        }
    },

    suites: {
        demoTest: '../tests/demotest.js',
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {'args': ['--window-size=1280,1024'] },
    },

    framework: 'jasmine',

    jasmineNodeOpts: protractorConfig.setJasmineOptions(),

    onPrepare: function() {
        protractorConfig.onPrepare();
    },

};

