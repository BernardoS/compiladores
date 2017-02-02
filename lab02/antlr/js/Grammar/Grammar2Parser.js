// Generated from ./Grammar/Grammar2.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var Grammar2Visitor = require('./Grammar2Visitor').Grammar2Visitor;

var grammarFileName = "Grammar2.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\f$\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0005\u0002\t\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0014\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003\u0003\u0003\u0002\u0003",
    "\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0005\u0006\u0004\u0002",
    "\u0004\u0004\u0007\u0007(\u0002\b\u0003\u0002\u0002\u0002\u0004\u0013",
    "\u0003\u0002\u0002\u0002\u0006\t\u0005\u0004\u0003\u0002\u0007\t\u0003",
    "\u0002\u0002\u0002\b\u0006\u0003\u0002\u0002\u0002\b\u0007\u0003\u0002",
    "\u0002\u0002\t\u0003\u0003\u0002\u0002\u0002\n\u000b\b\u0003\u0001\u0002",
    "\u000b\f\u0007\u0004\u0002\u0002\f\u0014\u0005\u0004\u0003\b\r\u0014",
    "\u0007\u000b\u0002\u0002\u000e\u0014\u0007\n\u0002\u0002\u000f\u0010",
    "\u0007\b\u0002\u0002\u0010\u0011\u0005\u0004\u0003\u0002\u0011\u0012",
    "\u0007\t\u0002\u0002\u0012\u0014\u0003\u0002\u0002\u0002\u0013\n\u0003",
    "\u0002\u0002\u0002\u0013\r\u0003\u0002\u0002\u0002\u0013\u000e\u0003",
    "\u0002\u0002\u0002\u0013\u000f\u0003\u0002\u0002\u0002\u0014 \u0003",
    "\u0002\u0002\u0002\u0015\u0016\f\t\u0002\u0002\u0016\u0017\u0007\u0003",
    "\u0002\u0002\u0017\u001f\u0005\u0004\u0003\n\u0018\u0019\f\u0007\u0002",
    "\u0002\u0019\u001a\t\u0002\u0002\u0002\u001a\u001f\u0005\u0004\u0003",
    "\b\u001b\u001c\f\u0006\u0002\u0002\u001c\u001d\t\u0003\u0002\u0002\u001d",
    "\u001f\u0005\u0004\u0003\u0007\u001e\u0015\u0003\u0002\u0002\u0002\u001e",
    "\u0018\u0003\u0002\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001f",
    "\"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002",
    "\u0002\u0002!\u0005\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\u0006\b\u0013\u001e "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'^'", "'-'", "'*'", "'/'", "'+'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "REAL", 
                      "INTEIRO", "WS" ];

var ruleNames =  [ "eval", "expr" ];

function Grammar2Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Grammar2Parser.prototype = Object.create(antlr4.Parser.prototype);
Grammar2Parser.prototype.constructor = Grammar2Parser;

Object.defineProperty(Grammar2Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Grammar2Parser.EOF = antlr4.Token.EOF;
Grammar2Parser.T__0 = 1;
Grammar2Parser.T__1 = 2;
Grammar2Parser.T__2 = 3;
Grammar2Parser.T__3 = 4;
Grammar2Parser.T__4 = 5;
Grammar2Parser.T__5 = 6;
Grammar2Parser.T__6 = 7;
Grammar2Parser.REAL = 8;
Grammar2Parser.INTEIRO = 9;
Grammar2Parser.WS = 10;

Grammar2Parser.RULE_eval = 0;
Grammar2Parser.RULE_expr = 1;

function EvalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Grammar2Parser.RULE_eval;
    return this;
}

EvalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalContext.prototype.constructor = EvalContext;

EvalContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

EvalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitEval(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Grammar2Parser.EvalContext = EvalContext;

Grammar2Parser.prototype.eval = function() {

    var localctx = new EvalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Grammar2Parser.RULE_eval);
    try {
        this.state = 6;
        switch(this._input.LA(1)) {
        case Grammar2Parser.T__1:
        case Grammar2Parser.T__5:
        case Grammar2Parser.REAL:
        case Grammar2Parser.INTEIRO:
            this.enterOuterAlt(localctx, 1);
            this.state = 4;
            this.expr(0);
            break;
        case Grammar2Parser.EOF:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Grammar2Parser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function RealContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RealContext.prototype = Object.create(ExprContext.prototype);
RealContext.prototype.constructor = RealContext;

Grammar2Parser.RealContext = RealContext;

RealContext.prototype.REAL = function() {
    return this.getToken(Grammar2Parser.REAL, 0);
};
RealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.neg = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegContext.prototype = Object.create(ExprContext.prototype);
NegContext.prototype.constructor = NegContext;

Grammar2Parser.NegContext = NegContext;

NegContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitNeg(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExprContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

Grammar2Parser.AddSubContext = AddSubContext;

AddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(ExprContext.prototype);
IntContext.prototype.constructor = IntContext;

Grammar2Parser.IntContext = IntContext;

IntContext.prototype.INTEIRO = function() {
    return this.getToken(Grammar2Parser.INTEIRO, 0);
};
IntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenContext.prototype = Object.create(ExprContext.prototype);
ParenContext.prototype.constructor = ParenContext;

Grammar2Parser.ParenContext = ParenContext;

ParenContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowContext.prototype = Object.create(ExprContext.prototype);
PowContext.prototype.constructor = PowContext;

Grammar2Parser.PowContext = PowContext;

PowContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
PowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitPow(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExprContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

Grammar2Parser.MulDivContext = MulDivContext;

MulDivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MulDivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Grammar2Visitor ) {
        return visitor.visitMulDiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Grammar2Parser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, Grammar2Parser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        switch(this._input.LA(1)) {
        case Grammar2Parser.T__1:
            localctx = new NegContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 9;
            localctx.neg = this.match(Grammar2Parser.T__1);
            this.state = 10;
            this.expr(6);
            break;
        case Grammar2Parser.INTEIRO:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 11;
            this.match(Grammar2Parser.INTEIRO);
            break;
        case Grammar2Parser.REAL:
            localctx = new RealContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 12;
            this.match(Grammar2Parser.REAL);
            break;
        case Grammar2Parser.T__5:
            localctx = new ParenContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 13;
            this.match(Grammar2Parser.T__5);
            this.state = 14;
            this.expr(0);
            this.state = 15;
            this.match(Grammar2Parser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 30;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 28;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, Grammar2Parser.RULE_expr);
                    this.state = 19;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 20;
                    localctx.op = this.match(Grammar2Parser.T__0);
                    this.state = 21;
                    this.expr(8);
                    break;

                case 2:
                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, Grammar2Parser.RULE_expr);
                    this.state = 22;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 23;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===Grammar2Parser.T__2 || _la===Grammar2Parser.T__3)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 24;
                    this.expr(6);
                    break;

                case 3:
                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, Grammar2Parser.RULE_expr);
                    this.state = 25;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 26;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===Grammar2Parser.T__1 || _la===Grammar2Parser.T__4)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 27;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 32;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


Grammar2Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

Grammar2Parser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.Grammar2Parser = Grammar2Parser;
