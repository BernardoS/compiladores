// Generated from ./Grammar/Grammar2.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by Grammar2Parser.

function Grammar2Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

Grammar2Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
Grammar2Visitor.prototype.constructor = Grammar2Visitor;

// Visit a parse tree produced by Grammar2Parser#eval.
Grammar2Visitor.prototype.visitEval = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#Real.
Grammar2Visitor.prototype.visitReal = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#AddSub.
Grammar2Visitor.prototype.visitAddSub = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#Neg.
Grammar2Visitor.prototype.visitNeg = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#Int.
Grammar2Visitor.prototype.visitInt = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#Pow.
Grammar2Visitor.prototype.visitPow = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#Paren.
Grammar2Visitor.prototype.visitParen = function(ctx) {
};


// Visit a parse tree produced by Grammar2Parser#MulDiv.
Grammar2Visitor.prototype.visitMulDiv = function(ctx) {
};



exports.Grammar2Visitor = Grammar2Visitor;