import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './app';
import TodoList from './todo-list';

const container = shallow(<App />);

describe('<App> component', () => {

  it('Should render component', () => {
    expect(container.find(App)).to.exist;
  });

  it('Should render <TodoList> component', () => {
    expect(container.find(App).find(TodoList)).to.exist;
  });

  it('Should render exactly one <TodoList> component', () => {
    expect(container.find(TodoList).length).to.equal(1);
  });

});
