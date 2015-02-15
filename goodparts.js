// http://addyosmani.com/blog/essential-js-namespacing/
var Global = Global || {};

// goodparts
Function.prototype.method = function(name, func) {
  if(!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};

// http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
String.method("startsWith", function(str) {
  return this.slice(0, str.length) == str;
});

// http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
String.method("endsWith", function(str) {
  return this.slice(-str.length) == str;
});

// goodparts
String.method("trim", function(str) {
  return this.replace(/^\s+|\s+$/g, "");
});

// goodparts
Number.method("toInt", function() {
  return Math[this < 0? "ceil": "floor"](this);
});
