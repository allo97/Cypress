//https://automationexercise.com/test_cases

// ///<reference types="cypress" />

import { baseData } from "../../fixtures/base.json";
import { controllers } from "../../fixtures/controllers.json";
import { Helpers } from "../../support/helpers";

describe("Register / login /logout users", () => {
  // Before - odpalenie chroma, login do apki...
  // BeforeEach - clean up przed testem
  // AfterEach ...
  // After

  const helpers = new Helpers();
  const testUserName = `TestName_${Math.random().toString().slice(2, 12)}`;
  const testEmail = `${testUserName}@yopmail.com`;

  it("Register user test", () => {
    cy.visit(baseData.defaultUrl);
    cy.get("img[src*='logo.png']").should("be.visible");
    helpers.getElement(controllers.static.logo).should("be.visible");
    helpers.getElement(controllers.buttons.signUp_login).click();
    helpers.getElement(controllers.static.signUpForm).should("be.visible");
    helpers
      .getElement(controllers.static.signUpForm)
      .contains(controllers.text.newUserSignUp);

    helpers.getElement(controllers.input.signUpName).type(testUserName);
    helpers.getElement(controllers.input.signUpEmail).type(testEmail);
    helpers.getElement(controllers.buttons.signUp_button).click();
  });
});
