import java.io.FileInputStream;
import java.lang.Exception;
import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.Token;

public class Read {
    public static void main(String[] args) {
        try {
            if(args.length < 1){
                System.err.println("File path is missing.");
                return;
            }
            FileInputStream fs = new FileInputStream(args[0]);
            ANTLRInputStream input = new ANTLRInputStream(fs);
            Grammar lexer = new Grammar(input);
            for (Token token : lexer.getAllTokens()) {
                System.out.println(
                    token.getText() + 
                    " -> " + 
                    lexer.VOCABULARY.getSymbolicName(token.getType())
                    );
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}