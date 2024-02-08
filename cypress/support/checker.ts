import { Helpers } from "./helpers";
import { controllers } from "cypress/fixtures/controllers.json";

export class Checker extends Helpers {
  public checkIfMainPageDisplayProperly() {
    this.checker(controllers.static.logo, controllers.condition["be.visible"]);
    //this.getElement(controllers.static.logo).should('be.visible');
  }

  public navigateToSignUpPageAndCheckIfDisplaysProperly() {
    this.click(controllers.buttons.signUpLogin);
    this.click(controllers.buttons.signUpButton);
    this.checker(
      controllers.text.newUserSignUp,
      controllers.condition["be.visible"]
    );

    //this.getElement(controllers.button.loginLink).click();
    //this.getElement(controllers.text.newUserSignUp).should('be.visible');
  }

  public checkIfUserCreatedAndSignUp(testUserName: string) {
    this.checker(
      controllers.text.accountCreated,
      controllers.condition["be.visible"]
    );
    this.click(controllers.buttons.continue);
    this.checker(
      controllers.text.loggedInAs,
      controllers.condition["have.text"],
      " Logged in as " + testUserName
    );

    //this.getElement(controllers.text.accountCreated).should('be.visible');
    //this.getElement(controllers.button.Continue).click();
    // this.getElement(controllers.text.loggedInAs).should("have.text", " Logged in as " + testUserName);
  }

  public deleteAccountAndCheckIfDeleted() {
    this.click(controllers.buttons.deleteAccount);
    this.checker(
      controllers.static.accountDeleted,
      controllers.condition["be.visible"]
    );
    this.click(controllers.buttons.continue);

    // this.getElement(controllers.button.deleteAccount).click();
    // this.getElement(controllers.static.AccountDeleted).should('be.visible');
    // this.getElement(controllers.button.Continue).click();
  }
}
