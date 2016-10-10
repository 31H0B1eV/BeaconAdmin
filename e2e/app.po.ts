import { browser, element, by } from 'protractor';

export class BeaconAdminPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('beacon-root h1')).getText();
  }
}
