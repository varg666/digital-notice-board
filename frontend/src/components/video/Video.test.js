
import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Video />, div);
  var video = mount(<Video />)
  const p = video.find('.App-title');
  expect(p.text()).toBe('Welcome to React');

  const youTubeEmbed = video.find('.embed');
  expect(youTubeEmbed.logo().)

  ReactDOM.render(video, div);
  ReactDOM.unmountComponentAtNode(div);
});
