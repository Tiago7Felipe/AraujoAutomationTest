// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('adicionarProduto', (produto) => {
    cy.get('[class="fulltext-search-box ui-autocomplete-input neemu-search-field"]')
    .click().type(produto)
    cy.get('[class="btn-buscar"]').eq(0).click()
    cy.get('[class="nm-search-results-container"]').scrollIntoView()
    cy.get('[class="nm-product-item"]').eq(0).click()
    cy.get('[class="buy-button"]').click()
    
});

