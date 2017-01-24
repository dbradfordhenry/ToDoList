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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Wash the dishes'
        },
        {
          id: uuid(),
          text: 'Get chicken'
        },
        {
          id: uuid(),
          text: 'Fold the laundry'
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
render: function () {
  var {todos} = this.state;
return (
  <div>
    <ToDoSearch onSearch={this.handleSearch}/>
    <ToDoList todos={todos}/>
    <ToDoForm onItemSubmit={this.handleAddToDo}/>
  </div>
)
}

});
module.exports = ToDoApp;
