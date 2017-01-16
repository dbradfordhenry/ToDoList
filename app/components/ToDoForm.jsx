var React = require('react');

var ToDoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var theMessage = this.refs.newToDo.value;
    //alert(theMessage);
    if (theMessage.length > 0){
      this.refs.newToDo.value = '';
      this.props.onItemSubmit(theMessage);
    } else {
      this.refs.newToDo.focus();
    }
  },
  render: function () {
    return (
      <div>
<form onSubmit={this.handleSubmit}>
  <input ref="newToDo" type="text" placeholder="What do you need to do?"/>
  <button className="button expanded hollow">Add Item</button>
</form>
      </div>
    );
  }

});

module.exports = ToDoForm;
