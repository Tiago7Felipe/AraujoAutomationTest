/// <reference types="cypress" />
const pesquisa = require('../fixtures/pesquisa.json')

context('', () => {

    beforeEach(() => {
        //acessar a pagina Araujo
        cy.visit('') 
        cy.wait(5000)     
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Adicionar item ao carrinho atraves da busca', () => {
        const titulo = cy.title()
        //Pesquisando um produto
        cy.adicionarProduto(pesquisa.produto1)
        cy.intercept(
            "GET",
            "https://www.araujo.com.br/api/catalog_system/pub/products/search?fq=productId:549029"
          ).as("getCart");
          cy.wait('@getCart')
          //Validando item adicionado ao carrinho
          cy.get('.x-minicart__item-title').should('contain', 'Neosaldina')
          //Remover itens
          cy.get('.x-minicart__item-remove').click()
          //validar que o carrinho está vazio
          cy.get('.x-minicart__empty-btn-close').click()
          cy.get('.floating__sacola > .new').should('contain', 0)
          cy.get('.header__logo > a > svg').click()
          
    })

})
