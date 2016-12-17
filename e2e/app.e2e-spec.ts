import { ExcelsiorchumpsPage } from './app.po';

describe('excelsiorchumps App', function() {
  let page: ExcelsiorchumpsPage;

  beforeEach(() => {
    page = new ExcelsiorchumpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
