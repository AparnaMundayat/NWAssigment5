
module.exports = {
    'Register Page validate details': function(browser) {
      var login = browser.page.commandsLogin();
  
      login.navigate()
        .validateForm()
  
      browser.end();
    },  
  
    'Try to Register with valid username and password': function(browser) {
      var login = browser.page.commandsLogin();
      
      login.navigate()
      .fillInForm('jerry','test','abc@gmail.com')
        .submit()
        .pause(5000)
        .assert.title('Register Success') 
  
      browser.end();
    },
  
  
    'Try to Register with a username,email and no password': function(browser) {
      var login = browser.page.commandsLogin();
  
      login.navigate()
        .fillInForm('abc', '','abc@att.com')
        .submit()
        .validateError('User name or password is Invalid')  
      browser.end();
    },
    'Try to Register with blank username,email and password': function(browser) {
        var login = browser.page.commandsLogin();
    
        login.navigate()
          .fillInForm('', '','')
          .submit()
          .validateError('User name or password is Invalid')  
        browser.end();
      }
  };
  