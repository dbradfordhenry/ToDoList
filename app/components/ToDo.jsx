var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var moment = require('moment');

export var ToDo = React.createClass({

  render: function (){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var toDoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM do YYYY @ h:mm a');
    };

    return (
      <div className={toDoClassName} onClick={() => {
          dispatch(actions.toggleToDo(id));
        }}>
        <div>
        <input type="checkbox" checked={completed}/>
        </div>
        <div>
        <p>{text}</p>

        <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );

  }
});
export default connect()(ToDo);
