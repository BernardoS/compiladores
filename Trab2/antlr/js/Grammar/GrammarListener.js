// Generated from ./Grammar/Grammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GrammarParser.
function GrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GrammarListener.prototype.constructor = GrammarListener;

// Enter a parse tree produced by GrammarParser#algoritmo.
GrammarListener.prototype.enterAlgoritmo = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#algoritmo.
GrammarListener.prototype.exitAlgoritmo = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#declaracao_algoritmo.
GrammarListener.prototype.enterDeclaracao_algoritmo = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#declaracao_algoritmo.
GrammarListener.prototype.exitDeclaracao_algoritmo = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#var_decl_block.
GrammarListener.prototype.enterVar_decl_block = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#var_decl_block.
GrammarListener.prototype.exitVar_decl_block = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#var_decl.
GrammarListener.prototype.enterVar_decl = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#var_decl.
GrammarListener.prototype.exitVar_decl = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tp_primitivo.
GrammarListener.prototype.enterTp_primitivo = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tp_primitivo.
GrammarListener.prototype.exitTp_primitivo = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tp_matriz.
GrammarListener.prototype.enterTp_matriz = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tp_matriz.
GrammarListener.prototype.exitTp_matriz = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tp_prim_pl.
GrammarListener.prototype.enterTp_prim_pl = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tp_prim_pl.
GrammarListener.prototype.exitTp_prim_pl = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_block.
GrammarListener.prototype.enterStm_block = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_block.
GrammarListener.prototype.exitStm_block = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_list.
GrammarListener.prototype.enterStm_list = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_list.
GrammarListener.prototype.exitStm_list = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_ret.
GrammarListener.prototype.enterStm_ret = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_ret.
GrammarListener.prototype.exitStm_ret = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#lvalue.
GrammarListener.prototype.enterLvalue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#lvalue.
GrammarListener.prototype.exitLvalue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_attr.
GrammarListener.prototype.enterStm_attr = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_attr.
GrammarListener.prototype.exitStm_attr = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_se.
GrammarListener.prototype.enterStm_se = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_se.
GrammarListener.prototype.exitStm_se = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_enquanto.
GrammarListener.prototype.enterStm_enquanto = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_enquanto.
GrammarListener.prototype.exitStm_enquanto = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stm_para.
GrammarListener.prototype.enterStm_para = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stm_para.
GrammarListener.prototype.exitStm_para = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#passo.
GrammarListener.prototype.enterPasso = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#passo.
GrammarListener.prototype.exitPasso = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#expr.
GrammarListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#expr.
GrammarListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#termo.
GrammarListener.prototype.enterTermo = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#termo.
GrammarListener.prototype.exitTermo = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fcall.
GrammarListener.prototype.enterFcall = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fcall.
GrammarListener.prototype.exitFcall = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fargs.
GrammarListener.prototype.enterFargs = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fargs.
GrammarListener.prototype.exitFargs = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#literal.
GrammarListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#literal.
GrammarListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#func_decl.
GrammarListener.prototype.enterFunc_decl = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#func_decl.
GrammarListener.prototype.exitFunc_decl = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fvar_decl.
GrammarListener.prototype.enterFvar_decl = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fvar_decl.
GrammarListener.prototype.exitFvar_decl = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fparams.
GrammarListener.prototype.enterFparams = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fparams.
GrammarListener.prototype.exitFparams = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fparam.
GrammarListener.prototype.enterFparam = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fparam.
GrammarListener.prototype.exitFparam = function(ctx) {
};



exports.GrammarListener = GrammarListener;