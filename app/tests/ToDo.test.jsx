var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var {ToDo} = require('ToDo');

describe('ToDo', () => {
  it('should exist', () => {
      expect(ToDo).toExist();
  });

it('should dispatch TOGGLE_TODO action on click', () => {
var toDoData = {
  id: 199,
  text: 'write todo.test.jsx test',
  completed: true
};
  var spy = expect.createSpy();
  var todo = TestUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);

  var $el = $(ReactDOM.findDOMNode(todo));
  TestUtils.Simulate.click($el[0]);

  expect(spy).toHaveBeenCalledWith({
    type: 'TOGGLE_TODO',
    id: toDoData.id
  });

});


});
