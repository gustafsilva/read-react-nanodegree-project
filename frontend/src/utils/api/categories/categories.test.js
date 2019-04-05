import { getCategories, getPostFromCategory } from './index';

describe('[api] categories', () => {
  test('[getCategories] capturando todas as categorias', () => {
    const testCondition = (categories) => {
      expect(categories.length).toBeGreaterThan(0);
    };

    return getCategories().then(testCondition);
  });

  test('[getPostFromCategory] capturando posts de categoria existênte', () => {
    const testCondition = (posts) => {
      expect(posts.length).toBeGreaterThanOrEqual(0);
    };

    return getPostFromCategory('react').then(testCondition);
  });

  test('[getPostFromCategory capturando posts de uma categoria inexistênte', () => {
    const testCondition = (posts) => {
      expect(posts.length).toBe(0);
    };

    return getPostFromCategory('sport').then(testCondition);
  });
});
