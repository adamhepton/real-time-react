'use strict';

var Constants = require('../constants').Main;

// All actions to have the simple signature of (type, params) for consistency
// with server-side event delegation

var MainActions = {
  sendMessage: function(params) {
    this.dispatch(Constants.SEND, params);
  },
  sendMessageError: function(data) {
    this.despatch(Constants.SEND_ERROR, data);
  },
  updateMessages: function(params) {
    this.dispatch(Constants.UPDATE, params);
  },
  updateMessagesError: function(data) {
    this.dispatch(Constants.UPDATE_ERROR, data);
  }
};

module.exports = MainActions;
