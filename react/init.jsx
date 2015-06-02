'use strict';

var Fluxxor = require('fluxxor'),
    React = require('react'),
    Primus = require('primus'),
    primus = new Primus(),

    // Components
    MainComponent = require('./components/main.jsx'),

    // Actions
    MainActions = require('./actions/main'),
    actions = {
      main: MainActions
    },

    // Stores
    MainStore = require('./stores/main'),
    stores = {
      main: new MainStore(primus)
    },

    flux = new Fluxxor.Flux(stores, actions);

// DEBUG ONLY
flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

// On receipt of events, if successful, route to the appropriate Flux action,
// categorised using @actionGroup and @type, optionally passing @params
// On error, route to appropriate Error action, passing all @data

primus.on('data', function(data) {
  if(data.success) {
    flux.actions[data.actionGroup][data.type].call(this, data.params || {});
  } else if(data.error) {
    flux.actions[data.actionGroup][data.type + "Error"].call(this, data);
  }
});

React.render(
  <MainComponent flux={flux} />,
  document.querySelector('main.real-time-react')
);
