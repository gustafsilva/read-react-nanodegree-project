import React from 'react';
import { shallow } from 'enzyme';

import App from './index';

describe('[component] App', () => {
  it('rendering', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeTruthy();
  });
});
