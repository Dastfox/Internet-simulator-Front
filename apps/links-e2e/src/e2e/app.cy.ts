import { getAddlinkButton, getLinks } from '../support/app.po';

describe('LinkApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Links', () => {
    getLinks().should((t) => expect(t.length).equal(2));
    getAddlinkButton().click();
    getLinks().should((t) => expect(t.length).equal(3));
  });
});
