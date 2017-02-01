import { GuidePrototypePage } from './app.po';

describe('guide-prototype App', function() {
  let page: GuidePrototypePage;

  beforeEach(() => {
    page = new GuidePrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
