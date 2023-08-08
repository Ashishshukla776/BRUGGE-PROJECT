describe(`Navigate the stats-plus page`,()=>{
    const matchSel = require('../../selectors/matchPlus.sel')
    before(()=>{
        cy.visit(Cypress.env("uiUrl"))
    })
    it(`Check the fuctionality of stats+ page`,()=>{
      
        cy.get(matchSel.chooseMatch).check({force: true})
        cy.get(matchSel.matchSelect).click({force: true})
        cy.get('.report-btn-wrap > :nth-child(1)').should("have.contain","Stats+").click()

        cy.get('#goalhome').click({force: true})
        cy.get('#goalall')
        cy.get('#goalaway')

        cy.get('#targethome')
        cy.get('#targetall')
        cy.get('#targetaway')

        cy.get('#shottargethome')
        cy.get('#shottargetall')
        cy.get('#shottargetaway')

        cy.get('#savehome')
        cy.get('#saveall')
        cy.get('#saveaway')

        cy.get('#directkickhome')
        cy.get('#directkickall')
        cy.get('#directkickaway')

        cy.get('#cornerhome')
        cy.get('#cornerall')
        cy.get('#corneraway')

        cy.get('#crosseshome')
        cy.get('#crossesall')
        cy.get('#crossesaway')

        cy.get('#foulhome')
        cy.get('#foulall')
        cy.get('#foulaway')

        cy.get('#assistedhome')
        cy.get('#assistedall')
        cy.get('#assistedaway')
        
    })
})