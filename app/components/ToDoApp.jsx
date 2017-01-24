var React = require('react');
var ToDoList = require('ToDoList');
var ToDoForm = require('ToDoForm');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({


  getInitialState: function (){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Wash the dishes',
          completed: false
        },
        {
          id: uuid(),
          text: 'Get chicken',
          completed: true
        },
        {
          id: uuid(),
          text: 'Fold the laundry',
          completed: false
        }
      ]

    };
  },
  handleAddToDo: function (text) {
  var that = this;
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text
      }
    ]
  });

    // alert('new item: ' + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function (id) {

    var updatedToDos = this.state.todos.map((todo) => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos:updatedToDos});

  },
render: function () {
  var {todos} = this.state;
return (
  <div>
    <ToDoSearch onSearch={this.handleSearch}/>
    <ToDoList todos={todos} onToggle={this.handleToggle}/>
    <ToDoForm onItemSubmit={this.handleAddToDo}/>
  </div>
)
}

});
module.exports = ToDoApp;
