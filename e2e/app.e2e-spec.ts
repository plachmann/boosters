import { BoostersPage } from './app.po';

describe('boosters App', () => {
  let page: BoostersPage;

  beforeEach(() => {
    page = new BoostersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
