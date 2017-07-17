import { NgCliApp1Page } from './app.po';

describe('ng-cli-app1 App', () => {
  let page: NgCliApp1Page;

  beforeEach(() => {
    page = new NgCliApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
