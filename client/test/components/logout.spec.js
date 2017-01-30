import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Logout from '../../app/components/logout/Logout';

describe('<Logout/>', function () {

  it('should have an logout button', () => {
      // given
      const onLogoutClick = () => {};

      const wrapper = mount(<Logout onLogoutClick={onLogoutClick} />);

      // when
      const input = wrapper.find('button');

      // then
      expect(input).to.have.length(1);
  });

  it('should click logout', () => {
      // given
      const onLogoutClick = sinon.spy();

      const wrapper = mount(<Logout onLogoutClick={onLogoutClick} />);

      // when
      wrapper.find('button').simulate('click');

      // then
      expect(onLogoutClick.called).to.equal(true);
  });
});