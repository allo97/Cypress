//https://automationexercise.com/test_cases

// ///<reference types="cypress" />

import { baseData } from "../../fixtures/base.json";
import { Helpers } from "../../support/helpers";
import { Checker } from "../../support/checker";
import { Navigation } from "cypress/support/navigation";

describe("Register / login /logout users", () => {
  const helpers = new Helpers();
  const testUserName = `TestName_${Math.random().toString().slice(2, 12)}`;
  const testUserEmail = `${testUserName}@yopmail.com`;
  const testUserPassword = `TestName_${Math.random().toString().slice(2, 12)}`;
  const checker = new Checker();
  const navigator = new Navigation();

  before(() => {
    //start
    helpers.goToPage(baseData.defaultUrl);
  });

  it("Register user test", () => {
    checker.checkIfMainPageDisplayProperly();
    checker.navigateToSignUpPageAndCheckIfDisplaysProperly();
    navigator.setNewUserDataWhileSignUp(testUserName, testUserEmail);
    navigator.setAllRequiredDataInSignUpFormAndConfirm(testUserPassword, true);
    checker.checkIfUserCreatedAndSignUp(testUserName);
    checker.deleteAccountAndCheckIfDeleted();
  });

  it("Api check", () => {
    cy.request("GET", "https://automationexercise.com/api/productsList").then(
      (res) => {
        const body = JSON.parse(res.body);
        cy.log(body);
        expect(body.responseCode).equals(200);
      }
    );
  });
});
