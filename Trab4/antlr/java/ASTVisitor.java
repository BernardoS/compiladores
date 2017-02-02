import java.io.FileInputStream;
import java.lang.Exception;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import org.antlr.v4.runtime.misc.ParseCancellationException;
import org.antlr.v4.runtime.misc.IntervalSet;

public class ASTVisitor extends GrammarBaseVisitor<String> {
    @Override 
    public String visitFcall(GrammarParser.FcallContext ctx) {
        //System.out.println(visitChildren(ctx));
        return visitChildren(ctx); 
    }
    
    @Override 
    public String visitExpr(GrammarParser.ExprContext ctx) { 
        System.out.println(visitChildren(ctx));
        return visitChildren(ctx); 
    }
    
    @Override
    public String visitTermo(GrammarParser.TermoContext ctx){
        return visitChildren(ctx);
    }
    
    @Override public String visitLiteral(GrammarParser.LiteralContext ctx) {
        return ctx.getText();
    }
	
}