describe("admin functionality", () => {

    beforeEach(() =>{
        cy.visit('/login')
    })

    const usernameAdmin = "admin";
    const realPassword = "pass";

    it("adding new user", () => {
        cy.get("#username")
        .type("admin")
        .should("have.value", usernameAdmin)

        cy.get("#password")
        .type("pass")
        .should("have.value", realPassword)

        cy.get('#loginButton').click()

        cy.wait(500)

        cy.intercept('POST', 'http://localhost:8080/db/user/add').as('addUser')

        cy.contains('Profile').click()

        cy.get('#btnAddNewUser').click()

        cy.get("#name").click().type("cypress");

        cy.get("#outlined-age-native-simple").select("Intern");

        cy.get('#password').type("pass");

        cy.get("#btnAddUser").click();

        cy.wait('@addUser').then((interception) => {
            expect(interception).property('response').to.have.property('statusCode').equal(201)
        })
    })

})