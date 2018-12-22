var webdriver = require('browserstack-webdriver');

var capabilities = {
 'browserName' : 'iPhone',
 'device' : 'iPhone 8 Plus',
 'realMobile' : 'true',
 'os_version' : '11.0',
 'browserstack.local': process.env.BROWSERSTACK_LOCAL || 'BROWSERSTACK_LOCAL'
 // 'browserstack.user' : 'USERNAME',
 // 'browserstack.key' : 'ACCESS_KEY'
 'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
  'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER || 'BROWSERSTACK_LOCAL_IDENTIFIER'
}
var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
});
