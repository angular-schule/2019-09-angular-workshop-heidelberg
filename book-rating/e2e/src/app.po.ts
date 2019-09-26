import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    browser.sleep(10000);
    return element(by.css('h1')).getText() as Promise<string>;
  }
}
