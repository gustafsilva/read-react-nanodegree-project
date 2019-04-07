import categoriesReducer, { INIT_STATE } from 'store/reducers/categories';
import { getCategories } from 'store/actions/categories';

describe('[store/reducers] categories', () => {
  test('[getCategories] recebendo dados com a state inicial', () => {
    const categories = [{ name: 'react', path: 'react' }, { name: 'redux', path: 'redux' }];
    const action = getCategories(categories);

    const stateExpected = { ...categories };
    const reducer = categoriesReducer(INIT_STATE, action);

    expect(reducer).toEqual(stateExpected);
  });

  test('[getCategories] recebendo dados com a state já definida', () => {
    const categoriesDefined = [{ name: 'udacity', path: 'udacity' }];
    const state = { ...categoriesDefined };
    const categories = [{ name: 'react', path: 'react' }, { name: 'redux', path: 'redux' }];
    const action = getCategories(categories);

    const stateExpected = { ...categoriesDefined, ...categories };
    const reducer = categoriesReducer(state, action);

    expect(reducer).toEqual(stateExpected);
  });
});
