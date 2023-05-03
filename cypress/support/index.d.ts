/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    visitHomePage(): Chainable<any>
  }
}
