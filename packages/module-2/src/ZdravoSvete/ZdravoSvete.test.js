import React from 'react';
import { mount } from 'enzyme';

import { ZdravoSvete } from './ZdravoSvete';

describe('ZdravoSvete', () => {
  it('shoud match snapshot', () => {
    expect(mount(<ZdravoSvete />)).toMatchSnapshot();
  });
});
