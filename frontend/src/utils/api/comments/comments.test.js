import {
  getCommentsFromPost,
  getComment,
  addCommentToPost,
  voteComment,
  editComment,
  deleteComment,
} from './index';
import { ERROR_API } from '../utils';

describe('[api] comments', () => {
  test('[getCommentsFromPost] capturando comentários de um post válido', () => {
    const ID_POST = '8xf0y6ziyjabvozdd253nd';
    const testCondition = (comments) => {
      expect(comments.length).toBeGreaterThanOrEqual(0);
    };

    return getCommentsFromPost(ID_POST).then(testCondition);
  });
  test('[getCommentsFromPost] capturando comentários de um post inválido', () => {
    const ID_POST = '0';
    const testCondition = (comments) => {
      expect(comments.length).toBe(0);
    };

    return getCommentsFromPost(ID_POST).then(testCondition);
  });

  test('[getComment] capturando comentário válido', () => {
    const ID = '894tuq4ut84ut8v4t8wun89g';
    const testCondition = (response) => {
      expect(response.id).toBe(ID);
    };

    return getComment(ID).then(testCondition);
  });
  test('[getComment] capturando comentário inválido', () => {
    const ID = '-1';
    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return getComment(ID).then(testCondition);
  });

  test('[addComentToPost] adicionando comentário em um post válido', () => {
    const BODY = 'Apenas um comentários para testes, utilizando JEST';
    const AUTHOR = 'Gustavo F. Silva';
    const PARENT_ID = '8xf0y6ziyjabvozdd253nd';
    const testCondition = (response) => {
      expect(response.body).toBe(BODY);
      expect(response.author).toBe(AUTHOR);
      expect(response.parentId).toBe(PARENT_ID);
    };

    return addCommentToPost(BODY, AUTHOR, PARENT_ID).then(testCondition);
  });

  test('[voteComment] dado voto up em comentário válido', () => {
    const ID = '894tuq4ut84ut8v4t8wun89g';
    const OPTION = { option: 'voteUp' };
    const testCondition = (response) => {
      expect(response.voteScore).toBeDefined();
      expect(response.deleted).toBeDefined();
      expect(response.parentDeleted).toBeDefined();
    };

    return voteComment(ID, OPTION).then(testCondition);
  });
  test('[voteComment] dado voto down em comentário válido', () => {
    const ID = '894tuq4ut84ut8v4t8wun89g';
    const OPTION = { option: 'voteUp' };
    const testCondition = (response) => {
      expect(response.voteScore).toBeDefined();
      expect(response.deleted).toBeDefined();
      expect(response.parentDeleted).toBeDefined();
    };

    return voteComment(ID, OPTION).then(testCondition)
  });
  test('[voteComment] dado voto up em comentário inválido', () => {
    const ID = '-230203';
    const OPTION = { option: 'voteUp' };
    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return voteComment(ID, OPTION).then(testCondition);
  });

  test('[editComment] editando comentário válido', () => {
    const ID = '894tuq4ut84ut8v4t8wun89g';
    const BODY = 'Mudando comentário para testes';
    const testCondition = (response) => {
      expect(response.id).toBe(ID);
      expect(response.body).toBe(BODY);
    };

    return editComment(ID, BODY).then(testCondition);
  });
  test('[editComment] editando comentário inválido', () => {
    const ID = '-asaushu10291';
    const BODY = 'Mudando comentário para testes';
    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return editComment(ID, BODY).then(testCondition);
  });

  test('[deleteComment] deletando comentário válido', () => {
    const ID = '894tuq4ut84ut8v4t8wun89g';
    const testCondition = (response) => {
      expect(response.id).toBe(ID);
    };

    return deleteComment(ID).then(testCondition);
  });
  test('[deleteComment] deletando comentário inválido', () => {
    const ID = '-wqewewkasksx121';
    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return deleteComment(ID).then(testCondition);
  });
});
