describe("ticket-functionality as a user", () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    const usernameTest = "test";
    const realPassword = "pass";


    it("Claim Ticket", () => {
        cy.get("#username")
        .type("test")
        .should("have.value", usernameTest)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

       

        cy.get('#loginButton').click()

        
    })
})