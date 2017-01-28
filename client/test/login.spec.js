import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Login from '../app/components/login/Login';

describe('<Login/>', function () {
  it('should have an username input', () => {
    // given
    const errors = [];
    const onLoginClick = () => {};

    const wrapper = mount(<Login errors={errors} onLoginClick={onLoginClick} />);

    // when
    const input = wrapper.ref('username');

    // then
    expect(input).to.have.length(1);
  });

  it('should have an password input', () => {
    // given
    const errors = [];
    const onLoginClick = () => {};

    const wrapper = mount(<Login errors={errors} onLoginClick={onLoginClick} />);

    const input = wrapper.ref('password');

    expect(input).to.have.length(1);
  });

  it('should have an login button', () => {
      // given
      const errors = [];
      const onLoginClick = () => {};

      const wrapper = mount(<Login errors={errors} onLoginClick={onLoginClick} />);

      // when
      const input = wrapper.find('button');

      // then
      expect(input).to.have.length(1);
  });

  it('should click login button with credentials', () => {
      // given
      const expected = { username: 'test', password: 'user' };

      const errors = [];
      const onLoginClick = sinon.spy();

      const wrapper = mount(<Login errors={errors} onLoginClick={onLoginClick} />);

      // when
      wrapper.ref('username').simulate('change', {target: {value: 'test'}});
      wrapper.ref('password').simulate('change', {target: {value: 'user'}});

      wrapper.find('button').simulate('click');

      // then
      //expect(onLoginClick.calledWith(expected)).to.equal(true);
      expect(onLoginClick.called).to.equal(true);
  });
});