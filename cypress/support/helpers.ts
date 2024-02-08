export class Helpers {
  // metoda do selektora xpath albo css żeby wybierał
  getElement(selector: string) {
    if (selector.startsWith("//")) {
      cy.xpath(selector).should("exist", { timeout: 10000 });
      return cy.xpath(selector);
    } else {
      cy.get(selector).should("exist", { timeout: 10000 });
      return cy.get(selector);
    }
  }
}
