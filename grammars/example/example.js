// Generated from example.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0005\u0019\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0006",
    "\u0004\u0014\n\u0004\r\u0004\u000e\u0004\u0015\u0003\u0004\u0003\u0004",
    "\u0002\u0002\u0005\u0003\u0003\u0005\u0004\u0007\u0005\u0003\u0002\u0003",
    "\u0005\u0002\u000b\f\u000f\u000f\"\"\u0019\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u000f\u0003\u0002\u0002",
    "\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\n\u0007y\u0002\u0002\n",
    "\u000b\u0007j\u0002\u0002\u000b\f\u0007k\u0002\u0002\f\r\u0007n\u0002",
    "\u0002\r\u000e\u0007g\u0002\u0002\u000e\u0004\u0003\u0002\u0002\u0002",
    "\u000f\u0010\u0007f\u0002\u0002\u0010\u0011\u0007q\u0002\u0002\u0011",
    "\u0006\u0003\u0002\u0002\u0002\u0012\u0014\t\u0002\u0002\u0002\u0013",
    "\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015",
    "\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0003\u0002\u0002\u0002\u0017\u0018\b\u0004\u0002\u0002\u0018",
    "\b\u0003\u0002\u0002\u0002\u0004\u0002\u0015\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function example(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

example.prototype = Object.create(antlr4.Lexer.prototype);
example.prototype.constructor = example;

example.EOF = antlr4.Token.EOF;
example.WHILE = 1;
example.DO = 2;
example.WS = 3;


example.modeNames = [ "DEFAULT_MODE" ];

example.literalNames = [ null, "'while'", "'do'" ];

example.symbolicNames = [ null, "WHILE", "DO", "WS" ];

example.ruleNames = [ "WHILE", "DO", "WS" ];

example.grammarFileName = "example.g4";



exports.example = example;

