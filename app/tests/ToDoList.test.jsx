var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';


describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });
  it ('should render one ToDo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },
    {
      id: 2,
      text: 'Do something else',
      completed: true,
      completedAt: undefined,
      createdAt: 500
    },
    {
      id: 3,
      text: 'Do yet another thing',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo);

    expect(toDosComponents.length).toBe(todos.length);
});

});
