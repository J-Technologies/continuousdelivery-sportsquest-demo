describe('SportsQuest Demo App', function() {

	it('should have a title', function() {
		browser.get('http://sportsquest:8080/sportsquest-web-1.0-b1');
		var caroulsel = browser.findElement(by.css('.carousel'));
		expect(browser.getTitle()).toEqual('Sportsquest app');
	});
});
