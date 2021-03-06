// Generated from Grammar.g4 by ANTLR 4.5.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Grammar extends Lexer {
	static { RuntimeMetaData.checkVersion("4.5.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, Hex=2;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"WS", "HexDigit", "HexDigitNoZero", "HexNumber", "Eight", "Hex"
	};

	private static final String[] _LITERAL_NAMES = {
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "WS", "Hex"
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


	public Grammar(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 5:
			return Hex_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean Hex_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return getText().length() == 10;
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\48\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\6\2\21\n\2\r\2\16\2\22\3\2"+
		"\3\2\3\3\5\3\30\n\3\3\4\5\4\33\n\4\3\5\3\5\7\5\37\n\5\f\5\16\5\"\13\5"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\7\7\62\n\7\f"+
		"\7\16\7\65\13\7\3\7\3\7\2\2\b\3\3\5\2\7\2\t\2\13\2\r\4\3\2\5\5\2\13\f"+
		"\17\17\"\"\4\2\62;Ch\4\2\63;Ch\66\2\3\3\2\2\2\2\r\3\2\2\2\3\20\3\2\2\2"+
		"\5\27\3\2\2\2\7\32\3\2\2\2\t\34\3\2\2\2\13#\3\2\2\2\r,\3\2\2\2\17\21\t"+
		"\2\2\2\20\17\3\2\2\2\21\22\3\2\2\2\22\20\3\2\2\2\22\23\3\2\2\2\23\24\3"+
		"\2\2\2\24\25\b\2\2\2\25\4\3\2\2\2\26\30\t\3\2\2\27\26\3\2\2\2\30\6\3\2"+
		"\2\2\31\33\t\4\2\2\32\31\3\2\2\2\33\b\3\2\2\2\34 \5\7\4\2\35\37\5\5\3"+
		"\2\36\35\3\2\2\2\37\"\3\2\2\2 \36\3\2\2\2 !\3\2\2\2!\n\3\2\2\2\" \3\2"+
		"\2\2#$\5\5\3\2$%\5\5\3\2%&\5\5\3\2&\'\5\5\3\2\'(\5\5\3\2()\5\5\3\2)*\5"+
		"\5\3\2*+\5\5\3\2+\f\3\2\2\2,-\7\62\2\2-.\7z\2\2./\3\2\2\2/\63\5\7\4\2"+
		"\60\62\5\5\3\2\61\60\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2"+
		"\64\66\3\2\2\2\65\63\3\2\2\2\66\67\6\7\2\2\67\16\3\2\2\2\b\2\22\27\32"+
		" \63\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}