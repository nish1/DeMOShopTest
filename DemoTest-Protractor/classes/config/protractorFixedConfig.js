'use strict';

class protractorFixedConfig {

    setJasmineOptions() {
        return {
            defaultTimeoutInterval: 240000,
            showColors: true,
            isVerbose : true,
            includeStackTrace : true
        };
    }    

    onPrepare(){
        browser.waitForAngularEnabled(false);
    }
}

module.exports = protractorFixedConfig;