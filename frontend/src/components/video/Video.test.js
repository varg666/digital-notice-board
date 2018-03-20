
import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  var video = mount(<Video />)
  const p = video.find('.App-title')
  expect(p.text()).toBe('Welcome to React');


  ReactDOM.render(video, div);
  ReactDOM.unmountComponentAtNode(div);
});

