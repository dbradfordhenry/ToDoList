var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };
      var res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
    });
  it('should generate add toggleShowCompleted action', () => {

    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

    it('should generate add todo action', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'thing to do'
      };
      var res = actions.addToDo(action.text);

      expect(res).toEqual(action);
    });

    it('should generate add to dos actions object', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = actions.addToDos(todos);

      expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = actions.toggleToDo(action.id);
      expect(res).toEqual(action);
    })
  });
