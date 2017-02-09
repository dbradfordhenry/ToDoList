var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');


import ToDoForm from 'ToDoForm';
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

import ToDoList from 'ToDoList';



var ToDoApp = React.createClass({


  getInitialState: function (){
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getToDos()
    };
  },
  componentDidUpdate: function () {
    ToDoAPI.setToDos(this.state.todos);
  },
  handleAddToDo: function (text) {
  var that = this;
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
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
  var {todos, showCompleted, searchText} = this.state;
  var filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);

return (
  <div>
  <h1 className="page-title">ToDo App</h1>
  <div className="row">

    <div className="column small-centered small-11 medium-6 large-5">
      <div className="container">
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList/>
        <ToDoForm onItemSubmit={this.handleAddToDo}/>
      </div>
    </div>
  </div>
  </div>
)
}

});
module.exports = ToDoApp;
