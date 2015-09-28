#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Updating WebDriver"
echo $BASE_DIR
echo "-------------------------------------------------------------------"

webdriver-manager update

echo ""
echo "Starting Protractor tests"
echo $BASE_DIR
echo "-------------------------------------------------------------------"

protractor $BASE_DIR/../test/e2e/local-protractor.conf.js $*
