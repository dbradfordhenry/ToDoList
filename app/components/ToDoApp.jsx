var React = require('react');
var ToDoList = require('ToDoList');
var ToDoForm = require('ToDoForm');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({


  getInitialState: function (){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Wash the dishes'
        },
        {
          id: 3,
          text: 'Get chicken'
        },
        {
          id: 4,
          text: 'Fold the laundry'
        }
      ]

    };
  },
  handleAddToDo: function (text) {
  var that = this;
    alert('new item: ' + text);
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
