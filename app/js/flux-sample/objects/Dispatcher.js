class Dispatcher {

  constructor() {
    this.handlers = [];
    this.isDispatching = false;
    this.pendingPayload = null;
  }

  register(callback) {
    this.handlers.push({
      isPending: false,
      isHandled: false,
      callback: callback
    });
  };

  dispatch(payload) {
    if (this.isDispatching) {
      throw new Error("Cannot dispatch in the middle of a dispatch!");
    }

    this.handlers.forEach(function(handler) {
      handler.isPending = false;
      handler.isHandled = false;
    });

    this.pendingPayload = payload;
    this.isDispatching = true;

    try {
      this.handlers.forEach(function(handler) {
        if (!handler.isPending) {
          handler.isPending = true;
          handler.callback(payload);
          handler.isHandled = true;
        }
      })
    } finally {
      this.pendingPayload = null;
      this.isDispatching = false;
    }
  };
}

module.exports = new Dispatcher();
