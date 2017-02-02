// Generated from ./Grammar/Grammar2.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\fD\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0006\t+\n\t\r\t\u000e\t,\u0003",
    "\n\u0003\n\u0003\n\u0006\n2\n\n\r\n\u000e\n3\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\f<\n\f\u0003\r\u0006",
    "\r?\n\r\r\r\u000e\r@\u0003\r\u0003\r\u0002\u0002\u000e\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\u0002\u0013",
    "\u0002\u0015\n\u0017\u000b\u0019\f\u0003\u0002\u0006\u0003\u00022;\u0004",
    "\u0002ZZzz\u0005\u00022;CHch\u0005\u0002\u000b\u000b\u000f\u000f\"\"",
    "E\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0003\u001b\u0003\u0002\u0002\u0002\u0005\u001d\u0003\u0002\u0002",
    "\u0002\u0007\u001f\u0003\u0002\u0002\u0002\t!\u0003\u0002\u0002\u0002",
    "\u000b#\u0003\u0002\u0002\u0002\r%\u0003\u0002\u0002\u0002\u000f\'\u0003",
    "\u0002\u0002\u0002\u0011*\u0003\u0002\u0002\u0002\u0013.\u0003\u0002",
    "\u0002\u0002\u00155\u0003\u0002\u0002\u0002\u0017;\u0003\u0002\u0002",
    "\u0002\u0019>\u0003\u0002\u0002\u0002\u001b\u001c\u0007`\u0002\u0002",
    "\u001c\u0004\u0003\u0002\u0002\u0002\u001d\u001e\u0007/\u0002\u0002",
    "\u001e\u0006\u0003\u0002\u0002\u0002\u001f \u0007,\u0002\u0002 \b\u0003",
    "\u0002\u0002\u0002!\"\u00071\u0002\u0002\"\n\u0003\u0002\u0002\u0002",
    "#$\u0007-\u0002\u0002$\f\u0003\u0002\u0002\u0002%&\u0007*\u0002\u0002",
    "&\u000e\u0003\u0002\u0002\u0002\'(\u0007+\u0002\u0002(\u0010\u0003\u0002",
    "\u0002\u0002)+\t\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+,\u0003",
    "\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002",
    "-\u0012\u0003\u0002\u0002\u0002./\u00072\u0002\u0002/1\t\u0003\u0002",
    "\u000202\t\u0004\u0002\u000210\u0003\u0002\u0002\u000223\u0003\u0002",
    "\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u00024\u0014",
    "\u0003\u0002\u0002\u000256\u0005\u0011\t\u000267\u00070\u0002\u0002",
    "78\u0005\u0011\t\u00028\u0016\u0003\u0002\u0002\u00029<\u0005\u0011",
    "\t\u0002:<\u0005\u0013\n\u0002;9\u0003\u0002\u0002\u0002;:\u0003\u0002",
    "\u0002\u0002<\u0018\u0003\u0002\u0002\u0002=?\t\u0005\u0002\u0002>=",
    "\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\b\r\u0002",
    "\u0002C\u001a\u0003\u0002\u0002\u0002\u0007\u0002,3;@\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function Grammar2Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

Grammar2Lexer.prototype = Object.create(antlr4.Lexer.prototype);
Grammar2Lexer.prototype.constructor = Grammar2Lexer;

Grammar2Lexer.EOF = antlr4.Token.EOF;
Grammar2Lexer.T__0 = 1;
Grammar2Lexer.T__1 = 2;
Grammar2Lexer.T__2 = 3;
Grammar2Lexer.T__3 = 4;
Grammar2Lexer.T__4 = 5;
Grammar2Lexer.T__5 = 6;
Grammar2Lexer.T__6 = 7;
Grammar2Lexer.REAL = 8;
Grammar2Lexer.INTEIRO = 9;
Grammar2Lexer.WS = 10;


Grammar2Lexer.modeNames = [ "DEFAULT_MODE" ];

Grammar2Lexer.literalNames = [ null, "'^'", "'-'", "'*'", "'/'", "'+'", 
                               "'('", "')'" ];

Grammar2Lexer.symbolicNames = [ null, null, null, null, null, null, null, 
                                null, "REAL", "INTEIRO", "WS" ];

Grammar2Lexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                            "T__6", "DECIMAL", "HEX", "REAL", "INTEIRO", 
                            "WS" ];

Grammar2Lexer.grammarFileName = "Grammar2.g4";



exports.Grammar2Lexer = Grammar2Lexer;

