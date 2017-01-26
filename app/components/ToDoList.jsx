var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({

  render: function (){
    var {todos} = this.props;

    var rendorToDos = () => {

      if (todos.length === 0){
        return (
          <p className="container__message">Nothing to do.</p>
        );
      }

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
