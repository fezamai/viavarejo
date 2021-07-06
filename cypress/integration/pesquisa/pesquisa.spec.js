/// <reference types="cypress" />
describe('cadastroPesquisa', () => {

    context('Dado que eu acesse a página da VV Test', () => {
        before(() => {
            cy.visit('/')
        })

        it('E acesse o menu "Pesquisa - QA"', () => {
            cy.pesquisaQa()
        })

        it('Quando eu preencher todos os campos obrigatórios', () => {
            cy.fixture('cadastro.json').then(({ cadastro }) => {
                cy.cadastroPesquisa(cadastro)
            })
        })

        it('Então deve ser direcionado para uma página de sucesso', () => {
            cy.url().should('be.equal', `${Cypress.config('baseUrl')}/pesquisa/`)
            cy.fixture('cadastro.json').then(({ cadastro }) => {
                cy.get('.nf-response-msg > p').should('contain', cadastro.msg)
           })
        })
    })
})