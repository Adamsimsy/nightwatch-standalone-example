module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com.au')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Nightwatch automation')
      .waitForElementVisible('input[value=\'Google Search\']', 1000)
      .click('input[value=\'Google Search\']')
      .pause(1000)
      .assert.containsText('div#rso div.rc:first-child',
        'Nightwatch.js')
      .end();
  }
};