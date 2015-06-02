'use strict';

var Fluxxor = require('fluxxor'),
    Constants = require('../constants').Main;

var MainStore = Fluxxor.createStore({
  initialize: function(primus) {
    this.primus = primus;
    this.total = 0;

    this.bindActions(
      Constants.SEND, this.sendMessage,
      Constants.SEND_ERROR, this.sendMessageError,
      Constants.UPDATE, this.updateMessages,
      Constants.UPDATE_ERROR, this.updateMessagesError
    );
  },

  sendMessage: function(params) {
    this.primus.write({
      success: true,
      actionGroup: 'main',
      type: 'updateMessages',
      params: { /* Your params to pass to updateMessages in here */ }
    });
  },

  sendMessageError: function(data) {
    // console.log(data);
  },

  updateMessages: function(params) {
    // In this very simple example, this is called in order to instantiate
    // the internal React update

    this.total++;
    this.emit('change');
  },

  updateMessagesError: function(data) {
    // console.log(data);
  }
});

module.exports = MainStore;
