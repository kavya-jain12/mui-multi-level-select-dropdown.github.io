describe('template spec', () => {
  beforeEach(() => {
    cy.visitHomePage()
    cy.get('.MuiSelect-select').should('be.visible').click()
  })

  it('should have filter dropdown with length 4', () => {
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
  });

  it("should have availibility option", () => {
    cy.get('[data-testid="select-inner-list"]').get('li').first().contains('availibility').click()
    cy.get('[data-testid="select-outer-sub-list"]').get('[data-testid="select-inner-sub-list"]').should('have.length', 2)
    cy.get('.MuiListItem-endAction').should('be.visible').click()
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
  })

  it("should have brand option", () => {
    cy.get('[data-testid="select-inner-list"]').get('li').contains('brand').click()
    cy.get('[data-testid="select-outer-sub-list"]').get('[data-testid="select-inner-sub-list"]').should('have.length', 5)
    cy.get('.MuiListItem-endAction').should('be.visible').click()
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
  })

  it("should have quantity option", () => {
    cy.get('[data-testid="select-inner-list"]').get('li').contains('quantity').click()
    cy.get('.MuiSlider-root').should('be.be.visible')
    cy.get('.MuiListItem-endAction').should('be.visible').click()
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
  })

  it("should have price option", () => {
    cy.get('[data-testid="select-inner-list"]').get('li').contains('price').click()
    cy.get('.MuiSlider-root').should('be.be.visible')
    cy.get('.MuiListItem-endAction').should('be.visible').click()
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
  })

  it("should update value after selected for list types", () => {
    cy.get('[data-testid="select-inner-list"]').get('li').first().contains('availibility').click()
    cy.get('[data-testid="select-outer-sub-list"]').get('[data-testid="select-inner-sub-list"]').should('have.length', 2)
    cy.get('[data-testid="select-outer-sub-list"]').get('[data-testid="select-inner-sub-list"]').first().click()
    cy.get('[data-testid="KeyboardArrowLeftIcon"]').click()
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
    cy.get('[data-testid="select-inner-list"]').first().get('[data-testid="inner-badge"]').contains(1)

    cy.get('[data-testid="select-inner-list"]').get('li').contains('brand').click()
    cy.get('[data-testid="select-outer-sub-list"]').get('[data-testid="select-inner-sub-list"]').should('have.length', 5)
    cy.get('[data-testid="select-outer-sub-list"]').get('[data-testid="select-inner-sub-list"]').first().click()
    cy.get('[data-testid="KeyboardArrowLeftIcon"]').click()
    cy.get('[role="listbox"]').get('li.MuiListItem-root').should('have.length', 4)
    cy.get('[data-testid="select-inner-list"]').first().get('[data-testid="inner-badge"]').contains(1)

    cy.get('.MuiSelect-select').get('[data-testid="inner-badge"]').contains(2)
  })

  it('should clos the dropdown on click outside', () => {
    cy.get('body').click(0, 0);
    cy.get('[role="listbox"]').should('not.be.visible')
  })
})