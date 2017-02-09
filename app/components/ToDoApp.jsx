var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoForm from 'ToDoForm';
import ToDoSearch from 'ToDoSearch';


import ToDoList from 'ToDoList';

var ToDoApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="page-title">ToDo App</h1>
                <div className="row">

                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <ToDoSearch/>
                            <ToDoList/>
                            <ToDoForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});
module.exports = ToDoApp;
