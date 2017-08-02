import { Angular2PokedexPage } from './app.po';

describe('angular2-pokedex App', () => {
  let page: Angular2PokedexPage;

  beforeEach(() => {
    page = new Angular2PokedexPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
