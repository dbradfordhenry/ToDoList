
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require ('ToDoApp');




var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');

store.subscribe(() => {
	var state = store.getState();
	console.log('New state', store.getState());
	ToDoAPI.setToDos(state.todos);

});

var initialToDos = ToDoAPI.getToDos();
store.dispatch(actions.addToDos(initialToDos));

//Load foundations
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

		ReactDOM.render(
			<Provider store={store}>
				<ToDoApp/>
			</Provider>,

		document.getElementById('app')
		);
