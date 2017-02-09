var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var ToDoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var theMessage = this.refs.newToDo.value;
    //alert(theMessage);
    if (theMessage.length > 0){
      this.refs.newToDo.value = '';
      dispatch(actions.addToDo(theMessage));
    } else {
      this.refs.newToDo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
<form onSubmit={this.handleSubmit}>
  <input ref="newToDo" type="text" placeholder="What do you need to do?"/>
  <button className="button expanded hollow">Add Item</button>
</form>
      </div>
    );
  }

});

export default connect()(ToDoForm);
