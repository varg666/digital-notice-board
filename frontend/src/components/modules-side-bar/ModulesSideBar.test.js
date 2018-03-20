import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ModulesSideBar from './ModulesSideBar';

it('ModuleSlideBar Testing', () => {
  const div = document.createElement('div');
  const app = mount(<ModulesSideBar />);
  const p = app.find('.ModulesSideBar')
  expect(p.text()).toBe('hallo');

  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});
