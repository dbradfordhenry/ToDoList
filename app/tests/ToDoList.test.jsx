var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });
  it ('should render one ToDo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    },
    {
      id: 2,
      text: 'Do something else'
    },
    {
      id: 3,
      text: 'Do yet another thing'
    }];
    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo);

    expect(toDosComponents.length).toBe(todos.length);
});

});
