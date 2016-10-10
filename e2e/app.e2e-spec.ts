import { BeaconAdminPage } from './app.po';

describe('beacon-admin App', function() {
  let page: BeaconAdminPage;

  beforeEach(() => {
    page = new BeaconAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('beacon works!');
  });
});
