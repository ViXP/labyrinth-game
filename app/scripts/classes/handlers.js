function Handlers() {
  if (Handlers.instance) { return Handlers.instance; }
  Handlers.instance = this;
  this._handlers = (this._handlers == null) ? {} : this._handlers;

  this.append = function(hash) {
    for (let k in hash) {
      this._handlers[k] = hash[k];
    }
    return this;
  }

  this.get = function(k) {
    return this._handlers[k];
  }

  return this; 
}