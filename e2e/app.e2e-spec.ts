import { WriteFood3Page } from './app.po';

describe('write-food3 App', function() {
  let page: WriteFood3Page;

  beforeEach(() => {
    page = new WriteFood3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
