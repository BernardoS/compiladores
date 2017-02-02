// Generated from Grammar.g4 by ANTLR 4.5.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, WS=38, BlockComment=39, 
		LineComment=40, PALAVRA_RESERVADA=41, OPERADOR_NAO=42, OPERADOR_RELACIONAL=43, 
		OPERADOR_ARITIMETICA=44, OPERADOR_SOMA=45, OPERADOR_SUB=46, OPERADOR_LOGICO=47, 
		OPERADOR_BIT_A_BIT=48, LOGICO=49, LITERAL=50, CARACTERE=51, ATRIBUICAO=52, 
		IDENTIFICADOR=53, SIMBOLO_ESPECIAL=54, REAL=55, INTEIRO=56, DESCONHECIDO=57;
	public static final int
		RULE_algoritmo = 0, RULE_declaracao_algoritmo = 1, RULE_var_decl_block = 2, 
		RULE_var_decl = 3, RULE_tp_primitivo = 4, RULE_tp_matriz = 5, RULE_tp_prim_pl = 6, 
		RULE_stm_block = 7, RULE_stm_list = 8, RULE_stm_ret = 9, RULE_lvalue = 10, 
		RULE_stm_attr = 11, RULE_stm_se = 12, RULE_stm_enquanto = 13, RULE_stm_para = 14, 
		RULE_passo = 15, RULE_expr = 16, RULE_op = 17, RULE_termo = 18, RULE_fcall = 19, 
		RULE_fargs = 20, RULE_literal = 21, RULE_func_decl = 22, RULE_fvar_decl = 23, 
		RULE_fparams = 24, RULE_fparam = 25;
	public static final String[] ruleNames = {
		"algoritmo", "declaracao_algoritmo", "var_decl_block", "var_decl", "tp_primitivo", 
		"tp_matriz", "tp_prim_pl", "stm_block", "stm_list", "stm_ret", "lvalue", 
		"stm_attr", "stm_se", "stm_enquanto", "stm_para", "passo", "expr", "op", 
		"termo", "fcall", "fargs", "literal", "func_decl", "fvar_decl", "fparams", 
		"fparam"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'algoritmo'", "';'", "'variaveis'", "'fim_variaveis'", "','", "':'", 
		"'inteiro'", "'real'", "'caractere'", "'literal'", "'logico'", "'matriz'", 
		"'['", "']'", "'de'", "'inteiros'", "'reais'", "'caracteres'", "'literais'", 
		"'logicos'", "'inicio'", "'fim'", "'retorne'", "'se'", "'entao'", "'senao'", 
		"'fim_se'", "'enquanto'", "'faca'", "'fim_enquanto'", "'para'", "'ate'", 
		"'fim_para'", "'passo'", "'('", "')'", "'funcao'", null, null, null, null, 
		"'nao'", null, null, "'+'", "'-'", null, null, null, null, null, "':='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, "WS", "BlockComment", "LineComment", "PALAVRA_RESERVADA", 
		"OPERADOR_NAO", "OPERADOR_RELACIONAL", "OPERADOR_ARITIMETICA", "OPERADOR_SOMA", 
		"OPERADOR_SUB", "OPERADOR_LOGICO", "OPERADOR_BIT_A_BIT", "LOGICO", "LITERAL", 
		"CARACTERE", "ATRIBUICAO", "IDENTIFICADOR", "SIMBOLO_ESPECIAL", "REAL", 
		"INTEIRO", "DESCONHECIDO"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class AlgoritmoContext extends ParserRuleContext {
		public Declaracao_algoritmoContext declaracao_algoritmo() {
			return getRuleContext(Declaracao_algoritmoContext.class,0);
		}
		public Stm_blockContext stm_block() {
			return getRuleContext(Stm_blockContext.class,0);
		}
		public TerminalNode EOF() { return getToken(GrammarParser.EOF, 0); }
		public Var_decl_blockContext var_decl_block() {
			return getRuleContext(Var_decl_blockContext.class,0);
		}
		public List<Func_declContext> func_decl() {
			return getRuleContexts(Func_declContext.class);
		}
		public Func_declContext func_decl(int i) {
			return getRuleContext(Func_declContext.class,i);
		}
		public AlgoritmoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_algoritmo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterAlgoritmo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitAlgoritmo(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitAlgoritmo(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AlgoritmoContext algoritmo() throws RecognitionException {
		AlgoritmoContext _localctx = new AlgoritmoContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_algoritmo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			declaracao_algoritmo();
			setState(54);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(53);
				var_decl_block();
				}
			}

			setState(56);
			stm_block();
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__36) {
				{
				{
				setState(57);
				func_decl();
				}
				}
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(63);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Declaracao_algoritmoContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(GrammarParser.IDENTIFICADOR, 0); }
		public Declaracao_algoritmoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracao_algoritmo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterDeclaracao_algoritmo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitDeclaracao_algoritmo(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitDeclaracao_algoritmo(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Declaracao_algoritmoContext declaracao_algoritmo() throws RecognitionException {
		Declaracao_algoritmoContext _localctx = new Declaracao_algoritmoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_declaracao_algoritmo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(T__0);
			setState(66);
			match(IDENTIFICADOR);
			setState(67);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_decl_blockContext extends ParserRuleContext {
		public List<Var_declContext> var_decl() {
			return getRuleContexts(Var_declContext.class);
		}
		public Var_declContext var_decl(int i) {
			return getRuleContext(Var_declContext.class,i);
		}
		public Var_decl_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_decl_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterVar_decl_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitVar_decl_block(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitVar_decl_block(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Var_decl_blockContext var_decl_block() throws RecognitionException {
		Var_decl_blockContext _localctx = new Var_decl_blockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_var_decl_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(T__2);
			setState(73); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(70);
				var_decl();
				setState(71);
				match(T__1);
				}
				}
				setState(75); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==IDENTIFICADOR );
			setState(77);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_declContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFICADOR() { return getTokens(GrammarParser.IDENTIFICADOR); }
		public TerminalNode IDENTIFICADOR(int i) {
			return getToken(GrammarParser.IDENTIFICADOR, i);
		}
		public Tp_primitivoContext tp_primitivo() {
			return getRuleContext(Tp_primitivoContext.class,0);
		}
		public Tp_matrizContext tp_matriz() {
			return getRuleContext(Tp_matrizContext.class,0);
		}
		public Var_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_decl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterVar_decl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitVar_decl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitVar_decl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Var_declContext var_decl() throws RecognitionException {
		Var_declContext _localctx = new Var_declContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_var_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(IDENTIFICADOR);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(80);
				match(T__4);
				setState(81);
				match(IDENTIFICADOR);
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
			match(T__5);
			setState(90);
			switch (_input.LA(1)) {
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
				{
				setState(88);
				tp_primitivo();
				}
				break;
			case T__11:
				{
				setState(89);
				tp_matriz();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Tp_primitivoContext extends ParserRuleContext {
		public Tp_primitivoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tp_primitivo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterTp_primitivo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitTp_primitivo(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitTp_primitivo(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Tp_primitivoContext tp_primitivo() throws RecognitionException {
		Tp_primitivoContext _localctx = new Tp_primitivoContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_tp_primitivo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0)) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Tp_matrizContext extends ParserRuleContext {
		public Tp_prim_plContext tp_prim_pl() {
			return getRuleContext(Tp_prim_plContext.class,0);
		}
		public List<TerminalNode> INTEIRO() { return getTokens(GrammarParser.INTEIRO); }
		public TerminalNode INTEIRO(int i) {
			return getToken(GrammarParser.INTEIRO, i);
		}
		public Tp_matrizContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tp_matriz; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterTp_matriz(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitTp_matriz(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitTp_matriz(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Tp_matrizContext tp_matriz() throws RecognitionException {
		Tp_matrizContext _localctx = new Tp_matrizContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_tp_matriz);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(T__11);
			setState(98); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(95);
				match(T__12);
				setState(96);
				match(INTEIRO);
				setState(97);
				match(T__13);
				}
				}
				setState(100); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__12 );
			setState(102);
			match(T__14);
			setState(103);
			tp_prim_pl();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Tp_prim_plContext extends ParserRuleContext {
		public Tp_prim_plContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tp_prim_pl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterTp_prim_pl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitTp_prim_pl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitTp_prim_pl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Tp_prim_plContext tp_prim_pl() throws RecognitionException {
		Tp_prim_plContext _localctx = new Tp_prim_plContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tp_prim_pl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19))) != 0)) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_blockContext extends ParserRuleContext {
		public List<Stm_listContext> stm_list() {
			return getRuleContexts(Stm_listContext.class);
		}
		public Stm_listContext stm_list(int i) {
			return getRuleContext(Stm_listContext.class,i);
		}
		public Stm_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_block(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_block(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_blockContext stm_block() throws RecognitionException {
		Stm_blockContext _localctx = new Stm_blockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_stm_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(T__20);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__23) | (1L << T__27) | (1L << T__30) | (1L << IDENTIFICADOR))) != 0)) {
				{
				{
				setState(108);
				stm_list();
				}
				}
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(114);
			match(T__21);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_listContext extends ParserRuleContext {
		public Stm_attrContext stm_attr() {
			return getRuleContext(Stm_attrContext.class,0);
		}
		public FcallContext fcall() {
			return getRuleContext(FcallContext.class,0);
		}
		public Stm_retContext stm_ret() {
			return getRuleContext(Stm_retContext.class,0);
		}
		public Stm_seContext stm_se() {
			return getRuleContext(Stm_seContext.class,0);
		}
		public Stm_enquantoContext stm_enquanto() {
			return getRuleContext(Stm_enquantoContext.class,0);
		}
		public Stm_paraContext stm_para() {
			return getRuleContext(Stm_paraContext.class,0);
		}
		public Stm_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_list(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_list(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_listContext stm_list() throws RecognitionException {
		Stm_listContext _localctx = new Stm_listContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_stm_list);
		try {
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				stm_attr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				fcall();
				setState(118);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(120);
				stm_ret();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(121);
				stm_se();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(122);
				stm_enquanto();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(123);
				stm_para();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_retContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Stm_retContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_ret; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_ret(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_ret(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_ret(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_retContext stm_ret() throws RecognitionException {
		Stm_retContext _localctx = new Stm_retContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_stm_ret);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			match(T__22);
			setState(128);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__34) | (1L << OPERADOR_NAO) | (1L << OPERADOR_SOMA) | (1L << OPERADOR_SUB) | (1L << LOGICO) | (1L << LITERAL) | (1L << CARACTERE) | (1L << IDENTIFICADOR) | (1L << REAL) | (1L << INTEIRO))) != 0)) {
				{
				setState(127);
				expr(0);
				}
			}

			setState(130);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LvalueContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(GrammarParser.IDENTIFICADOR, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public LvalueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lvalue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterLvalue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitLvalue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitLvalue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LvalueContext lvalue() throws RecognitionException {
		LvalueContext _localctx = new LvalueContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_lvalue);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(IDENTIFICADOR);
			setState(139);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(133);
					match(T__12);
					setState(134);
					expr(0);
					setState(135);
					match(T__13);
					}
					} 
				}
				setState(141);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_attrContext extends ParserRuleContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public TerminalNode ATRIBUICAO() { return getToken(GrammarParser.ATRIBUICAO, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Stm_attrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_attr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_attr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_attr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_attr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_attrContext stm_attr() throws RecognitionException {
		Stm_attrContext _localctx = new Stm_attrContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_stm_attr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			lvalue();
			setState(143);
			match(ATRIBUICAO);
			setState(144);
			expr(0);
			setState(145);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_seContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<Stm_listContext> stm_list() {
			return getRuleContexts(Stm_listContext.class);
		}
		public Stm_listContext stm_list(int i) {
			return getRuleContext(Stm_listContext.class,i);
		}
		public Stm_seContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_se; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_se(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_se(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_se(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_seContext stm_se() throws RecognitionException {
		Stm_seContext _localctx = new Stm_seContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_stm_se);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(T__23);
			setState(148);
			expr(0);
			setState(149);
			match(T__24);
			setState(151); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(150);
				stm_list();
				}
				}
				setState(153); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__23) | (1L << T__27) | (1L << T__30) | (1L << IDENTIFICADOR))) != 0) );
			setState(161);
			_la = _input.LA(1);
			if (_la==T__25) {
				{
				setState(155);
				match(T__25);
				setState(157); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(156);
					stm_list();
					}
					}
					setState(159); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__23) | (1L << T__27) | (1L << T__30) | (1L << IDENTIFICADOR))) != 0) );
				}
			}

			setState(163);
			match(T__26);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_enquantoContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<Stm_listContext> stm_list() {
			return getRuleContexts(Stm_listContext.class);
		}
		public Stm_listContext stm_list(int i) {
			return getRuleContext(Stm_listContext.class,i);
		}
		public Stm_enquantoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_enquanto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_enquanto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_enquanto(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_enquanto(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_enquantoContext stm_enquanto() throws RecognitionException {
		Stm_enquantoContext _localctx = new Stm_enquantoContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_stm_enquanto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(T__27);
			setState(166);
			expr(0);
			setState(167);
			match(T__28);
			setState(169); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(168);
				stm_list();
				}
				}
				setState(171); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__23) | (1L << T__27) | (1L << T__30) | (1L << IDENTIFICADOR))) != 0) );
			setState(173);
			match(T__29);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stm_paraContext extends ParserRuleContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public PassoContext passo() {
			return getRuleContext(PassoContext.class,0);
		}
		public List<Stm_listContext> stm_list() {
			return getRuleContexts(Stm_listContext.class);
		}
		public Stm_listContext stm_list(int i) {
			return getRuleContext(Stm_listContext.class,i);
		}
		public Stm_paraContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm_para; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterStm_para(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitStm_para(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitStm_para(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Stm_paraContext stm_para() throws RecognitionException {
		Stm_paraContext _localctx = new Stm_paraContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_stm_para);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			match(T__30);
			setState(176);
			lvalue();
			setState(177);
			match(T__14);
			setState(178);
			expr(0);
			setState(179);
			match(T__31);
			setState(180);
			expr(0);
			setState(182);
			_la = _input.LA(1);
			if (_la==T__33) {
				{
				setState(181);
				passo();
				}
			}

			setState(184);
			match(T__28);
			setState(186); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(185);
				stm_list();
				}
				}
				setState(188); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__23) | (1L << T__27) | (1L << T__30) | (1L << IDENTIFICADOR))) != 0) );
			setState(190);
			match(T__32);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PassoContext extends ParserRuleContext {
		public TerminalNode INTEIRO() { return getToken(GrammarParser.INTEIRO, 0); }
		public PassoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_passo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterPasso(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitPasso(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitPasso(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PassoContext passo() throws RecognitionException {
		PassoContext _localctx = new PassoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_passo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(T__33);
			setState(194);
			_la = _input.LA(1);
			if (_la==OPERADOR_SOMA || _la==OPERADOR_SUB) {
				{
				setState(193);
				_la = _input.LA(1);
				if ( !(_la==OPERADOR_SOMA || _la==OPERADOR_SUB) ) {
				_errHandler.recoverInline(this);
				} else {
					consume();
				}
				}
			}

			setState(196);
			match(INTEIRO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public Token unary;
		public TermoContext termo() {
			return getRuleContext(TermoContext.class,0);
		}
		public TerminalNode OPERADOR_NAO() { return getToken(GrammarParser.OPERADOR_NAO, 0); }
		public TerminalNode OPERADOR_SOMA() { return getToken(GrammarParser.OPERADOR_SOMA, 0); }
		public TerminalNode OPERADOR_SUB() { return getToken(GrammarParser.OPERADOR_SUB, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public OpContext op() {
			return getRuleContext(OpContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 32;
		enterRecursionRule(_localctx, 32, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(200);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPERADOR_NAO) | (1L << OPERADOR_SOMA) | (1L << OPERADOR_SUB))) != 0)) {
				{
				setState(199);
				((ExprContext)_localctx).unary = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPERADOR_NAO) | (1L << OPERADOR_SOMA) | (1L << OPERADOR_SUB))) != 0)) ) {
					((ExprContext)_localctx).unary = (Token)_errHandler.recoverInline(this);
				} else {
					consume();
				}
				}
			}

			setState(202);
			termo();
			}
			_ctx.stop = _input.LT(-1);
			setState(210);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(204);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(205);
					op();
					setState(206);
					expr(3);
					}
					} 
				}
				setState(212);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class OpContext extends ParserRuleContext {
		public TerminalNode OPERADOR_LOGICO() { return getToken(GrammarParser.OPERADOR_LOGICO, 0); }
		public TerminalNode OPERADOR_BIT_A_BIT() { return getToken(GrammarParser.OPERADOR_BIT_A_BIT, 0); }
		public TerminalNode OPERADOR_RELACIONAL() { return getToken(GrammarParser.OPERADOR_RELACIONAL, 0); }
		public TerminalNode OPERADOR_ARITIMETICA() { return getToken(GrammarParser.OPERADOR_ARITIMETICA, 0); }
		public TerminalNode OPERADOR_SOMA() { return getToken(GrammarParser.OPERADOR_SOMA, 0); }
		public TerminalNode OPERADOR_SUB() { return getToken(GrammarParser.OPERADOR_SUB, 0); }
		public OpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_op; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterOp(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitOp(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitOp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OpContext op() throws RecognitionException {
		OpContext _localctx = new OpContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPERADOR_RELACIONAL) | (1L << OPERADOR_ARITIMETICA) | (1L << OPERADOR_SOMA) | (1L << OPERADOR_SUB) | (1L << OPERADOR_LOGICO) | (1L << OPERADOR_BIT_A_BIT))) != 0)) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermoContext extends ParserRuleContext {
		public FcallContext fcall() {
			return getRuleContext(FcallContext.class,0);
		}
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TermoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterTermo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitTermo(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitTermo(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TermoContext termo() throws RecognitionException {
		TermoContext _localctx = new TermoContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_termo);
		try {
			setState(222);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(215);
				fcall();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(216);
				lvalue();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(217);
				literal();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(218);
				match(T__34);
				setState(219);
				expr(0);
				setState(220);
				match(T__35);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FcallContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(GrammarParser.IDENTIFICADOR, 0); }
		public FargsContext fargs() {
			return getRuleContext(FargsContext.class,0);
		}
		public FcallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fcall; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterFcall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitFcall(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitFcall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FcallContext fcall() throws RecognitionException {
		FcallContext _localctx = new FcallContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_fcall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			match(IDENTIFICADOR);
			setState(225);
			match(T__34);
			setState(227);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__34) | (1L << OPERADOR_NAO) | (1L << OPERADOR_SOMA) | (1L << OPERADOR_SUB) | (1L << LOGICO) | (1L << LITERAL) | (1L << CARACTERE) | (1L << IDENTIFICADOR) | (1L << REAL) | (1L << INTEIRO))) != 0)) {
				{
				setState(226);
				fargs();
				}
			}

			setState(229);
			match(T__35);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FargsContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public FargsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fargs; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterFargs(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitFargs(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitFargs(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FargsContext fargs() throws RecognitionException {
		FargsContext _localctx = new FargsContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_fargs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			expr(0);
			setState(236);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(232);
				match(T__4);
				setState(233);
				expr(0);
				}
				}
				setState(238);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode LITERAL() { return getToken(GrammarParser.LITERAL, 0); }
		public TerminalNode INTEIRO() { return getToken(GrammarParser.INTEIRO, 0); }
		public TerminalNode REAL() { return getToken(GrammarParser.REAL, 0); }
		public TerminalNode CARACTERE() { return getToken(GrammarParser.CARACTERE, 0); }
		public TerminalNode LOGICO() { return getToken(GrammarParser.LOGICO, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LOGICO) | (1L << LITERAL) | (1L << CARACTERE) | (1L << REAL) | (1L << INTEIRO))) != 0)) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_declContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(GrammarParser.IDENTIFICADOR, 0); }
		public Fvar_declContext fvar_decl() {
			return getRuleContext(Fvar_declContext.class,0);
		}
		public Stm_blockContext stm_block() {
			return getRuleContext(Stm_blockContext.class,0);
		}
		public FparamsContext fparams() {
			return getRuleContext(FparamsContext.class,0);
		}
		public Tp_primitivoContext tp_primitivo() {
			return getRuleContext(Tp_primitivoContext.class,0);
		}
		public Func_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_decl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterFunc_decl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitFunc_decl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitFunc_decl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Func_declContext func_decl() throws RecognitionException {
		Func_declContext _localctx = new Func_declContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_func_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(T__36);
			setState(242);
			match(IDENTIFICADOR);
			setState(243);
			match(T__34);
			setState(245);
			_la = _input.LA(1);
			if (_la==IDENTIFICADOR) {
				{
				setState(244);
				fparams();
				}
			}

			setState(247);
			match(T__35);
			setState(250);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(248);
				match(T__5);
				setState(249);
				tp_primitivo();
				}
			}

			setState(252);
			fvar_decl();
			setState(253);
			stm_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Fvar_declContext extends ParserRuleContext {
		public List<Var_declContext> var_decl() {
			return getRuleContexts(Var_declContext.class);
		}
		public Var_declContext var_decl(int i) {
			return getRuleContext(Var_declContext.class,i);
		}
		public Fvar_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fvar_decl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterFvar_decl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitFvar_decl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitFvar_decl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Fvar_declContext fvar_decl() throws RecognitionException {
		Fvar_declContext _localctx = new Fvar_declContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_fvar_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFICADOR) {
				{
				{
				setState(255);
				var_decl();
				setState(256);
				match(T__1);
				}
				}
				setState(262);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FparamsContext extends ParserRuleContext {
		public List<FparamContext> fparam() {
			return getRuleContexts(FparamContext.class);
		}
		public FparamContext fparam(int i) {
			return getRuleContext(FparamContext.class,i);
		}
		public FparamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fparams; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterFparams(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitFparams(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitFparams(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FparamsContext fparams() throws RecognitionException {
		FparamsContext _localctx = new FparamsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_fparams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(263);
			fparam();
			setState(268);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(264);
				match(T__4);
				setState(265);
				fparam();
				}
				}
				setState(270);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FparamContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(GrammarParser.IDENTIFICADOR, 0); }
		public Tp_primitivoContext tp_primitivo() {
			return getRuleContext(Tp_primitivoContext.class,0);
		}
		public Tp_matrizContext tp_matriz() {
			return getRuleContext(Tp_matrizContext.class,0);
		}
		public FparamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fparam; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).enterFparam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GrammarListener ) ((GrammarListener)listener).exitFparam(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GrammarVisitor ) return ((GrammarVisitor<? extends T>)visitor).visitFparam(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FparamContext fparam() throws RecognitionException {
		FparamContext _localctx = new FparamContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_fparam);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(IDENTIFICADOR);
			setState(272);
			match(T__5);
			setState(275);
			switch (_input.LA(1)) {
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
				{
				setState(273);
				tp_primitivo();
				}
				break;
			case T__11:
				{
				setState(274);
				tp_matriz();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 16:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3;\u0118\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\3\2\3\2\5\29\n\2\3\2\3\2\7\2=\n\2\f\2\16\2@\13\2"+
		"\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\6\4L\n\4\r\4\16\4M\3\4\3\4\3"+
		"\5\3\5\3\5\7\5U\n\5\f\5\16\5X\13\5\3\5\3\5\3\5\5\5]\n\5\3\6\3\6\3\7\3"+
		"\7\3\7\3\7\6\7e\n\7\r\7\16\7f\3\7\3\7\3\7\3\b\3\b\3\t\3\t\7\tp\n\t\f\t"+
		"\16\ts\13\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\177\n\n\3\13\3"+
		"\13\5\13\u0083\n\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\7\f\u008c\n\f\f\f\16"+
		"\f\u008f\13\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\6\16\u009a\n\16"+
		"\r\16\16\16\u009b\3\16\3\16\6\16\u00a0\n\16\r\16\16\16\u00a1\5\16\u00a4"+
		"\n\16\3\16\3\16\3\17\3\17\3\17\3\17\6\17\u00ac\n\17\r\17\16\17\u00ad\3"+
		"\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u00b9\n\20\3\20\3\20"+
		"\6\20\u00bd\n\20\r\20\16\20\u00be\3\20\3\20\3\21\3\21\5\21\u00c5\n\21"+
		"\3\21\3\21\3\22\3\22\5\22\u00cb\n\22\3\22\3\22\3\22\3\22\3\22\3\22\7\22"+
		"\u00d3\n\22\f\22\16\22\u00d6\13\22\3\23\3\23\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\5\24\u00e1\n\24\3\25\3\25\3\25\5\25\u00e6\n\25\3\25\3\25\3"+
		"\26\3\26\3\26\7\26\u00ed\n\26\f\26\16\26\u00f0\13\26\3\27\3\27\3\30\3"+
		"\30\3\30\3\30\5\30\u00f8\n\30\3\30\3\30\3\30\5\30\u00fd\n\30\3\30\3\30"+
		"\3\30\3\31\3\31\3\31\7\31\u0105\n\31\f\31\16\31\u0108\13\31\3\32\3\32"+
		"\3\32\7\32\u010d\n\32\f\32\16\32\u0110\13\32\3\33\3\33\3\33\3\33\5\33"+
		"\u0116\n\33\3\33\2\3\"\34\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&"+
		"(*,.\60\62\64\2\b\3\2\t\r\3\2\22\26\3\2/\60\4\2,,/\60\3\2-\62\4\2\63\65"+
		"9:\u011e\2\66\3\2\2\2\4C\3\2\2\2\6G\3\2\2\2\bQ\3\2\2\2\n^\3\2\2\2\f`\3"+
		"\2\2\2\16k\3\2\2\2\20m\3\2\2\2\22~\3\2\2\2\24\u0080\3\2\2\2\26\u0086\3"+
		"\2\2\2\30\u0090\3\2\2\2\32\u0095\3\2\2\2\34\u00a7\3\2\2\2\36\u00b1\3\2"+
		"\2\2 \u00c2\3\2\2\2\"\u00c8\3\2\2\2$\u00d7\3\2\2\2&\u00e0\3\2\2\2(\u00e2"+
		"\3\2\2\2*\u00e9\3\2\2\2,\u00f1\3\2\2\2.\u00f3\3\2\2\2\60\u0106\3\2\2\2"+
		"\62\u0109\3\2\2\2\64\u0111\3\2\2\2\668\5\4\3\2\679\5\6\4\28\67\3\2\2\2"+
		"89\3\2\2\29:\3\2\2\2:>\5\20\t\2;=\5.\30\2<;\3\2\2\2=@\3\2\2\2><\3\2\2"+
		"\2>?\3\2\2\2?A\3\2\2\2@>\3\2\2\2AB\7\2\2\3B\3\3\2\2\2CD\7\3\2\2DE\7\67"+
		"\2\2EF\7\4\2\2F\5\3\2\2\2GK\7\5\2\2HI\5\b\5\2IJ\7\4\2\2JL\3\2\2\2KH\3"+
		"\2\2\2LM\3\2\2\2MK\3\2\2\2MN\3\2\2\2NO\3\2\2\2OP\7\6\2\2P\7\3\2\2\2QV"+
		"\7\67\2\2RS\7\7\2\2SU\7\67\2\2TR\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2\2"+
		"WY\3\2\2\2XV\3\2\2\2Y\\\7\b\2\2Z]\5\n\6\2[]\5\f\7\2\\Z\3\2\2\2\\[\3\2"+
		"\2\2]\t\3\2\2\2^_\t\2\2\2_\13\3\2\2\2`d\7\16\2\2ab\7\17\2\2bc\7:\2\2c"+
		"e\7\20\2\2da\3\2\2\2ef\3\2\2\2fd\3\2\2\2fg\3\2\2\2gh\3\2\2\2hi\7\21\2"+
		"\2ij\5\16\b\2j\r\3\2\2\2kl\t\3\2\2l\17\3\2\2\2mq\7\27\2\2np\5\22\n\2o"+
		"n\3\2\2\2ps\3\2\2\2qo\3\2\2\2qr\3\2\2\2rt\3\2\2\2sq\3\2\2\2tu\7\30\2\2"+
		"u\21\3\2\2\2v\177\5\30\r\2wx\5(\25\2xy\7\4\2\2y\177\3\2\2\2z\177\5\24"+
		"\13\2{\177\5\32\16\2|\177\5\34\17\2}\177\5\36\20\2~v\3\2\2\2~w\3\2\2\2"+
		"~z\3\2\2\2~{\3\2\2\2~|\3\2\2\2~}\3\2\2\2\177\23\3\2\2\2\u0080\u0082\7"+
		"\31\2\2\u0081\u0083\5\"\22\2\u0082\u0081\3\2\2\2\u0082\u0083\3\2\2\2\u0083"+
		"\u0084\3\2\2\2\u0084\u0085\7\4\2\2\u0085\25\3\2\2\2\u0086\u008d\7\67\2"+
		"\2\u0087\u0088\7\17\2\2\u0088\u0089\5\"\22\2\u0089\u008a\7\20\2\2\u008a"+
		"\u008c\3\2\2\2\u008b\u0087\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b\3\2"+
		"\2\2\u008d\u008e\3\2\2\2\u008e\27\3\2\2\2\u008f\u008d\3\2\2\2\u0090\u0091"+
		"\5\26\f\2\u0091\u0092\7\66\2\2\u0092\u0093\5\"\22\2\u0093\u0094\7\4\2"+
		"\2\u0094\31\3\2\2\2\u0095\u0096\7\32\2\2\u0096\u0097\5\"\22\2\u0097\u0099"+
		"\7\33\2\2\u0098\u009a\5\22\n\2\u0099\u0098\3\2\2\2\u009a\u009b\3\2\2\2"+
		"\u009b\u0099\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u00a3\3\2\2\2\u009d\u009f"+
		"\7\34\2\2\u009e\u00a0\5\22\n\2\u009f\u009e\3\2\2\2\u00a0\u00a1\3\2\2\2"+
		"\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00a4\3\2\2\2\u00a3\u009d"+
		"\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a6\7\35\2\2"+
		"\u00a6\33\3\2\2\2\u00a7\u00a8\7\36\2\2\u00a8\u00a9\5\"\22\2\u00a9\u00ab"+
		"\7\37\2\2\u00aa\u00ac\5\22\n\2\u00ab\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2"+
		"\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b0"+
		"\7 \2\2\u00b0\35\3\2\2\2\u00b1\u00b2\7!\2\2\u00b2\u00b3\5\26\f\2\u00b3"+
		"\u00b4\7\21\2\2\u00b4\u00b5\5\"\22\2\u00b5\u00b6\7\"\2\2\u00b6\u00b8\5"+
		"\"\22\2\u00b7\u00b9\5 \21\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"\u00ba\3\2\2\2\u00ba\u00bc\7\37\2\2\u00bb\u00bd\5\22\n\2\u00bc\u00bb\3"+
		"\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf"+
		"\u00c0\3\2\2\2\u00c0\u00c1\7#\2\2\u00c1\37\3\2\2\2\u00c2\u00c4\7$\2\2"+
		"\u00c3\u00c5\t\4\2\2\u00c4\u00c3\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c6"+
		"\3\2\2\2\u00c6\u00c7\7:\2\2\u00c7!\3\2\2\2\u00c8\u00ca\b\22\1\2\u00c9"+
		"\u00cb\t\5\2\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2"+
		"\2\2\u00cc\u00cd\5&\24\2\u00cd\u00d4\3\2\2\2\u00ce\u00cf\f\4\2\2\u00cf"+
		"\u00d0\5$\23\2\u00d0\u00d1\5\"\22\5\u00d1\u00d3\3\2\2\2\u00d2\u00ce\3"+
		"\2\2\2\u00d3\u00d6\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5"+
		"#\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d7\u00d8\t\6\2\2\u00d8%\3\2\2\2\u00d9"+
		"\u00e1\5(\25\2\u00da\u00e1\5\26\f\2\u00db\u00e1\5,\27\2\u00dc\u00dd\7"+
		"%\2\2\u00dd\u00de\5\"\22\2\u00de\u00df\7&\2\2\u00df\u00e1\3\2\2\2\u00e0"+
		"\u00d9\3\2\2\2\u00e0\u00da\3\2\2\2\u00e0\u00db\3\2\2\2\u00e0\u00dc\3\2"+
		"\2\2\u00e1\'\3\2\2\2\u00e2\u00e3\7\67\2\2\u00e3\u00e5\7%\2\2\u00e4\u00e6"+
		"\5*\26\2\u00e5\u00e4\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7"+
		"\u00e8\7&\2\2\u00e8)\3\2\2\2\u00e9\u00ee\5\"\22\2\u00ea\u00eb\7\7\2\2"+
		"\u00eb\u00ed\5\"\22\2\u00ec\u00ea\3\2\2\2\u00ed\u00f0\3\2\2\2\u00ee\u00ec"+
		"\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef+\3\2\2\2\u00f0\u00ee\3\2\2\2\u00f1"+
		"\u00f2\t\7\2\2\u00f2-\3\2\2\2\u00f3\u00f4\7\'\2\2\u00f4\u00f5\7\67\2\2"+
		"\u00f5\u00f7\7%\2\2\u00f6\u00f8\5\62\32\2\u00f7\u00f6\3\2\2\2\u00f7\u00f8"+
		"\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fc\7&\2\2\u00fa\u00fb\7\b\2\2\u00fb"+
		"\u00fd\5\n\6\2\u00fc\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fe\3\2"+
		"\2\2\u00fe\u00ff\5\60\31\2\u00ff\u0100\5\20\t\2\u0100/\3\2\2\2\u0101\u0102"+
		"\5\b\5\2\u0102\u0103\7\4\2\2\u0103\u0105\3\2\2\2\u0104\u0101\3\2\2\2\u0105"+
		"\u0108\3\2\2\2\u0106\u0104\3\2\2\2\u0106\u0107\3\2\2\2\u0107\61\3\2\2"+
		"\2\u0108\u0106\3\2\2\2\u0109\u010e\5\64\33\2\u010a\u010b\7\7\2\2\u010b"+
		"\u010d\5\64\33\2\u010c\u010a\3\2\2\2\u010d\u0110\3\2\2\2\u010e\u010c\3"+
		"\2\2\2\u010e\u010f\3\2\2\2\u010f\63\3\2\2\2\u0110\u010e\3\2\2\2\u0111"+
		"\u0112\7\67\2\2\u0112\u0115\7\b\2\2\u0113\u0116\5\n\6\2\u0114\u0116\5"+
		"\f\7\2\u0115\u0113\3\2\2\2\u0115\u0114\3\2\2\2\u0116\65\3\2\2\2\358>M"+
		"V\\fq~\u0082\u008d\u009b\u00a1\u00a3\u00ad\u00b8\u00be\u00c4\u00ca\u00d4"+
		"\u00e0\u00e5\u00ee\u00f7\u00fc\u0106\u010e\u0115";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}