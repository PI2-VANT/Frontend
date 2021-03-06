describe('Aplication', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('create accont and create vant', () => {
        cy.get('#register').click()
        cy.get('#input-name').type('user')
        cy.get('#input-email').type('8user@gmail.com')
        cy.get('#input-password').type('user123')
        cy.get('#input-confirm-password').type('user123')
        cy.get('.MuiButton-contained').click()
        cy.wait(2000)
        cy.get('.MuiButton-text').click()
        cy.get('#input-id-vant').type('vant6')
        cy.get('#input-name-vant').type('VANT 1')
        cy.get('.MuiButton-contained').click()
        cy.wait(1000)
        cy.contains('Sair').click()
    })

    it('login and monitoring vant', () => {
        cy.get('#input-email').type('8user@gmail.com')
        cy.get('#input-password').type('user123')
        cy.get('#btn-login').click()
        cy.wait(2000)
        cy.get('#monitoring-vant').click()
        cy.contains('Velocidade').should('be.visible')
        cy.contains('Nivel pesticida').should('be.visible')
        cy.contains('Bateria').should('be.visible')
        cy.contains('Temperatura').should('be.visible')
        cy.contains('Umidade').should('be.visible')
        cy.wait(1000)
        cy.contains('Sair').click()
    })

    it('login and exclude vant', () => {
        cy.get('#input-email').type('8user@gmail.com')
        cy.get('#input-password').type('user123')
        cy.get('#btn-login').click()
        cy.wait(2000)
        cy.contains('VANT 1').should('be.visible')
        cy.get('#btn-view-more').click()
        cy.wait(500)
        cy.get('#btn-exclude').click()
        cy.contains('Voce deve cadastrar um drone para continuar').should('be.visible')
        cy.wait(1000)
        cy.contains('Sair').click()
    })

    // it('login and monitoring vant', () => {
    //     cy.get('#input-email').type('user@gmail.com')
    //     cy.get('#input-password').type('user123')
    //     cy.get('#btn-login').click()
    //     cy.wait(1000)
    //     cy.contains('VANT 1').should('be.visible')
    //     cy.get('#btn-view-more').click()
    //     cy.wait(500)
    //     cy.get('#btn-exclude').click()
    //     cy.get('[data-test-id="test-example"]').click()
    // })
})