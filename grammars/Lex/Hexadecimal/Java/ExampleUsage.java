// Generated from Grammar.g4 by ANTLR 4.5.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

public class ExampleUsage {
    public static void main(String[] args) {
        scan("0x10 0xabc 0x11111111");
    }
    public static void scan(String text) {
        CharStream stream = new ANTLRInputStream(text);
        Lexer lexer = new Grammar(stream);
        for (Token token : lexer.getAllTokens()) {
            System.out.print(token.toString() + " ");
        }
    }
}