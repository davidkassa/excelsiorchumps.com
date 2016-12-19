import { ExcelsiorChumpsPage } from './app.po';

describe('Excelsior Chumps App', function() {
  let page: ExcelsiorChumpsPage;

  beforeEach(() => {
    page = new ExcelsiorChumpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getItemCount()).toBeGreaterThanOrEqual(1);
  });
});
