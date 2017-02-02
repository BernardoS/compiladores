import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.RuleContext;
import org.antlr.v4.runtime.tree.TerminalNode;
import java.util.HashMap;
import java.util.ArrayList;

public class CustomListener extends GrammarBaseListener {
    private HashMap<String,ParserRuleContext> vars = new HashMap<>();
    private HashMap<String,HashMap<String,ParserRuleContext>> funcs = new HashMap<>();
    
    private int IDENTIFICADOR = GrammarParser.IDENTIFICADOR;

    @Override 
    public void exitAlgoritmo(GrammarParser.AlgoritmoContext ctx) {
        //throw new SemanticErrorException();
        System.out.println(vars);
    }

    @Override 
    public void enterVar_decl(GrammarParser.Var_declContext ctx) {
        for (TerminalNode token : ctx.getTokens(IDENTIFICADOR)){
            addVar(token.getText(),ctx);
        }
    }
    
    @Override
    public void enterFunc_decl(GrammarParser.Func_declContext ctx){
        ctx.getTokens(GrammarParser.RULE_fparams);
    }
    
    private void addVar(String key, ParserRuleContext ctx){
        if(vars.get(key) != null){
            throw new SemanticErrorException(
                ctx.getStart().getLine()+": variable '"+ 
                key +
                "' was already declared on line "+ ctx.getStart().getLine()
                );
        }else{
            vars.put(key,ctx);
        }
    }
}