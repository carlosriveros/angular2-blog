import { Ng2ScotiabankPage } from './app.po';

describe('ng2-scotiabank App', function() {
  let page: Ng2ScotiabankPage;

  beforeEach(() => {
    page = new Ng2ScotiabankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
