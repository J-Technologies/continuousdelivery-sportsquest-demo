describe('SportsQuest Demo App', function() {

	it('should have a title', function() {
		browser.get(browser.baseUrl + '/sportsquest');
		var caroulsel = browser.findElement(by.css('.carousel'));
		expect(browser.getTitle()).toEqual('Sportsquest app');
	});
});
