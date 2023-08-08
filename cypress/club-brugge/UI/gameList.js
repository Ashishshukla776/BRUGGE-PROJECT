describe(`Navigate the matchlisting page`,()=>{
  beforeEach(()=>{
      cy.visit(Cypress.env("uiUrl"))
  })
  it(`Check functionality of single & multiple match & whole season selection`,()=>{
      /** check the all functionality of match listing page. Here we can select
          single match and multiple match or whole season to watch the event
      */
     // single match selection
     cy.get('#matchSelection').select("Whole Season 21 / 22")
      cy.get('input[name="group1"]').check({force: true}).should("be.checked")
      cy.get('#Westerlo-vs-Clubbrugge-6-aug-23').check({force: true}).should("be.checked")
      cy.get('.report-btn-wrap > :nth-child(1)')
      cy.get('.report-btn-wrap > :nth-child(2)')
      cy.get('.report-btn-wrap > :nth-child(3)')
      cy.get('.report-btn-wrap > :nth-child(4)')
      // multiple match selection
      cy.get('#Westerlo-vs-Clubbrugge-6-aug-23').check({force: true}).should("be.checked")
      cy.get('#union-vs-club-4june2023').check({force: true}).should("be.checked")
      // whole season selection
      cy.get('input[name="group3"]').check({force: true}).should("be.checked")
      cy.get('.btn-fixed > :nth-child(1)')
      cy.get('.btn-fixed > :nth-child(2)')
      // cy.get('input[name="group4"]').check({force: true}).should("be.checked")
      // cy.get('.btn-fixed > :nth-child(2)')
  })

  it.skip(`Check functionality of search box for opposition team`,()=>{
      // check single team selection functionality
      cy.get('#2293180').check({force: true}).should("be.checked")
      cy.get('input[role="combobox"]').click()   //search box
      cy.get('mat-option[role="option"]:nth-child(1)').click()  // search box item
      cy.get('#2293180').check({force: true}).should("be.checked")
      cy.get(':nth-child(1) > .btn')
      cy.get('.mat-chip-remove > .mat-icon').click()  //remove selection

      // check multiple team selection functionality

      cy.get('#2293180').check({force: true}).should("be.checked")
      cy.get('#2293179').check({force: true}).should("be.checked")
      cy.get('input[role="combobox"]').click()   //search box
      cy.get('mat-option[role="option"]:nth-child(1)').click() // search box item
      cy.get('input[role="combobox"]').click()
      cy.get('mat-option[role="option"]:nth-child(1)').click()
      cy.get('#2293180').check({force: true}).should("be.checked")
      cy.get('#2293159').check({force: true}).should("be.checked")
      cy.get('.btn-fixed > :nth-child(1)')
      cy.get('.btn-fixed > :nth-child(2)')
  })
})