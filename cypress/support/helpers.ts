export class Helpers {
  // metoda do selektora xpath albo css żeby wybierał
  public getElement(selector: string) {
    if (selector.startsWith("//")) {
      cy.xpath(selector).should("exist", { timeout: 10000 });
      return cy.xpath(selector);
    } else {
      cy.get(selector).should("exist", { timeout: 10000 });
      return cy.get(selector);
    }
  }

  public static log(selectorOrMessage: string) {
    cy.task(
      "consoleLog",
      `${new Date().toLocaleString()} -> ${selectorOrMessage}`
    );
    cy.log(`**${new Date().toLocaleString()} -> ${selectorOrMessage}**`);
  }

  public goToPage(url: string) {
    cy.visit(url);
  }

  public click(selector: string) {
    Helpers.log(`Click on ${selector}`);
    this.getElement(selector).click({ force: true });
  }

  public type(selector: string, value: string) {
    Helpers.log(`Type on ${selector} with ${value}`);
    this.getElement(selector).type(value);
  }

  public select(selector: string, value: string) {
    Helpers.log(`Select on ${selector} with ${value}`);
    this.getElement(selector).select(value);
  }

  public invoketype(selector: string, value: string) {
    Helpers.log(`Invoke type on ${selector} with ${value}`);
    this.getElement(selector).invoke("val", value); //innerText?
  }

  public checker(selector: string, condition: string, parameter?: string) {
    Helpers.log(`Check if ${selector} ---> ${condition} ${parameter}`);
    this.getElement(selector).should(condition, parameter);
  }
}
