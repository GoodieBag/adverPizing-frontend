import { Angular2ThemePage } from './app.po';

describe('angular2-theme App', function() {
  let page: Angular2ThemePage;

  beforeEach(() => {
    page = new Angular2ThemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
