var React = require('react');
import ToDo from 'ToDo';
var {connect} = require('react-redux');
var ToDoAPI = require('ToDoAPI');
export var ToDoList = React.createClass({

  render: function (){
    var {todos, showCompleted, searchText} = this.props;

    var rendorToDos = () => {

      if (todos.length === 0){
        return (
          <p className="container__message">Nothing to do.</p>
        );
      }

      return ToDoAPI.filterToDos(todos, showCompleted, searchText).map((todo) => {
        return (
          <ToDo key={todo.id}{...todo}/>
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
export default connect(
  (state) => {
    return state;
  }
)(ToDoList);
