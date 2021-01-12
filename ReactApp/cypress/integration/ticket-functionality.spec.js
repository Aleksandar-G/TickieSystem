describe("ticket-functionality as a user", () => {
    beforeEach(() =>{
        cy.visit('/login')
    })

    const usernameTest = "test";
    const usernameAdmin = "admin";
    const realPassword = "pass";


    it("Adding new Ticket", () => {

        cy.get("#username")
        .type("admin")
        .should("have.value", usernameAdmin)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

        cy.get('#loginButton').click()

        cy.wait(500)


        cy.intercept('POST', 'http://localhost:8080/db/tickets/add').as('addTicket')

       

        cy.contains('Profile').click()

        cy.get('#btnAddNewTicket').click()

        cy.get("#duedate").click().type("1000-01-01");

        cy.get("#priority").select("High")

        cy.get("#difficulty").select("Intern")

        cy.get("#description").click().type("cypress test")

        cy.get(".addbtn").click()

        cy.wait('@addTicket').then((interception) => {
            expect(interception).property('response').to.have.property('statusCode').equal(201)
        })

    })


    it("Adding new Ticket FAILS", () => {

        cy.get("#username")
        .type("admin")
        .should("have.value", usernameAdmin)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

        cy.get('#loginButton').click()

        cy.wait(500)


        cy.intercept('POST', 'http://localhost:8080/db/tickets/add').as('addTicket')

       

        cy.contains('Profile').click()

        cy.get('#btnAddNewTicket').click()

        cy.get("#priority").select("High")

        cy.get("#difficulty").select("Intern")

        cy.get("#description").click().type("cypress test")

        cy.get(".addbtn").click()

        cy.wait('@addTicket').then((interception) => {
            expect(interception).property('response').to.have.property('statusCode').equal(400)
        })

    })


    it("Claim Ticket", () => {
        cy.get("#username")
        .type("test")
        .should("have.value", usernameTest)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

        cy.intercept('POST', 'http://localhost:8080/db/tickets/assign').as('assign')

        cy.get('#loginButton').click()

        cy.wait(500)

        cy.contains("Claim Ticket").click();

        cy.wait('@assign').then((interception) => {
            expect(interception).property('response').to.have.property('statusCode').equal(200)
        })

        
    })

    it("Close Ticket", () => {
       
        cy.contains('Profile').click()

        cy.intercept('POST', 'http://localhost:8080/db/tickets/close').as('close')

        cy.contains("Close Ticket").click();

        cy.wait('@close').then((interception) => {
            expect(interception).property('response').to.have.property('statusCode').equal(201)
        })

        
    })


    
})