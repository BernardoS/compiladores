// Generated from Grammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0004,\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0006\u0002\u0011\n\u0002\r\u0002\u000e\u0002\u0012",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006$\n\u0006\f\u0006\u000e",
    "\u0006\'\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0002\u0002\b\u0003\u0003\u0005\u0002\u0007\u0002\t\u0002\u000b\u0002",
    "\r\u0004\u0003\u0002\u0006\u0005\u0002\u000b\f\u000f\u000f\"\"\u0003",
    "\u0002C\\\u0003\u00022;\u0004\u00022;C\\)\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u0010\u0003\u0002\u0002",
    "\u0002\u0005\u0016\u0003\u0002\u0002\u0002\u0007\u0018\u0003\u0002\u0002",
    "\u0002\t\u001c\u0003\u0002\u0002\u0002\u000b\u001e\u0003\u0002\u0002",
    "\u0002\r(\u0003\u0002\u0002\u0002\u000f\u0011\t\u0002\u0002\u0002\u0010",
    "\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012",
    "\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0003\u0002\u0002\u0002\u0014\u0015\b\u0002\u0002\u0002\u0015",
    "\u0004\u0003\u0002\u0002\u0002\u0016\u0017\t\u0003\u0002\u0002\u0017",
    "\u0006\u0003\u0002\u0002\u0002\u0018\u0019\u0005\u0005\u0003\u0002\u0019",
    "\u001a\u0005\u0005\u0003\u0002\u001a\u001b\u0005\u0005\u0003\u0002\u001b",
    "\b\u0003\u0002\u0002\u0002\u001c\u001d\t\u0004\u0002\u0002\u001d\n\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0005\t\u0005\u0002\u001f \u0005\t\u0005",
    "\u0002 !\u0005\t\u0005\u0002!%\u0005\t\u0005\u0002\"$\n\u0005\u0002",
    "\u0002#\"\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\f\u0003\u0002\u0002\u0002",
    "\'%\u0003\u0002\u0002\u0002()\u0005\u0007\u0004\u0002)*\u0007/\u0002",
    "\u0002*+\u0005\u000b\u0006\u0002+\u000e\u0003\u0002\u0002\u0002\u0005",
    "\u0002\u0012%\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function Grammar(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

Grammar.prototype = Object.create(antlr4.Lexer.prototype);
Grammar.prototype.constructor = Grammar;

Grammar.EOF = antlr4.Token.EOF;
Grammar.WS = 1;
Grammar.Plate = 2;


Grammar.modeNames = [ "DEFAULT_MODE" ];

Grammar.literalNames = [  ];

Grammar.symbolicNames = [ null, "WS", "Plate" ];

Grammar.ruleNames = [ "WS", "CAPITAL", "LETTER", "DIGIT", "NUMBER", "Plate" ];

Grammar.grammarFileName = "Grammar.g4";



exports.Grammar = Grammar;

