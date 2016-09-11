var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.jsx');

document.addEventListener('DOMContentLoaded', function() {
  var app = document.getElementById('app');
  ReactDOM.render(<App />, app);
});


