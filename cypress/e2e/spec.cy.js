describe('cypress spec', () => {
  it('passes', () => {
    cy.visit('https://storefront-vercel.sam-app.ro/de-AT/product-selection')
    cy.get('[data-testid="product_card.card_reader.air.CALL_TO_ACTION"]1').click()
  })
})
