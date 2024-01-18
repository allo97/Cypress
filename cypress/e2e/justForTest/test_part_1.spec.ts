//https://automationexercise.com/test_cases

// ///<reference types="cypress" />

import { baseData } from "../../fixtures/base.json";
import { controllers } from "../../fixtures/controllers.json";

describe("Register / login /logout users", () => {
  // Before - odpalenie chroma, login do apki...
  // BeforeEach - clean up przed testem
  // AfterEach ...
  // After
  it("Register user test", () => {
    cy.visit(baseData.defaultUrl);
    cy.get("img[src*='logo.png']").should("be.visible");
    cy.xpath(controllers.static.logo).should("be.visible");
  });
});
