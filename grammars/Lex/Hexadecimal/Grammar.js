// Generated from Grammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u00048\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0006\u0002\u0011\n\u0002\r\u0002\u000e\u0002\u0012",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003",
    "\u0004\u0005\u0004\u001b\n\u0004\u0003\u0005\u0003\u0005\u0007\u0005",
    "\u001f\n\u0005\f\u0005\u000e\u0005\"\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u00072\n\u0007\f\u0007\u000e\u00075\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0002\u0002\b\u0003\u0003\u0005\u0002\u0007\u0002\t\u0002\u000b",
    "\u0002\r\u0004\u0003\u0002\u0005\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u0004\u00022;Ch\u0004\u00023;Ch6\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0003\u0010\u0003\u0002\u0002\u0002",
    "\u0005\u0017\u0003\u0002\u0002\u0002\u0007\u001a\u0003\u0002\u0002\u0002",
    "\t\u001c\u0003\u0002\u0002\u0002\u000b#\u0003\u0002\u0002\u0002\r,\u0003",
    "\u0002\u0002\u0002\u000f\u0011\t\u0002\u0002\u0002\u0010\u000f\u0003",
    "\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0010\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0014\u0003",
    "\u0002\u0002\u0002\u0014\u0015\b\u0002\u0002\u0002\u0015\u0004\u0003",
    "\u0002\u0002\u0002\u0016\u0018\t\u0003\u0002\u0002\u0017\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0006\u0003\u0002\u0002\u0002\u0019\u001b\t",
    "\u0004\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\b\u0003",
    "\u0002\u0002\u0002\u001c \u0005\u0007\u0004\u0002\u001d\u001f\u0005",
    "\u0005\u0003\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\"\u0003",
    "\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!\n\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0005",
    "\u0005\u0003\u0002$%\u0005\u0005\u0003\u0002%&\u0005\u0005\u0003\u0002",
    "&\'\u0005\u0005\u0003\u0002\'(\u0005\u0005\u0003\u0002()\u0005\u0005",
    "\u0003\u0002)*\u0005\u0005\u0003\u0002*+\u0005\u0005\u0003\u0002+\f",
    "\u0003\u0002\u0002\u0002,-\u00072\u0002\u0002-.\u0007z\u0002\u0002.",
    "/\u0003\u0002\u0002\u0002/3\u0005\u0007\u0004\u000202\u0005\u0005\u0003",
    "\u000210\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u000253\u0003",
    "\u0002\u0002\u000267\u0006\u0007\u0002\u00027\u000e\u0003\u0002\u0002",
    "\u0002\b\u0002\u0012\u0017\u001a 3\u0003\b\u0002\u0002"].join("");


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
Grammar.Hex = 2;


Grammar.modeNames = [ "DEFAULT_MODE" ];

Grammar.literalNames = [  ];

Grammar.symbolicNames = [ null, "WS", "Hex" ];

Grammar.ruleNames = [ "WS", "HexDigit", "HexDigitNoZero", "HexNumber", "Eight", 
                      "Hex" ];

Grammar.grammarFileName = "Grammar.g4";


Grammar.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 5:
			return this.Hex_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

Grammar.prototype.Hex_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.text.length == 10;
		default:
			throw "No predicate with index:" + predIndex;
	}
};



exports.Grammar = Grammar;

