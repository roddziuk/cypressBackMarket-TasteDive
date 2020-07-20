context('Authentification Pass', () => {

    it('Login with valid credentials',() => {
      cy.visit("https://www.backmarket.fr")
      cy.get('a[href*="register"]').click()
      cy.wait(2000)
      cy.get('input[id="email-signin"]').type('yanaostrov17@gmail.com')
      cy.get('input[data-test="input-field-input"]').first().type('I6love66you') 
      cy.get('[data-test=submit-button-login]').click()
      cy.get('.vdiN-eiE8V54yQfNIbc7f').should('contain', 'Mes commandes')
    })
  })


context('Authentification Fail', () => {
  it('Login with wrong credentials',() => {
    cy.visit("https://www.backmarket.fr")
    cy.get('a[href*="register"]').click()
    cy.wait(2000)
    cy.get('input[id="email-signin"]').type('fake@email.com')
    cy.get('input[data-test="input-field-input"]').first().type('xxx')
    cy.get('[data-test=submit-button-login]').click()
    cy.get('[data-test=login-credential-error]').should('contain', 'Mauvaise combinaison email/mot de passe')
  })
})
