var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDoForm = require('ToDoForm');


describe('ToDoForm', () => {
  it('should exist', () => {
    expect(ToDoForm).toExist();
  });
  it('should call onAddToDo prop with valid data', () => {
    var spy = expect.createSpy();
    var toDoText = 'Check mail';
    var addToDo = TestUtils.renderIntoDocument(<ToDoForm onItemSubmit={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    addToDo.refs.newToDo.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(toDoText);

  });

  it('should not call onAddToDo because of invalid data', () => {
    var spy = expect.createSpy();
    var toDoText = '';
    var addToDo = TestUtils.renderIntoDocument(<ToDoForm onItemSubmit={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    addToDo.refs.newToDo.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
