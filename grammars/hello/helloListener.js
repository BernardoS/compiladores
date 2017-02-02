// Generated from hello.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by helloParser.
function helloListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

helloListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
helloListener.prototype.constructor = helloListener;

// Enter a parse tree produced by helloParser#r.
helloListener.prototype.enterR = function(ctx) {
};

// Exit a parse tree produced by helloParser#r.
helloListener.prototype.exitR = function(ctx) {
};

exports.helloListener = helloListener;