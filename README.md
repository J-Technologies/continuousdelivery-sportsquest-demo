SportsQuest
===========

SportsQuest is a webapp for demo purposes.


Required installations
-------------
- Java jdk 8 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
- Apache Tomcat version 8 <https://tomcat.apache.org>

For Testing
1. Download and install Nodejs (https://nodejs.org)
2. Install Protractor via commandline:

         npm install -g protractor

Start Selenium testserver via commandline: 

         webdriver-manager start 

Build
--------------
With the commands below you can build the SportsQuest webapp from source. Gradle will be downloaded and installed automatically.

	cd demo-apps/sportsquest
	./gradlew build      (or in case of Windows:  gradlew build)

Run on application server
------------------------
- Deploy war to Tomcat: build/libs/sportsquest.war
- Open in a browser <http://localhost:8080/sportsquest>
