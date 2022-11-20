it ('apiを叩きコンテンツを表示させる', () => {
  cy.visit('/')
  cy.intercept('GET', '/api/insights?strategy=desktop&url=https:%2F%2Fexample.com').as('getInsights')
  cy.findByTestId("cy-input-0").type('https://example.com')
  cy.findByTestId("cy-submit-button").click()
  cy.wait('@getInsights').then(() => {
    cy.wait(5000)
    cy.findByTestId('cy-title-0').should('have.text', 'https://example.com/')
  })
})
