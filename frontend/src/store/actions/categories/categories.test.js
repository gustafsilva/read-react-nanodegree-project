import {
  GET_CATEGORIES,
  getCategories,
} from 'store/actions/categories';

describe('[store/actions] categories', () => {
  test('[getCategories] criando ação para receber categorias', () => {
    const categories = [{ name: 'react', path: 'react' }, { name: 'redux', path: 'redux' }];
    const actionExpected = { type: GET_CATEGORIES, categories };

    expect(getCategories(categories)).toEqual(actionExpected);
  });
});
