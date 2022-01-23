describe('Create a "Fixed Rate" contract', () =>{
    it("Assert Creation of 'Fixed Contract'",()=>{

        cy.viewport(1366,768)
        // Visit AUT
        cy.visit('https://app.deel.training/login')
        cy.waitFor(100)
        // Enter valida login credetials
        cy.xpath("//input[@name='email']").type("ashvini.t@iqm.com")
        cy.xpath("//input[@name='password']").type("Password@123")
        cy.get('.mt-10').click()
        cy.wait(200)
        
        // Click on 'Create A Contract' option from left side tab
        cy.xpath("//a[starts-with(@href,'/create')]").click()
        cy.wait(200)

        // Choose option to create 'Fixed Contract' from main window
        cy.xpath("//*[@class='anchor heap-start-fixed-contract']").click()
        cy.wait(200)

        // Enter Fixed contract name
        cy.xpath("//input[@name='name']").type('Test FixedContract')

        // Choose contractor tax residence as 'Unired States'
        cy.xpath("//div[@class='input-container'][@data-qa='contractor-tax-residence']").click().contains('United States').click()

        // Choose contractor tax residence province as 'Colorado'
        cy.xpath("//div[@data-qa='contractor-tax-residence-province']").click()
        cy.get('#react-select-5-option-5 > .deel-ui__select__option-container').click()
        
        // Choose job title as 'Account'
        cy.xpath("//input[@name='jobTitle']").click()
        cy.xpath("//div/p[@class='suggestions-option']").contains('Account').click()

        // Enter 'Scope of work' as 'Test Scope'
        cy.xpath("//textarea[@name='scope']").type('Test Scope')

        // "Contractor's start date": today minus 1 day
        cy.xpath("//div[@class='deel-ui__calendar-input-container__input_content_value']").click()
        cy.xpath("//button[@class='react-calendar__tile react-calendar__tile--now react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend']/preceding-sibling::button[1]").click()
        
        // Switch to next step
        cy.xpath("//button[@data-qa='next']").click()
        
        // Select GBP - British Pound as currency
        cy.xpath("//div[@data-qa='currency-select']").click()
        cy.get('#react-select-6-option-37 > .deel-ui__select__option-container').click()

        // Enter rate as 1000
        cy.xpath("//input[@name='rate']").type('1000')

        // Select payment cycle as weekely
        cy.xpath("//div[@data-qa='cycle-select'][@class='deel-ui__select__input-container']").click()
        cy.get('#react-select-7-option-0 > .deel-ui__select__option-container').click()

        // Switch to next step
        cy.xpath("//button[@data-qa='next']").click()  

        // Switch to next step
        cy.xpath("//button[@data-qa='next']").click() 

        // Add anything in Special clause
        cy.xpath("//button[@data-qa='add-a-special-clause']").click()
        cy.xpath("//div[@class='input-container mb-4']").type('Add any Special Clause')

        //Switch to next step
        cy.xpath("//button[@data-qa='next']").click()

        // Click on 'Create Contract' button
        cy.xpath("//button[@data-qa='create-contract']").click()

        // Assert succesfully created fixed contract Name
        cy.get('h1').should('have.text', 'Test FixedContract ')

    })
})