describe("Workout Timer", () => {
  before(async function () {
    // run this once before all code
    return window.caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          return window.caches.delete(cacheName);
        })
      );
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("smoketest", () => {
    cy.get('[data-testid="Header"] h1').should("have.text", "Workout Timer");
  });

  describe("As a user", () => {
    it("I can change the default time", () => {
      cy.clearLocalStorage()
        .should((ls) => {
          expect(ls.getItem("defaultTime")).to.be.null;
        })
        .get('[data-testid="Header__hours"]')
        .should("have.value", "0")
        .get('[data-testid="Header__minutes"]')
        .should("have.value", "6")
        .get('[data-testid="Header__seconds"]')
        .should("have.value", "0")
        .get('[data-testid="Header__minutes"]')
        .select("05")
        .should(() => {
          expect(localStorage.getItem("defaultTime")).to.eq("300000");
        });
    });

    it("I can add an announcement", () => {
      cy.get("[data-testid=show-more]")
        .click()
        .get("[data-testid=add-announcement]")
        .click()
        .get('[data-testid="AnnouncementConfig__time"]')
        .type("{end}")
        .type("30")
        .get('[data-testid="AnnouncementConfig__message"]')
        .type("You got this")
        .get('[data-testid="AnnouncementConfig__interval"]')
        .check();
    });
  });
});
