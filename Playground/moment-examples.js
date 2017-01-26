var moment = require('moment');

//console.log(moment().format());

var now = moment();

//console.log('Current timestamp', now.unix());

var timestamp = 1485393556;

var currentMoment = moment.unix(timestamp);

console.log(currentMoment.format('MM D YY @ h:mm a'));

//January 3rd, 2016 @ 12:13 AM
console.log(currentMoment.format('MMMM Do YYYY @ h:mm A'));
