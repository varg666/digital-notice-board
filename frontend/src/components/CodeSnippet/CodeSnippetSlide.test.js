
// TODO make the test workin`

import React from 'react';
import ReactDOM from 'react-dom';
import CodeSnippetSlide from './CodeSnippetSlide';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  var codeSnippett = mount(<CodeSnippetSlide />)

  // 1. Excpecting an image and the name of the user who shared the code 
  // 2. Excpecting an code Snippet as and Image for the user 
  // 3. Timeline of the current slide 
  // 4. h4 and p for a very description and date of the current slide. 

  ReactDOM.render(codeSnippett, div);
  ReactDOM.unmountComponentAtNode(div);
}); 