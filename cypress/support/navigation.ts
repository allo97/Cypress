import { Helpers } from "./helpers";
import { controllers } from "cypress/fixtures/controllers.json";
import { user } from "cypress/support/registration.data.json";
import { format } from "util";

export class Navigation extends Helpers {
  public setNewUserDataWhileSignUp(login: string, email: string) {
    this.type(controllers.input.signUpName, login);
    this.type(controllers.input.signUpEmail, email);
    this.click(controllers.buttons.signUpButton);
    this.checker(
      format(
        controllers.static.enterAccountInformation,
        "Enter Account Information"
      ),
      controllers.condition["be.visible"]
    );
    //this.getElement(controllers.input.name).invoke('val', login);
    //this.getElement(controllers.input.email).type(email);
    //this.getElement(controllers.button.signUp).click();
    //this.checker(format(controllers.static.enterAccountInformation, "Enter Account Information"),controllers.condition["be.visible"]);
  }

  public setAllRequiredDataInSignUpFormAndConfirm(
    password: string,
    confirm?: boolean
  ) {
    this.click(controllers.input.title);
    this.type(controllers.input.password, password);
    this.select(controllers.select.day, user.day);
    this.select(controllers.select.months, user.month);
    this.select(controllers.select.year, user.year);
    this.click(controllers.input.newsletter);
    this.type(controllers.input.firstName, user.firstName);
    this.type(controllers.input.lastName, user.lastName);
    this.type(controllers.input.company, user.company);
    this.type(controllers.input.address1, user.address1);
    this.select(controllers.select.country, user.country);
    this.type(controllers.input.state, user.state);
    this.type(controllers.input.city, user.city);
    this.type(controllers.input.zipcode, user.zipcode);
    this.type(controllers.input.mobileNumber, user.mobileNumber);

    //this.getElement(controllers.input.title).contains(user.title).click();
    //this.getElement(controllers.input.password).type(password);
    //this.getElement(controllers.select.day).select(user.day);
    //this.getElement(controllers.select.months).select(user.month);
    //this.getElement(controllers.select.year).select(user.year);
    //this.getElement(controllers.input.newsletter).click();

    //this.getElement(controllers.input.firstName).type(user.firstName);
    //this.getElement(controllers.input.lastName).type(user.lastName);
    //this.getElement(controllers.input.company).type(user.company);
    //this.getElement(controllers.input.address1).type(user.address1);
    //this.getElement(controllers.select.country).select(user.country);
    // this.getElement(controllers.input.state).type(user.state);
    // this.getElement(controllers.input.city).type(user.city);
    // this.getElement(controllers.input.zipcode).type(user.zipcode);
    // this.getElement(controllers.input.mobileNumber).type(user.mobileNumber);

    if (confirm) {
      this.click(controllers.buttons.createAccount);
      //this.getElement(controllers.button.createAccount).click();
    }
  }
}
