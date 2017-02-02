// Generated from ./Grammar/Grammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003K\u0129\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0003",
    "\u0002\u0005\u00027\n\u0002\u0003\u0002\u0003\u0002\u0007\u0002;\n\u0002",
    "\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0006\u0004J\n\u0004\r\u0004\u000e\u0004K\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005S\n\u0005\f\u0005",
    "\u000e\u0005V\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005[\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0006\u0007c\n\u0007\r\u0007\u000e\u0007d\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0007\tn\n",
    "\t\f\t\u000e\tq\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n}\n\n\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u0081\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u008a\n\f\f\f\u000e\f\u008d\u000b\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0006\u000e\u0098\n\u000e\r\u000e\u000e\u000e\u0099\u0003",
    "\u000e\u0003\u000e\u0006\u000e\u009e\n\u000e\r\u000e\u000e\u000e\u009f",
    "\u0005\u000e\u00a2\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0006\u000f\u00aa\n\u000f\r\u000f\u000e",
    "\u000f\u00ab\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b7\n",
    "\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00bb\n\u0010\r\u0010\u000e",
    "\u0010\u00bc\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00c3\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00c9\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00e8\n\u0012\f\u0012\u000e\u0012\u00eb\u000b",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00f4\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00f9\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u0100\n\u0015\f\u0015\u000e",
    "\u0015\u0103\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u010e\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0007\u0018\u0116\n\u0018\f\u0018\u000e\u0018\u0119",
    "\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u011e\n",
    "\u0019\f\u0019\u000e\u0019\u0121\u000b\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u0127\n\u001a\u0003\u001a\u0002",
    "\u0003\"\u001b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02\u0002\f\u0003\u0002\t\r\u0003\u0002",
    "\u0012\u0016\u0003\u0002%&\u0004\u0002%&77\u0003\u0002\'(\u0003\u0002",
    ")*\u0003\u0002./\u0003\u000203\u0003\u000246\u0005\u0002?@DEII\u0137",
    "\u00024\u0003\u0002\u0002\u0002\u0004A\u0003\u0002\u0002\u0002\u0006",
    "E\u0003\u0002\u0002\u0002\bO\u0003\u0002\u0002\u0002\n\\\u0003\u0002",
    "\u0002\u0002\f^\u0003\u0002\u0002\u0002\u000ei\u0003\u0002\u0002\u0002",
    "\u0010k\u0003\u0002\u0002\u0002\u0012|\u0003\u0002\u0002\u0002\u0014",
    "~\u0003\u0002\u0002\u0002\u0016\u0084\u0003\u0002\u0002\u0002\u0018",
    "\u008e\u0003\u0002\u0002\u0002\u001a\u0093\u0003\u0002\u0002\u0002\u001c",
    "\u00a5\u0003\u0002\u0002\u0002\u001e\u00af\u0003\u0002\u0002\u0002 ",
    "\u00c0\u0003\u0002\u0002\u0002\"\u00c6\u0003\u0002\u0002\u0002$\u00f3",
    "\u0003\u0002\u0002\u0002&\u00f5\u0003\u0002\u0002\u0002(\u00fc\u0003",
    "\u0002\u0002\u0002*\u0104\u0003\u0002\u0002\u0002,\u0106\u0003\u0002",
    "\u0002\u0002.\u0117\u0003\u0002\u0002\u00020\u011a\u0003\u0002\u0002",
    "\u00022\u0122\u0003\u0002\u0002\u000246\u0005\u0004\u0003\u000257\u0005",
    "\u0006\u0004\u000265\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u0002",
    "78\u0003\u0002\u0002\u00028<\u0005\u0010\t\u00029;\u0005,\u0017\u0002",
    ":9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002",
    "\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002><\u0003\u0002",
    "\u0002\u0002?@\u0007\u0002\u0002\u0003@\u0003\u0003\u0002\u0002\u0002",
    "AB\u0007\u0003\u0002\u0002BC\u0007B\u0002\u0002CD\u0007\u0004\u0002",
    "\u0002D\u0005\u0003\u0002\u0002\u0002EI\u0007\u0005\u0002\u0002FG\u0005",
    "\b\u0005\u0002GH\u0007\u0004\u0002\u0002HJ\u0003\u0002\u0002\u0002I",
    "F\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002KL\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0007\u0006",
    "\u0002\u0002N\u0007\u0003\u0002\u0002\u0002OT\u0007B\u0002\u0002PQ\u0007",
    "\u0007\u0002\u0002QS\u0007B\u0002\u0002RP\u0003\u0002\u0002\u0002SV",
    "\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WZ\u0007\b",
    "\u0002\u0002X[\u0005\n\u0006\u0002Y[\u0005\f\u0007\u0002ZX\u0003\u0002",
    "\u0002\u0002ZY\u0003\u0002\u0002\u0002[\t\u0003\u0002\u0002\u0002\\",
    "]\t\u0002\u0002\u0002]\u000b\u0003\u0002\u0002\u0002^b\u0007\u000e\u0002",
    "\u0002_`\u0007\u000f\u0002\u0002`a\u0007E\u0002\u0002ac\u0007\u0010",
    "\u0002\u0002b_\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002db\u0003",
    "\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002",
    "fg\u0007\u0011\u0002\u0002gh\u0005\u000e\b\u0002h\r\u0003\u0002\u0002",
    "\u0002ij\t\u0003\u0002\u0002j\u000f\u0003\u0002\u0002\u0002ko\u0007",
    "\u0017\u0002\u0002ln\u0005\u0012\n\u0002ml\u0003\u0002\u0002\u0002n",
    "q\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
    "\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u0018",
    "\u0002\u0002s\u0011\u0003\u0002\u0002\u0002t}\u0005\u0018\r\u0002uv",
    "\u0005&\u0014\u0002vw\u0007\u0004\u0002\u0002w}\u0003\u0002\u0002\u0002",
    "x}\u0005\u0014\u000b\u0002y}\u0005\u001a\u000e\u0002z}\u0005\u001c\u000f",
    "\u0002{}\u0005\u001e\u0010\u0002|t\u0003\u0002\u0002\u0002|u\u0003\u0002",
    "\u0002\u0002|x\u0003\u0002\u0002\u0002|y\u0003\u0002\u0002\u0002|z\u0003",
    "\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002}\u0013\u0003\u0002\u0002",
    "\u0002~\u0080\u0007\u0019\u0002\u0002\u007f\u0081\u0005\"\u0012\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0004\u0002\u0002",
    "\u0083\u0015\u0003\u0002\u0002\u0002\u0084\u008b\u0007B\u0002\u0002",
    "\u0085\u0086\u0007\u000f\u0002\u0002\u0086\u0087\u0005\"\u0012\u0002",
    "\u0087\u0088\u0007\u0010\u0002\u0002\u0088\u008a\u0003\u0002\u0002\u0002",
    "\u0089\u0085\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u0017\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0005\u0016\f\u0002\u008f\u0090\u0007A\u0002\u0002\u0090",
    "\u0091\u0005\"\u0012\u0002\u0091\u0092\u0007\u0004\u0002\u0002\u0092",
    "\u0019\u0003\u0002\u0002\u0002\u0093\u0094\u0007\u001a\u0002\u0002\u0094",
    "\u0095\u0005\"\u0012\u0002\u0095\u0097\u0007\u001b\u0002\u0002\u0096",
    "\u0098\u0005\u0012\n\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098",
    "\u0099\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0003\u0002\u0002\u0002\u009a\u00a1\u0003\u0002\u0002\u0002\u009b",
    "\u009d\u0007\u001c\u0002\u0002\u009c\u009e\u0005\u0012\n\u0002\u009d",
    "\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f",
    "\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0",
    "\u00a2\u0003\u0002\u0002\u0002\u00a1\u009b\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0007\u001d\u0002\u0002\u00a4\u001b\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0007\u001e\u0002\u0002\u00a6\u00a7\u0005\"\u0012\u0002\u00a7",
    "\u00a9\u0007\u001f\u0002\u0002\u00a8\u00aa\u0005\u0012\n\u0002\u00a9",
    "\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab",
    "\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007 \u0002\u0002\u00ae",
    "\u001d\u0003\u0002\u0002\u0002\u00af\u00b0\u0007!\u0002\u0002\u00b0",
    "\u00b1\u0005\u0016\f\u0002\u00b1\u00b2\u0007\u0011\u0002\u0002\u00b2",
    "\u00b3\u0005\"\u0012\u0002\u00b3\u00b4\u0007\"\u0002\u0002\u00b4\u00b6",
    "\u0005\"\u0012\u0002\u00b5\u00b7\u0005 \u0011\u0002\u00b6\u00b5\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003",
    "\u0002\u0002\u0002\u00b8\u00ba\u0007\u001f\u0002\u0002\u00b9\u00bb\u0005",
    "\u0012\n\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003",
    "\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf\u0007",
    "#\u0002\u0002\u00bf\u001f\u0003\u0002\u0002\u0002\u00c0\u00c2\u0007",
    "$\u0002\u0002\u00c1\u00c3\t\u0004\u0002\u0002\u00c2\u00c1\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\u0007E\u0002\u0002\u00c5!\u0003\u0002\u0002",
    "\u0002\u00c6\u00c8\b\u0012\u0001\u0002\u00c7\u00c9\t\u0005\u0002\u0002",
    "\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0005$\u0013\u0002",
    "\u00cb\u00e9\u0003\u0002\u0002\u0002\u00cc\u00cd\f\f\u0002\u0002\u00cd",
    "\u00ce\t\u0006\u0002\u0002\u00ce\u00e8\u0005\"\u0012\r\u00cf\u00d0\f",
    "\u000b\u0002\u0002\u00d0\u00d1\t\u0007\u0002\u0002\u00d1\u00e8\u0005",
    "\"\u0012\f\u00d2\u00d3\f\n\u0002\u0002\u00d3\u00d4\u0007+\u0002\u0002",
    "\u00d4\u00e8\u0005\"\u0012\u000b\u00d5\u00d6\f\t\u0002\u0002\u00d6\u00d7",
    "\u0007,\u0002\u0002\u00d7\u00e8\u0005\"\u0012\n\u00d8\u00d9\f\b\u0002",
    "\u0002\u00d9\u00da\u0007-\u0002\u0002\u00da\u00e8\u0005\"\u0012\t\u00db",
    "\u00dc\f\u0007\u0002\u0002\u00dc\u00dd\t\b\u0002\u0002\u00dd\u00e8\u0005",
    "\"\u0012\b\u00de\u00df\f\u0006\u0002\u0002\u00df\u00e0\t\t\u0002\u0002",
    "\u00e0\u00e8\u0005\"\u0012\u0007\u00e1\u00e2\f\u0005\u0002\u0002\u00e2",
    "\u00e3\t\u0004\u0002\u0002\u00e3\u00e8\u0005\"\u0012\u0006\u00e4\u00e5",
    "\f\u0004\u0002\u0002\u00e5\u00e6\t\n\u0002\u0002\u00e6\u00e8\u0005\"",
    "\u0012\u0005\u00e7\u00cc\u0003\u0002\u0002\u0002\u00e7\u00cf\u0003\u0002",
    "\u0002\u0002\u00e7\u00d2\u0003\u0002\u0002\u0002\u00e7\u00d5\u0003\u0002",
    "\u0002\u0002\u00e7\u00d8\u0003\u0002\u0002\u0002\u00e7\u00db\u0003\u0002",
    "\u0002\u0002\u00e7\u00de\u0003\u0002\u0002\u0002\u00e7\u00e1\u0003\u0002",
    "\u0002\u0002\u00e7\u00e4\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002",
    "\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002",
    "\u0002\u0002\u00ea#\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002",
    "\u0002\u0002\u00ec\u00f4\u0005&\u0014\u0002\u00ed\u00f4\u0005\u0016",
    "\f\u0002\u00ee\u00f4\u0005*\u0016\u0002\u00ef\u00f0\u00078\u0002\u0002",
    "\u00f0\u00f1\u0005\"\u0012\u0002\u00f1\u00f2\u00079\u0002\u0002\u00f2",
    "\u00f4\u0003\u0002\u0002\u0002\u00f3\u00ec\u0003\u0002\u0002\u0002\u00f3",
    "\u00ed\u0003\u0002\u0002\u0002\u00f3\u00ee\u0003\u0002\u0002\u0002\u00f3",
    "\u00ef\u0003\u0002\u0002\u0002\u00f4%\u0003\u0002\u0002\u0002\u00f5",
    "\u00f6\u0007B\u0002\u0002\u00f6\u00f8\u00078\u0002\u0002\u00f7\u00f9",
    "\u0005(\u0015\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u00079\u0002\u0002\u00fb\'\u0003\u0002\u0002\u0002\u00fc\u0101\u0005",
    "\"\u0012\u0002\u00fd\u00fe\u0007\u0007\u0002\u0002\u00fe\u0100\u0005",
    "\"\u0012\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u0100\u0103\u0003",
    "\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102)\u0003\u0002\u0002\u0002\u0103\u0101\u0003",
    "\u0002\u0002\u0002\u0104\u0105\t\u000b\u0002\u0002\u0105+\u0003\u0002",
    "\u0002\u0002\u0106\u0107\u0007:\u0002\u0002\u0107\u0108\u0007B\u0002",
    "\u0002\u0108\u0109\u00078\u0002\u0002\u0109\u010a\u00050\u0019\u0002",
    "\u010a\u010d\u00079\u0002\u0002\u010b\u010c\u0007\b\u0002\u0002\u010c",
    "\u010e\u0005\n\u0006\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d",
    "\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f",
    "\u0110\u0005.\u0018\u0002\u0110\u0111\u0005\u0010\t\u0002\u0111-\u0003",
    "\u0002\u0002\u0002\u0112\u0113\u0005\b\u0005\u0002\u0113\u0114\u0007",
    "\u0004\u0002\u0002\u0114\u0116\u0003\u0002\u0002\u0002\u0115\u0112\u0003",
    "\u0002\u0002\u0002\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003",
    "\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118/\u0003",
    "\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u011f\u0005",
    "2\u001a\u0002\u011b\u011c\u0007\u0007\u0002\u0002\u011c\u011e\u0005",
    "2\u001a\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u0121\u0003",
    "\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003",
    "\u0002\u0002\u0002\u01201\u0003\u0002\u0002\u0002\u0121\u011f\u0003",
    "\u0002\u0002\u0002\u0122\u0123\u0007B\u0002\u0002\u0123\u0126\u0007",
    "\b\u0002\u0002\u0124\u0127\u0005\n\u0006\u0002\u0125\u0127\u0005\f\u0007",
    "\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0126\u0125\u0003\u0002\u0002",
    "\u0002\u01273\u0003\u0002\u0002\u0002\u001d6<KTZdo|\u0080\u008b\u0099",
    "\u009f\u00a1\u00ab\u00b6\u00bc\u00c2\u00c8\u00e7\u00e9\u00f3\u00f8\u0101",
    "\u010d\u0117\u011f\u0126"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'algoritmo'", "';'", "'variaveis'", "'fim_variaveis'", 
                     "','", "':'", "'inteiro'", "'real'", "'caractere'", 
                     "'literal'", "'logico'", "'matriz'", "'['", "']'", 
                     "'de'", "'inteiros'", "'reais'", "'caracteres'", "'literais'", 
                     "'logicos'", "'inicio'", "'fim'", "'retorne'", "'se'", 
                     "'entao'", "'senao'", "'fim_se'", "'enquanto'", "'faca'", 
                     "'fim_enquanto'", "'para'", "'ate'", "'fim_para'", 
                     "'passo'", "'+'", "'-'", "'ou'", "'||'", "'e'", "'&&'", 
                     "'|'", "'&'", "'^'", "'='", "'<>'", "'<'", "'<='", 
                     "'>'", "'>='", "'/'", "'*'", "'%'", "'nao'", "'('", 
                     "')'", "'funcao'", null, null, null, null, null, null, 
                     "':='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "WS", "BlockComment", "LineComment", 
                      "PALAVRA_RESERVADA", "LITERAL", "CARACTERE", "ATRIBUICAO", 
                      "IDENTIFICADOR", "SIMBOLO_ESPECIAL", "REAL", "INTEIRO", 
                      "OPERADOR_RELACIONAL", "OPERADOR_ARITIMETICA", "OPERADOR_LOGICO", 
                      "LOGICO", "OPERADOR_BIT_A_BIT", "DESCONHECIDO" ];

var ruleNames =  [ "algoritmo", "declaracao_algoritmo", "var_decl_block", 
                   "var_decl", "tp_primitivo", "tp_matriz", "tp_prim_pl", 
                   "stm_block", "stm_list", "stm_ret", "lvalue", "stm_attr", 
                   "stm_se", "stm_enquanto", "stm_para", "passo", "expr", 
                   "termo", "fcall", "fargs", "literal", "func_decl", "fvar_decl", 
                   "fparams", "fparam" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.T__5 = 6;
GrammarParser.T__6 = 7;
GrammarParser.T__7 = 8;
GrammarParser.T__8 = 9;
GrammarParser.T__9 = 10;
GrammarParser.T__10 = 11;
GrammarParser.T__11 = 12;
GrammarParser.T__12 = 13;
GrammarParser.T__13 = 14;
GrammarParser.T__14 = 15;
GrammarParser.T__15 = 16;
GrammarParser.T__16 = 17;
GrammarParser.T__17 = 18;
GrammarParser.T__18 = 19;
GrammarParser.T__19 = 20;
GrammarParser.T__20 = 21;
GrammarParser.T__21 = 22;
GrammarParser.T__22 = 23;
GrammarParser.T__23 = 24;
GrammarParser.T__24 = 25;
GrammarParser.T__25 = 26;
GrammarParser.T__26 = 27;
GrammarParser.T__27 = 28;
GrammarParser.T__28 = 29;
GrammarParser.T__29 = 30;
GrammarParser.T__30 = 31;
GrammarParser.T__31 = 32;
GrammarParser.T__32 = 33;
GrammarParser.T__33 = 34;
GrammarParser.T__34 = 35;
GrammarParser.T__35 = 36;
GrammarParser.T__36 = 37;
GrammarParser.T__37 = 38;
GrammarParser.T__38 = 39;
GrammarParser.T__39 = 40;
GrammarParser.T__40 = 41;
GrammarParser.T__41 = 42;
GrammarParser.T__42 = 43;
GrammarParser.T__43 = 44;
GrammarParser.T__44 = 45;
GrammarParser.T__45 = 46;
GrammarParser.T__46 = 47;
GrammarParser.T__47 = 48;
GrammarParser.T__48 = 49;
GrammarParser.T__49 = 50;
GrammarParser.T__50 = 51;
GrammarParser.T__51 = 52;
GrammarParser.T__52 = 53;
GrammarParser.T__53 = 54;
GrammarParser.T__54 = 55;
GrammarParser.T__55 = 56;
GrammarParser.WS = 57;
GrammarParser.BlockComment = 58;
GrammarParser.LineComment = 59;
GrammarParser.PALAVRA_RESERVADA = 60;
GrammarParser.LITERAL = 61;
GrammarParser.CARACTERE = 62;
GrammarParser.ATRIBUICAO = 63;
GrammarParser.IDENTIFICADOR = 64;
GrammarParser.SIMBOLO_ESPECIAL = 65;
GrammarParser.REAL = 66;
GrammarParser.INTEIRO = 67;
GrammarParser.OPERADOR_RELACIONAL = 68;
GrammarParser.OPERADOR_ARITIMETICA = 69;
GrammarParser.OPERADOR_LOGICO = 70;
GrammarParser.LOGICO = 71;
GrammarParser.OPERADOR_BIT_A_BIT = 72;
GrammarParser.DESCONHECIDO = 73;

GrammarParser.RULE_algoritmo = 0;
GrammarParser.RULE_declaracao_algoritmo = 1;
GrammarParser.RULE_var_decl_block = 2;
GrammarParser.RULE_var_decl = 3;
GrammarParser.RULE_tp_primitivo = 4;
GrammarParser.RULE_tp_matriz = 5;
GrammarParser.RULE_tp_prim_pl = 6;
GrammarParser.RULE_stm_block = 7;
GrammarParser.RULE_stm_list = 8;
GrammarParser.RULE_stm_ret = 9;
GrammarParser.RULE_lvalue = 10;
GrammarParser.RULE_stm_attr = 11;
GrammarParser.RULE_stm_se = 12;
GrammarParser.RULE_stm_enquanto = 13;
GrammarParser.RULE_stm_para = 14;
GrammarParser.RULE_passo = 15;
GrammarParser.RULE_expr = 16;
GrammarParser.RULE_termo = 17;
GrammarParser.RULE_fcall = 18;
GrammarParser.RULE_fargs = 19;
GrammarParser.RULE_literal = 20;
GrammarParser.RULE_func_decl = 21;
GrammarParser.RULE_fvar_decl = 22;
GrammarParser.RULE_fparams = 23;
GrammarParser.RULE_fparam = 24;

function AlgoritmoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_algoritmo;
    return this;
}

AlgoritmoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlgoritmoContext.prototype.constructor = AlgoritmoContext;

AlgoritmoContext.prototype.declaracao_algoritmo = function() {
    return this.getTypedRuleContext(Declaracao_algoritmoContext,0);
};

AlgoritmoContext.prototype.stm_block = function() {
    return this.getTypedRuleContext(Stm_blockContext,0);
};

AlgoritmoContext.prototype.EOF = function() {
    return this.getToken(GrammarParser.EOF, 0);
};

AlgoritmoContext.prototype.var_decl_block = function() {
    return this.getTypedRuleContext(Var_decl_blockContext,0);
};

AlgoritmoContext.prototype.func_decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_declContext);
    } else {
        return this.getTypedRuleContext(Func_declContext,i);
    }
};

AlgoritmoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAlgoritmo(this);
	}
};

AlgoritmoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAlgoritmo(this);
	}
};




GrammarParser.AlgoritmoContext = AlgoritmoContext;

GrammarParser.prototype.algoritmo = function() {

    var localctx = new AlgoritmoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_algoritmo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.declaracao_algoritmo();
        this.state = 52;
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__2) {
            this.state = 51;
            this.var_decl_block();
        }

        this.state = 54;
        this.stm_block();
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.T__55) {
            this.state = 55;
            this.func_decl();
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(GrammarParser.EOF);
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

function Declaracao_algoritmoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_declaracao_algoritmo;
    return this;
}

Declaracao_algoritmoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaracao_algoritmoContext.prototype.constructor = Declaracao_algoritmoContext;

Declaracao_algoritmoContext.prototype.IDENTIFICADOR = function() {
    return this.getToken(GrammarParser.IDENTIFICADOR, 0);
};

Declaracao_algoritmoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDeclaracao_algoritmo(this);
	}
};

Declaracao_algoritmoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDeclaracao_algoritmo(this);
	}
};




GrammarParser.Declaracao_algoritmoContext = Declaracao_algoritmoContext;

GrammarParser.prototype.declaracao_algoritmo = function() {

    var localctx = new Declaracao_algoritmoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_declaracao_algoritmo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(GrammarParser.T__0);
        this.state = 64;
        this.match(GrammarParser.IDENTIFICADOR);
        this.state = 65;
        this.match(GrammarParser.T__1);
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

function Var_decl_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_var_decl_block;
    return this;
}

Var_decl_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_decl_blockContext.prototype.constructor = Var_decl_blockContext;

Var_decl_blockContext.prototype.var_decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_declContext);
    } else {
        return this.getTypedRuleContext(Var_declContext,i);
    }
};

Var_decl_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterVar_decl_block(this);
	}
};

Var_decl_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitVar_decl_block(this);
	}
};




GrammarParser.Var_decl_blockContext = Var_decl_blockContext;

GrammarParser.prototype.var_decl_block = function() {

    var localctx = new Var_decl_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_var_decl_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(GrammarParser.T__2);
        this.state = 71; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 68;
            this.var_decl();
            this.state = 69;
            this.match(GrammarParser.T__1);
            this.state = 73; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GrammarParser.IDENTIFICADOR);
        this.state = 75;
        this.match(GrammarParser.T__3);
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

function Var_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_var_decl;
    return this;
}

Var_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_declContext.prototype.constructor = Var_declContext;

Var_declContext.prototype.IDENTIFICADOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.IDENTIFICADOR);
    } else {
        return this.getToken(GrammarParser.IDENTIFICADOR, i);
    }
};


Var_declContext.prototype.tp_primitivo = function() {
    return this.getTypedRuleContext(Tp_primitivoContext,0);
};

Var_declContext.prototype.tp_matriz = function() {
    return this.getTypedRuleContext(Tp_matrizContext,0);
};

Var_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterVar_decl(this);
	}
};

Var_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitVar_decl(this);
	}
};




GrammarParser.Var_declContext = Var_declContext;

GrammarParser.prototype.var_decl = function() {

    var localctx = new Var_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_var_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(GrammarParser.IDENTIFICADOR);
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.T__4) {
            this.state = 78;
            this.match(GrammarParser.T__4);
            this.state = 79;
            this.match(GrammarParser.IDENTIFICADOR);
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 85;
        this.match(GrammarParser.T__5);
        this.state = 88;
        switch(this._input.LA(1)) {
        case GrammarParser.T__6:
        case GrammarParser.T__7:
        case GrammarParser.T__8:
        case GrammarParser.T__9:
        case GrammarParser.T__10:
            this.state = 86;
            this.tp_primitivo();
            break;
        case GrammarParser.T__11:
            this.state = 87;
            this.tp_matriz();
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

function Tp_primitivoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_tp_primitivo;
    return this;
}

Tp_primitivoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tp_primitivoContext.prototype.constructor = Tp_primitivoContext;


Tp_primitivoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTp_primitivo(this);
	}
};

Tp_primitivoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTp_primitivo(this);
	}
};




GrammarParser.Tp_primitivoContext = Tp_primitivoContext;

GrammarParser.prototype.tp_primitivo = function() {

    var localctx = new Tp_primitivoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_tp_primitivo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__6) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__9) | (1 << GrammarParser.T__10))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function Tp_matrizContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_tp_matriz;
    return this;
}

Tp_matrizContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tp_matrizContext.prototype.constructor = Tp_matrizContext;

Tp_matrizContext.prototype.tp_prim_pl = function() {
    return this.getTypedRuleContext(Tp_prim_plContext,0);
};

Tp_matrizContext.prototype.INTEIRO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.INTEIRO);
    } else {
        return this.getToken(GrammarParser.INTEIRO, i);
    }
};


Tp_matrizContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTp_matriz(this);
	}
};

Tp_matrizContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTp_matriz(this);
	}
};




GrammarParser.Tp_matrizContext = Tp_matrizContext;

GrammarParser.prototype.tp_matriz = function() {

    var localctx = new Tp_matrizContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_tp_matriz);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(GrammarParser.T__11);
        this.state = 96; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 93;
            this.match(GrammarParser.T__12);
            this.state = 94;
            this.match(GrammarParser.INTEIRO);
            this.state = 95;
            this.match(GrammarParser.T__13);
            this.state = 98; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GrammarParser.T__12);
        this.state = 100;
        this.match(GrammarParser.T__14);
        this.state = 101;
        this.tp_prim_pl();
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

function Tp_prim_plContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_tp_prim_pl;
    return this;
}

Tp_prim_plContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tp_prim_plContext.prototype.constructor = Tp_prim_plContext;


Tp_prim_plContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTp_prim_pl(this);
	}
};

Tp_prim_plContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTp_prim_pl(this);
	}
};




GrammarParser.Tp_prim_plContext = Tp_prim_plContext;

GrammarParser.prototype.tp_prim_pl = function() {

    var localctx = new Tp_prim_plContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GrammarParser.RULE_tp_prim_pl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__15) | (1 << GrammarParser.T__16) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__18) | (1 << GrammarParser.T__19))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function Stm_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_block;
    return this;
}

Stm_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_blockContext.prototype.constructor = Stm_blockContext;

Stm_blockContext.prototype.stm_list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stm_listContext);
    } else {
        return this.getTypedRuleContext(Stm_listContext,i);
    }
};

Stm_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_block(this);
	}
};

Stm_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_block(this);
	}
};




GrammarParser.Stm_blockContext = Stm_blockContext;

GrammarParser.prototype.stm_block = function() {

    var localctx = new Stm_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GrammarParser.RULE_stm_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(GrammarParser.T__20);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__27) | (1 << GrammarParser.T__30))) !== 0) || _la===GrammarParser.IDENTIFICADOR) {
            this.state = 106;
            this.stm_list();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
        this.match(GrammarParser.T__21);
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

function Stm_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_list;
    return this;
}

Stm_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_listContext.prototype.constructor = Stm_listContext;

Stm_listContext.prototype.stm_attr = function() {
    return this.getTypedRuleContext(Stm_attrContext,0);
};

Stm_listContext.prototype.fcall = function() {
    return this.getTypedRuleContext(FcallContext,0);
};

Stm_listContext.prototype.stm_ret = function() {
    return this.getTypedRuleContext(Stm_retContext,0);
};

Stm_listContext.prototype.stm_se = function() {
    return this.getTypedRuleContext(Stm_seContext,0);
};

Stm_listContext.prototype.stm_enquanto = function() {
    return this.getTypedRuleContext(Stm_enquantoContext,0);
};

Stm_listContext.prototype.stm_para = function() {
    return this.getTypedRuleContext(Stm_paraContext,0);
};

Stm_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_list(this);
	}
};

Stm_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_list(this);
	}
};




GrammarParser.Stm_listContext = Stm_listContext;

GrammarParser.prototype.stm_list = function() {

    var localctx = new Stm_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GrammarParser.RULE_stm_list);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.stm_attr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 115;
            this.fcall();
            this.state = 116;
            this.match(GrammarParser.T__1);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 118;
            this.stm_ret();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 119;
            this.stm_se();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 120;
            this.stm_enquanto();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 121;
            this.stm_para();
            break;

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

function Stm_retContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_ret;
    return this;
}

Stm_retContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_retContext.prototype.constructor = Stm_retContext;

Stm_retContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Stm_retContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_ret(this);
	}
};

Stm_retContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_ret(this);
	}
};




GrammarParser.Stm_retContext = Stm_retContext;

GrammarParser.prototype.stm_ret = function() {

    var localctx = new Stm_retContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GrammarParser.RULE_stm_ret);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(GrammarParser.T__22);
        this.state = 126;
        _la = this._input.LA(1);
        if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__52 - 35)) | (1 << (GrammarParser.T__53 - 35)) | (1 << (GrammarParser.LITERAL - 35)) | (1 << (GrammarParser.CARACTERE - 35)) | (1 << (GrammarParser.IDENTIFICADOR - 35)) | (1 << (GrammarParser.REAL - 35)))) !== 0) || _la===GrammarParser.INTEIRO || _la===GrammarParser.LOGICO) {
            this.state = 125;
            this.expr(0);
        }

        this.state = 128;
        this.match(GrammarParser.T__1);
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

function LvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_lvalue;
    return this;
}

LvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvalueContext.prototype.constructor = LvalueContext;

LvalueContext.prototype.IDENTIFICADOR = function() {
    return this.getToken(GrammarParser.IDENTIFICADOR, 0);
};

LvalueContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

LvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLvalue(this);
	}
};

LvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLvalue(this);
	}
};




GrammarParser.LvalueContext = LvalueContext;

GrammarParser.prototype.lvalue = function() {

    var localctx = new LvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GrammarParser.RULE_lvalue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(GrammarParser.IDENTIFICADOR);
        this.state = 137;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 131;
                this.match(GrammarParser.T__12);
                this.state = 132;
                this.expr(0);
                this.state = 133;
                this.match(GrammarParser.T__13); 
            }
            this.state = 139;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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

function Stm_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_attr;
    return this;
}

Stm_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_attrContext.prototype.constructor = Stm_attrContext;

Stm_attrContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

Stm_attrContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Stm_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_attr(this);
	}
};

Stm_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_attr(this);
	}
};




GrammarParser.Stm_attrContext = Stm_attrContext;

GrammarParser.prototype.stm_attr = function() {

    var localctx = new Stm_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, GrammarParser.RULE_stm_attr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.lvalue();
        this.state = 141;
        this.match(GrammarParser.ATRIBUICAO);
        this.state = 142;
        this.expr(0);
        this.state = 143;
        this.match(GrammarParser.T__1);
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

function Stm_seContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_se;
    return this;
}

Stm_seContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_seContext.prototype.constructor = Stm_seContext;

Stm_seContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Stm_seContext.prototype.stm_list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stm_listContext);
    } else {
        return this.getTypedRuleContext(Stm_listContext,i);
    }
};

Stm_seContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_se(this);
	}
};

Stm_seContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_se(this);
	}
};




GrammarParser.Stm_seContext = Stm_seContext;

GrammarParser.prototype.stm_se = function() {

    var localctx = new Stm_seContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, GrammarParser.RULE_stm_se);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(GrammarParser.T__23);
        this.state = 146;
        this.expr(0);
        this.state = 147;
        this.match(GrammarParser.T__24);
        this.state = 149; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 148;
            this.stm_list();
            this.state = 151; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__27) | (1 << GrammarParser.T__30))) !== 0) || _la===GrammarParser.IDENTIFICADOR);
        this.state = 159;
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__25) {
            this.state = 153;
            this.match(GrammarParser.T__25);
            this.state = 155; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 154;
                this.stm_list();
                this.state = 157; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__27) | (1 << GrammarParser.T__30))) !== 0) || _la===GrammarParser.IDENTIFICADOR);
        }

        this.state = 161;
        this.match(GrammarParser.T__26);
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

function Stm_enquantoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_enquanto;
    return this;
}

Stm_enquantoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_enquantoContext.prototype.constructor = Stm_enquantoContext;

Stm_enquantoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Stm_enquantoContext.prototype.stm_list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stm_listContext);
    } else {
        return this.getTypedRuleContext(Stm_listContext,i);
    }
};

Stm_enquantoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_enquanto(this);
	}
};

Stm_enquantoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_enquanto(this);
	}
};




GrammarParser.Stm_enquantoContext = Stm_enquantoContext;

GrammarParser.prototype.stm_enquanto = function() {

    var localctx = new Stm_enquantoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GrammarParser.RULE_stm_enquanto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(GrammarParser.T__27);
        this.state = 164;
        this.expr(0);
        this.state = 165;
        this.match(GrammarParser.T__28);
        this.state = 167; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 166;
            this.stm_list();
            this.state = 169; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__27) | (1 << GrammarParser.T__30))) !== 0) || _la===GrammarParser.IDENTIFICADOR);
        this.state = 171;
        this.match(GrammarParser.T__29);
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

function Stm_paraContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stm_para;
    return this;
}

Stm_paraContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stm_paraContext.prototype.constructor = Stm_paraContext;

Stm_paraContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

Stm_paraContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Stm_paraContext.prototype.passo = function() {
    return this.getTypedRuleContext(PassoContext,0);
};

Stm_paraContext.prototype.stm_list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stm_listContext);
    } else {
        return this.getTypedRuleContext(Stm_listContext,i);
    }
};

Stm_paraContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStm_para(this);
	}
};

Stm_paraContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStm_para(this);
	}
};




GrammarParser.Stm_paraContext = Stm_paraContext;

GrammarParser.prototype.stm_para = function() {

    var localctx = new Stm_paraContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, GrammarParser.RULE_stm_para);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(GrammarParser.T__30);
        this.state = 174;
        this.lvalue();
        this.state = 175;
        this.match(GrammarParser.T__14);
        this.state = 176;
        this.expr(0);
        this.state = 177;
        this.match(GrammarParser.T__31);
        this.state = 178;
        this.expr(0);
        this.state = 180;
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__33) {
            this.state = 179;
            this.passo();
        }

        this.state = 182;
        this.match(GrammarParser.T__28);
        this.state = 184; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 183;
            this.stm_list();
            this.state = 186; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__27) | (1 << GrammarParser.T__30))) !== 0) || _la===GrammarParser.IDENTIFICADOR);
        this.state = 188;
        this.match(GrammarParser.T__32);
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

function PassoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_passo;
    return this;
}

PassoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PassoContext.prototype.constructor = PassoContext;

PassoContext.prototype.INTEIRO = function() {
    return this.getToken(GrammarParser.INTEIRO, 0);
};

PassoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterPasso(this);
	}
};

PassoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitPasso(this);
	}
};




GrammarParser.PassoContext = PassoContext;

GrammarParser.prototype.passo = function() {

    var localctx = new PassoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GrammarParser.RULE_passo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(GrammarParser.T__33);
        this.state = 192;
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__34 || _la===GrammarParser.T__35) {
            this.state = 191;
            _la = this._input.LA(1);
            if(!(_la===GrammarParser.T__34 || _la===GrammarParser.T__35)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 194;
        this.match(GrammarParser.INTEIRO);
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
    this.ruleIndex = GrammarParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.termo = function() {
    return this.getTypedRuleContext(TermoContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitExpr(this);
	}
};



GrammarParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, GrammarParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        _la = this._input.LA(1);
        if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__52 - 35)))) !== 0)) {
            this.state = 197;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__52 - 35)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 200;
        this.termo();
        this._ctx.stop = this._input.LT(-1);
        this.state = 231;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 229;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 202;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 203;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__36 || _la===GrammarParser.T__37)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 204;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 205;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 206;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__38 || _la===GrammarParser.T__39)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 207;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 208;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 209;
                    this.match(GrammarParser.T__40);
                    this.state = 210;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 211;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 212;
                    this.match(GrammarParser.T__41);
                    this.state = 213;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 214;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 215;
                    this.match(GrammarParser.T__42);
                    this.state = 216;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 217;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 218;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__43 || _la===GrammarParser.T__44)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 219;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 221;
                    _la = this._input.LA(1);
                    if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (GrammarParser.T__45 - 46)) | (1 << (GrammarParser.T__46 - 46)) | (1 << (GrammarParser.T__47 - 46)) | (1 << (GrammarParser.T__48 - 46)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 222;
                    this.expr(5);
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 224;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__34 || _la===GrammarParser.T__35)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 225;
                    this.expr(4);
                    break;

                case 9:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 227;
                    _la = this._input.LA(1);
                    if(!(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (GrammarParser.T__49 - 50)) | (1 << (GrammarParser.T__50 - 50)) | (1 << (GrammarParser.T__51 - 50)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 228;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 233;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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

function TermoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_termo;
    return this;
}

TermoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermoContext.prototype.constructor = TermoContext;

TermoContext.prototype.fcall = function() {
    return this.getTypedRuleContext(FcallContext,0);
};

TermoContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

TermoContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

TermoContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

TermoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTermo(this);
	}
};

TermoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTermo(this);
	}
};




GrammarParser.TermoContext = TermoContext;

GrammarParser.prototype.termo = function() {

    var localctx = new TermoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, GrammarParser.RULE_termo);
    try {
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.fcall();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 235;
            this.lvalue();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 236;
            this.literal();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 237;
            this.match(GrammarParser.T__53);
            this.state = 238;
            this.expr(0);
            this.state = 239;
            this.match(GrammarParser.T__54);
            break;

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

function FcallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fcall;
    return this;
}

FcallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FcallContext.prototype.constructor = FcallContext;

FcallContext.prototype.IDENTIFICADOR = function() {
    return this.getToken(GrammarParser.IDENTIFICADOR, 0);
};

FcallContext.prototype.fargs = function() {
    return this.getTypedRuleContext(FargsContext,0);
};

FcallContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFcall(this);
	}
};

FcallContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFcall(this);
	}
};




GrammarParser.FcallContext = FcallContext;

GrammarParser.prototype.fcall = function() {

    var localctx = new FcallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, GrammarParser.RULE_fcall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(GrammarParser.IDENTIFICADOR);
        this.state = 244;
        this.match(GrammarParser.T__53);
        this.state = 246;
        _la = this._input.LA(1);
        if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__52 - 35)) | (1 << (GrammarParser.T__53 - 35)) | (1 << (GrammarParser.LITERAL - 35)) | (1 << (GrammarParser.CARACTERE - 35)) | (1 << (GrammarParser.IDENTIFICADOR - 35)) | (1 << (GrammarParser.REAL - 35)))) !== 0) || _la===GrammarParser.INTEIRO || _la===GrammarParser.LOGICO) {
            this.state = 245;
            this.fargs();
        }

        this.state = 248;
        this.match(GrammarParser.T__54);
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

function FargsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fargs;
    return this;
}

FargsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FargsContext.prototype.constructor = FargsContext;

FargsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

FargsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFargs(this);
	}
};

FargsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFargs(this);
	}
};




GrammarParser.FargsContext = FargsContext;

GrammarParser.prototype.fargs = function() {

    var localctx = new FargsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, GrammarParser.RULE_fargs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.expr(0);
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.T__4) {
            this.state = 251;
            this.match(GrammarParser.T__4);
            this.state = 252;
            this.expr(0);
            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.LITERAL = function() {
    return this.getToken(GrammarParser.LITERAL, 0);
};

LiteralContext.prototype.INTEIRO = function() {
    return this.getToken(GrammarParser.INTEIRO, 0);
};

LiteralContext.prototype.REAL = function() {
    return this.getToken(GrammarParser.REAL, 0);
};

LiteralContext.prototype.CARACTERE = function() {
    return this.getToken(GrammarParser.CARACTERE, 0);
};

LiteralContext.prototype.LOGICO = function() {
    return this.getToken(GrammarParser.LOGICO, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLiteral(this);
	}
};




GrammarParser.LiteralContext = LiteralContext;

GrammarParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, GrammarParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (GrammarParser.LITERAL - 61)) | (1 << (GrammarParser.CARACTERE - 61)) | (1 << (GrammarParser.REAL - 61)) | (1 << (GrammarParser.INTEIRO - 61)) | (1 << (GrammarParser.LOGICO - 61)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function Func_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_func_decl;
    return this;
}

Func_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_declContext.prototype.constructor = Func_declContext;

Func_declContext.prototype.IDENTIFICADOR = function() {
    return this.getToken(GrammarParser.IDENTIFICADOR, 0);
};

Func_declContext.prototype.fparams = function() {
    return this.getTypedRuleContext(FparamsContext,0);
};

Func_declContext.prototype.fvar_decl = function() {
    return this.getTypedRuleContext(Fvar_declContext,0);
};

Func_declContext.prototype.stm_block = function() {
    return this.getTypedRuleContext(Stm_blockContext,0);
};

Func_declContext.prototype.tp_primitivo = function() {
    return this.getTypedRuleContext(Tp_primitivoContext,0);
};

Func_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFunc_decl(this);
	}
};

Func_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFunc_decl(this);
	}
};




GrammarParser.Func_declContext = Func_declContext;

GrammarParser.prototype.func_decl = function() {

    var localctx = new Func_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, GrammarParser.RULE_func_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(GrammarParser.T__55);
        this.state = 261;
        this.match(GrammarParser.IDENTIFICADOR);
        this.state = 262;
        this.match(GrammarParser.T__53);
        this.state = 263;
        this.fparams();
        this.state = 264;
        this.match(GrammarParser.T__54);
        this.state = 267;
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__5) {
            this.state = 265;
            this.match(GrammarParser.T__5);
            this.state = 266;
            this.tp_primitivo();
        }

        this.state = 269;
        this.fvar_decl();
        this.state = 270;
        this.stm_block();
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

function Fvar_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fvar_decl;
    return this;
}

Fvar_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fvar_declContext.prototype.constructor = Fvar_declContext;

Fvar_declContext.prototype.var_decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_declContext);
    } else {
        return this.getTypedRuleContext(Var_declContext,i);
    }
};

Fvar_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFvar_decl(this);
	}
};

Fvar_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFvar_decl(this);
	}
};




GrammarParser.Fvar_declContext = Fvar_declContext;

GrammarParser.prototype.fvar_decl = function() {

    var localctx = new Fvar_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, GrammarParser.RULE_fvar_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.IDENTIFICADOR) {
            this.state = 272;
            this.var_decl();
            this.state = 273;
            this.match(GrammarParser.T__1);
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function FparamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fparams;
    return this;
}

FparamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FparamsContext.prototype.constructor = FparamsContext;

FparamsContext.prototype.fparam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FparamContext);
    } else {
        return this.getTypedRuleContext(FparamContext,i);
    }
};

FparamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFparams(this);
	}
};

FparamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFparams(this);
	}
};




GrammarParser.FparamsContext = FparamsContext;

GrammarParser.prototype.fparams = function() {

    var localctx = new FparamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, GrammarParser.RULE_fparams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.fparam();
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.T__4) {
            this.state = 281;
            this.match(GrammarParser.T__4);
            this.state = 282;
            this.fparam();
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function FparamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fparam;
    return this;
}

FparamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FparamContext.prototype.constructor = FparamContext;

FparamContext.prototype.IDENTIFICADOR = function() {
    return this.getToken(GrammarParser.IDENTIFICADOR, 0);
};

FparamContext.prototype.tp_primitivo = function() {
    return this.getTypedRuleContext(Tp_primitivoContext,0);
};

FparamContext.prototype.tp_matriz = function() {
    return this.getTypedRuleContext(Tp_matrizContext,0);
};

FparamContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFparam(this);
	}
};

FparamContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFparam(this);
	}
};




GrammarParser.FparamContext = FparamContext;

GrammarParser.prototype.fparam = function() {

    var localctx = new FparamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, GrammarParser.RULE_fparam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(GrammarParser.IDENTIFICADOR);
        this.state = 289;
        this.match(GrammarParser.T__5);
        this.state = 292;
        switch(this._input.LA(1)) {
        case GrammarParser.T__6:
        case GrammarParser.T__7:
        case GrammarParser.T__8:
        case GrammarParser.T__9:
        case GrammarParser.T__10:
            this.state = 290;
            this.tp_primitivo();
            break;
        case GrammarParser.T__11:
            this.state = 291;
            this.tp_matriz();
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


GrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 16:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

GrammarParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
		case 7:
			return this.precpred(this._ctx, 3);
		case 8:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.GrammarParser = GrammarParser;
