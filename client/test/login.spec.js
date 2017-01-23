import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
//import jest from 'jest';

import Login from '../app/components/login/Login';

describe('<Login/>', function () {
  it('should have an username to enter login details', () => {
    // given
    const errors = [];
    //const mockedLoginAction = jest.fn(); onLoginClick={mockedLoginAction}

    const component = mount(<Login errors={errors} />);

    // when
    const input = component.ref('username');

    // then
    expect(input).to.have.length(1);
  });

  it('should have an password to enter login details', () => {
    // given
    const errors = [];
    //const mockedLoginAction = jest.fn(); onLoginClick={mockedLoginAction}

    const component = mount(<Login errors={errors} />);

    const input = component.ref('password');

    expect(input).to.have.length(1);
  });
});