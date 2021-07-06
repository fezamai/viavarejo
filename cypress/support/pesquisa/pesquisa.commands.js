Cypress.Commands.add("pesquisaQa", () => {
    cy.get('#menu-item-226 > a').click()
})

Cypress.Commands.add("cadastroPesquisa", (cadastro) => {
    cy.get('#nf-field-5').type(cadastro.nome)
    cy.get('#nf-field-6').type(cadastro.sobrenome)
    cy.get('#nf-field-7').type(cadastro.email)
    cy.get('#nf-field-8').type(cadastro.confirma_email)
    cy.get('#nf-label-class-field-10-2').click()
    cy.get('#nf-field-11').select(cadastro.tempoQa)
    cy.get('#nf-field-12').select(cadastro.atraiuArea)
    cy.get('#nf-label-class-field-13-0').click()
    cy.get('#nf-field-14').type(cadastro.linguagem)
    cy.get('#nf-field-16').click()
})