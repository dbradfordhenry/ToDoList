var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add ToDo to the lists state on handleAddToDo', () => {
    var toDoText = 'test text';
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    toDoApp.setState({todos: []});

    toDoApp.handleAddToDo(toDoText);

    expect(toDoApp.state.todos[0].text).toBe(toDoText);
  });

  it('should toggle completed value when handle toggle called', () => {
    var toDoData = {
      id: 11,
      text: 'test features',
      completed: false
    };
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: [toDoData]});
    expect(toDoApp.state.todos[0].completed).toBe(false);
    toDoApp.handleToggle(11);
    expect(toDoApp.state.todos[0].completed).toBe(true);
  });
});