
describe("login-form", () => {
    beforeEach(() =>{
        cy.visit('/login')
    })

    const usernameTest = "test";
    const usernameAdmin = "admin"
    const realPassword = "pass";
    const fakePassowrd = "password";

    it("accepts input", () => {
        cy.get("#username")
        .type("test")
        .should("have.value", usernameTest)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)
    })

    it("login successful", () => {
        cy.get("#username")
        .type("test")
        .should("have.value", usernameTest)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

        cy.intercept('POST', 'http://localhost:8080/authenticate').as('authenticate')

        cy.get('#loginButton').click()

        cy.wait('@authenticate').then((interception) => {
            expect(interception).property('response').to.have.property('body')
        })

    cy.contains("Claim Ticket")
        
    })

    it("login fail", () => {

        cy.contains('Sign OUT').click()

        cy.get("#username")
        .type("test")
        .should("have.value", usernameTest)

        cy.get("#password")
        .type("password")
        .should("have.value", fakePassowrd)

        cy.get('#loginButton').click()

        cy.contains("Invalid Credentials")
    })

    it("sign out functionality", () => {
        cy.get("#username")
        .type("test")
        .should("have.value", usernameTest)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

    
        cy.get('#loginButton').click()

        cy.wait(200)

        cy.contains('Sign OUT').click()

        cy.contains("Login")
        
    })
})