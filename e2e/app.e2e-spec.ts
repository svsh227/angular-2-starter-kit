import { ShubhAngularAppPage } from './app.po';

describe('shubh-angular-app App', () => {
  let page: ShubhAngularAppPage;

  beforeEach(() => {
    page = new ShubhAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
