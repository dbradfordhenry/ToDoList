var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var {ToDoForm} = require('ToDoForm');


describe('ToDoForm', () => {
  it('should exist', () => {
    expect(ToDoForm).toExist();
  });
  it('should dispatch ADD_TODO when valid text entered', () => {
    var spy = expect.createSpy();
    var toDoText = 'Check mail';
    var action = {
      type:'ADD_TODO',
      text: toDoText
    }
    var addToDo = TestUtils.renderIntoDocument(<ToDoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    addToDo.refs.newToDo.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it('should not dispatch onAddToDo because of invalid todotext', () => {
    var spy = expect.createSpy();
    var toDoText = '';
    var addToDo = TestUtils.renderIntoDocument(<ToDoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    addToDo.refs.newToDo.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
