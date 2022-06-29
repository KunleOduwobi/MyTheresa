# MyTheresa

## e2e Tests
The end-to-end tests that ensure that functionalities performed by users work as expected

## Setup
Simply have node.js installed on your machine and clone the repository

## Cypress Component
From your Terminal, navigate to the project root directoy and run the following command to launch the Cypress Component:
npx cypress open --component
This is useful in running testCase3

## Headless
If you wish to run all the tests on an headless browser, run the following command, which executes the test on the production environment:
npx cypress run

## Browser
You may specify what browser to run with the --browser argument. e.g.
npx cypress run --browser firefox

## Headed
If you wish to run the tests on a visual browser, use the --headed and --browser arguments. e.g.
npx cypress run --browser firefox --headed

## Spec
If you want to run only a single test file, use the --spec argument. e.g.
npx cypress run --spec cypress/e2e/testCase1.cy.js

## Environment
Test cases 1 & 2 run by default with predefined production urls, but can be overwritten with the --env argument e.g.
npx cypress run --env url=https://staging.mytheresa.com

## Script
If you do not always want to enter long commands for the environment, each environment has been scripted with simple a name. You'll find them in the package.json file.
So for example, if you want to run test cases 1 & 2 in the staging environment, simply run: npm run stagingEnv
