<<<<<<< HEAD
if(!this.chai) { chai = require("chai"); }

var patiently = function(done, blockOrBlocks, maxDelay) {
  var self = this,
    blocks = typeof blockOrBlocks === 'function' ? [blockOrBlocks] : blockOrBlocks,
    block = blocks.shift(),
    delay = 200,
    maxFailures = (maxDelay || 1000) / delay,
    check = function(){
      try { block.call(self) }
      catch (exc) {
        if (exc instanceof chai.AssertionError &&
            --maxFailures >= 0) {
          setTimeout(check, delay);
          return ;
        }
        throw(exc);
      }
      block = blocks.shift();
      if (block) {
        check();
      } else {
        done();
      }
    };
   check();
}

if (typeof exports == "object") {
  module.exports = patiently;
} else {
  this["patiently"] = patiently;
};
=======
if(!this.chai) { chai = require("chai"); }

var patiently = function(done, blockOrBlocks, maxDelay) {
  var self = this,
    blocks = typeof blockOrBlocks === 'function' ? [blockOrBlocks] : blockOrBlocks,
    block = blocks.shift(),
    delay = 200,
    maxFailures = (maxDelay || 1000) / delay,
    check = function(){
      try { block.call(self) }
      catch (exc) {
        if (exc instanceof chai.AssertionError &&
            --maxFailures >= 0) {
          setTimeout(check, delay);
          return ;
        }
        throw(exc);
      }
      block = blocks.shift();
      if (block) {
        check();
      } else {
        done();
      }
    };
   check();
}

if (typeof exports == "object") {
  module.exports = patiently;
} else {
  this["patiently"] = patiently;
};
>>>>>>> c5b0324e57c4df8b38e70ce47075a7cb25dc5336
