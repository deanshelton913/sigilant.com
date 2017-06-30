import { SigilantPage } from './app.po';

describe('sigilant App', () => {
  let page: SigilantPage;

  beforeEach(() => {
    page = new SigilantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
