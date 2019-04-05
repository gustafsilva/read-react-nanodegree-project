import {
  getPosts,
  getPost,
  addPost,
  votePost,
  editPost,
  deletePost,
} from './index';
import { ERROR_API } from '../utils';

describe('[api] posts', () => {
  test('[getPosts] verificando tipo da resposta e tamanho', () => {
    const testCondition = (posts) => {
      expect(posts.length).toBeGreaterThanOrEqual(0);
    };

    return getPosts().then(testCondition);
  });

  test('[getPost] verificando com post existênte', () => {
    const ID = '8xf0y6ziyjabvozdd253nd';
    const testCodition = (post) => {
      expect(post.id).toBe(ID);
    };

    return getPost(ID).then(testCodition);
  });
  test('[getPost] verificando com post inexistênte', () => {
    const ID = '0';
    const testCodition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return getPost(ID).then(testCodition);
  });

  test('[addPost] adicionando post válido', () => {
    const POST = {
      title: 'Teste utilizando Jest',
      body: 'Apenas um teste',
      author: 'Gustavo F. Silva',
      category: {
        name: 'react',
        path: 'react',
      },
    };

    const testCondition = (response) => {
      expect(response).toHaveProperty('voteScore');
      expect(response).toHaveProperty('deleted');
      expect(response).toHaveProperty('commentCount');

      expect(response.deleted).toBeFalsy();
    };

    return addPost(POST).then(testCondition);
  });
  test('[addPost] adicionando post com título inválido', () => {
    const POST = {
      title: '',
      body: 'Apenas um teste',
      author: 'Gustavo F. Silva',
      category: {
        name: 'react',
        path: 'react',
      },
    };

    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return addPost(POST).then(testCondition);
  });
  test('[addPost] adicionando post com body inválida', () => {
    const POST = {
      title: 'Teste utilizando Jest',
      body: '',
      author: 'Gustavo F. Silva',
      category: {
        name: 'react',
        path: 'react',
      },
    };

    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return addPost(POST).then(testCondition);
  });
  test('[addPost] adicionando post sem author', () => {
    const POST = {
      title: 'Teste utilizando Jest',
      body: 'Apenas um teste',
      author: '',
      category: {
        name: 'react',
        path: 'react',
      },
    };

    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return addPost(POST).then(testCondition);
  });

  test('[votePost] dando voto up em post válido', () => {
    const ID = '8xf0y6ziyjabvozdd253nd';
    const OPTION = 'upVote';
    const testCodition = (response) => {
      expect(response.id).toBe(ID);
      expect(response.voteScore).toBeDefined();
    };

    return votePost(ID, OPTION).then(testCodition);
  });
  test('[votePost] dando um voto down em post válido', () => {
    const ID = '8xf0y6ziyjabvozdd253nd';
    const OPTION = 'downVote';
    const testCodition = (response) => {
      expect(response.id).toBe(ID);
      expect(response.voteScore).toBeDefined();
    };

    return votePost(ID, OPTION).then(testCodition);
  });
  test('[votePost] dando um voto up em post inválido', () => {
    const ID = 'asassdsd';
    const OPTION = 'upVote';
    const testCodition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return votePost(ID, OPTION).then(testCodition);
  });

  test('[editPost] editando post válido', () => {
    const ID = '8xf0y6ziyjabvozdd253nd';
    const TITLE = 'Testando Update';
    const BODY = 'Apenas um teste no Jest';
    const testCondition = (response) => {
      expect(response.id).toBe(ID);
      expect(response.title).toBe(TITLE);
      expect(response.body).toBe(BODY);
    };

    return editPost(ID, TITLE, BODY).then(testCondition);
  });
  test('[editPost] editando post inválido', () => {
    const ID = '0';
    const TITLE = 'Testando Update';
    const BODY = 'Apenas um teste no Jest';
    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return editPost(ID, TITLE, BODY).then(testCondition);
  });

  test('[deletePost] deletando post válido', () => {
    const ID = '6ni6ok3ym7mf1p33lnez';
    const testCondition = (response) => {
      expect(response.id).toBe(ID);
      expect(response.deleted).toBeTruthy();
    };

    return deletePost(ID).then(testCondition);
  });
  test('[deletePost] deletando post com id inválido', () => {
    const ID = '-239020ajsjas';
    const testCondition = (response) => {
      expect(response).toBe(ERROR_API);
    };

    return deletePost(ID).then(testCondition);
  });
});
