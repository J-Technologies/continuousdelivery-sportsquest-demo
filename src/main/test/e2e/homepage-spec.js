describe('SportsQuest Demo App', function() {

	it('should have a title', function() {
		browser.get('http://localhost:8080/sportsquest/');
		var caroulsel = browser.findElement(by.css('.carousel'));
//		browser.actions().mouseMove(carousel).find();
		expect(browser.getTitle()).toEqual('Sportsquest app');
	});
});
