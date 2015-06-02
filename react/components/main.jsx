var Fluxxor = require('fluxxor'),
    React = require('react'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,

    Main = React.createClass({
      mixins: [FluxMixin, StoreWatchMixin("main")],

      getStateFromFlux: function() {
        var store = this.getFlux().store("main");
        return {
          total: store.total
        };
      },

      sendMessage: function() {
        this.getFlux().actions.main.sendMessage();
      },

      render: function() {
        return <content className="principal">
          There have been {this.state.total} messages sent.
          <button onClick={this.sendMessage}>Send Message</button>
        </content>;
      }
    });

module.exports = Main;
