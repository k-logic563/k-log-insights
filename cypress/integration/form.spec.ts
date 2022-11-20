describe('フォーム操作', () => {
  it ('入力から送信まで', () => {
    cy.visit('/')
    cy.findByTestId("cy-input-0").type('https://example.com')
    cy.findByTestId("cy-submit-button").click()
    cy.findByTestId("cy-progress").should('be.visible')
  })
  it ('エラーの検知', () => {
    cy.visit('/')
    cy.findByTestId("cy-submit-button").click()
    cy.findByTestId("cy-error-0").should('have.text', '※必須項目です')
    cy.findByTestId("cy-input-0").type('https://example')
    cy.findByTestId("cy-error-0").should('have.text', '※URLフォーマットを確認してください')
  })
})
