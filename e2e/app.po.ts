import { browser, element, by } from 'protractor';

export class ExcelsiorChumpsPage {
  navigateTo() {
    return browser.get('/');
  }

  getItemCount() {
    return element.all(by.css('app-root text')).count();
  }
}
