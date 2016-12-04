import { ForimClientPage } from './app.po';

describe('forim-client App', function() {
  let page: ForimClientPage;

  beforeEach(() => {
    page = new ForimClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
