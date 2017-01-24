var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({

  render: function (){
    var {todos} = this.props;

    var rendorToDos = () => {
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id}{...todo} onToggle={this.props.onToggle}/>
        );
      });
    };
    return (
      <div>
      {rendorToDos()}
      </div>
    )

  }
});
module.exports = ToDoList;
