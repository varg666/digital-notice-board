import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import AddVideo from './AddVideo';

const div = document.createElement('div');
var app = mount(<AddVideo />);
const component = app.find('.AddVideo');

// ------------------the 1st content
// ---------------------------------

// check the 1st title 
it('The 1st title Should be "Title" ', () => {
    const title = component.find('label').at(0)
    expect(title.text()).toBe('Title');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// check the 1st input
it('The 1st input Should be text ', () => {
    const input = component.find('input').at(0)
    expect(input.prop('type')).toBe('text');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// ------------------the 2nd content
// ---------------------------------

// check the 2nd title 
it('The 2nd title Should be "Description" ', () => {
    const title = component.find('label').at(1)
    expect(title.text()).toBe('Description');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// check the 2nd input
it('The 2nd input Should be text ', () => {
    const input = component.find('input').at(1)
    expect(input.prop('type')).toBe('text');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// ------------------the 3rd content
// ---------------------------------


// check the 3rd title 
it('The 3th title Should be "Display Date" ', () => {
    const title = component.find('label').at(2)
    expect(title.text()).toBe('Display Date');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// check the 3rd input
it('The 3rd input Should be date ', () => {
    const input = component.find('input').at(2)
    expect(input.prop('type')).toBe('date');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// ------------------the 4th content
// ---------------------------------


// check the 4th title 
it('The 4th title Should be "Expiry Date" ', () => {
    const title = component.find('label').at(3)
    expect(title.text()).toBe('Expiry Date');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// check the 4th input
it('The 4th input Should be date ', () => {
    const input = component.find('input').at(3)
    expect(input.prop('type')).toBe('date');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// ------------------the 5th content
// ---------------------------------

// check the 5th title 
it('The 5th title Should be "Youtube Embed Code" ', () => {
    const title = component.find('label').at(4)
    expect(title.text()).toBe('Youtube Embed Code');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
});

// check the textarea

// ------------------the 6th content
// ---------------------------------

