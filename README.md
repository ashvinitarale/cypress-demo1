# deel-assignmentf
QA Automation Exam

It include test to create a "Fixed Rate" contract.
Please find testscript on following location.
https://github.com/ashvinitarale/deel-assignment/tree/master/deel/cypress/integration/tc_fixedrate_contract

Testscript file Name test_fixed_contract.js

Automation Tool Used : Cypress

I have used xpath, to use we need to install xpath plugin using follwing command

npm install -D cypress-xpath

After successful installation
Add the below lines in cypress/support/index.js

require('cypress-xpath')

Follwoing data is used to fill up following fields when creating the contract:
- "Contractor's start date": today minus 1 day
- Define the rate:
- "How much?": 1000
- "Currency": GBP - British Pound
QA Automation/Manual exam 5
- "Per": Week
- Add any Special Clause
- "Where is the contractor's tax residence?": United States / Colorado
