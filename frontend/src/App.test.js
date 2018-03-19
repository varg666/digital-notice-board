import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('test', () => {
  it('start', () => {
    const wrapper = shallow(<Video />);
    const text = wrapper.find('h1').text();
    console.log(text);
    expect(text).toEqual('Welcome to React')
  })
});
