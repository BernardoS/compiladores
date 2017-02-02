import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.TerminalNode;
import org.antlr.v4.runtime.Token;
import java.util.HashMap;
import java.util.List;
import java.util.ListIterator;

public class SemanticChecker extends GrammarNullVisitor<Void>{
    private int IDENTIFICADOR = GrammarParser.IDENTIFICADOR;
	private HashMap<String, HashMap<String, ParserRuleContext>> functions = new HashMap<>();
	
	public SemanticChecker(){
	    super();
	    //put the primitive functions on the functions map.
	    functions.put("leia",new HashMap<String, ParserRuleContext>());
	    functions.put("imprima",new HashMap<String, ParserRuleContext>());
	    functions.put("main",new HashMap<String, ParserRuleContext>());
	    functions.get("leia").put("0", new GrammarParser.Func_declContext(null,0));
	    functions.get("imprima").put("0", new GrammarParser.Func_declContext(null,0));
	}
	
	@Override 
    public Void visitAlgoritmo(GrammarParser.AlgoritmoContext ctx) {
        if(ctx.var_decl_block() != null){
            //vist declaration block.
            visit(ctx.var_decl_block());
        }
        for(GrammarParser.Func_declContext function : ctx.func_decl()){
            //visit each function declaration.
            add(func_vars(function),function.IDENTIFICADOR().getText(),functions);
        }
        
        for(GrammarParser.Stm_listContext stm_list : ctx.stm_block().stm_list()){
            verify("main",stm_list);
        }
        
        for(GrammarParser.Func_declContext function : ctx.func_decl()){
            String name = function.IDENTIFICADOR().getText();
            for(GrammarParser.Stm_listContext stm_list : function.stm_block().stm_list()){
                verify(name,stm_list);
            }
        }
        return null;
    }
    
    //Verify statement for type and scope.
    public void verify(String scope, GrammarParser.Stm_listContext ctx){
        if(ctx.stm_ret() != null)
            return;
        else if(ctx.stm_attr() != null){
            String lvalue_type = getType(scope, ctx.stm_attr().lvalue());
            String rvalue_type = verifyType(scope,ctx.stm_attr().expr());
            verifyAttr(lvalue_type, rvalue_type,ctx.stm_attr().getStart());
        }
        else if(ctx.fcall() != null){
            verifyScope(ctx.fcall());
            verifyArity(ctx.fcall());
            verifyTypeFunc(ctx.fcall());
        }
        else if(ctx.stm_se() != null)
            for(GrammarParser.Stm_listContext stm_list : ctx.stm_se().stm_list())
                verify(scope, stm_list);
        else if(ctx.stm_enquanto() != null)
            for(GrammarParser.Stm_listContext stm_list : ctx.stm_enquanto().stm_list())
                verify(scope, stm_list);
        else if(ctx.stm_para() != null)
            for(GrammarParser.Stm_listContext stm_list : ctx.stm_para().stm_list())
                verify(scope, stm_list);
    }
    
    public void verifyAttr(String ltype, String rtype,Token attr){
        if(ltype.equals("real") && rtype.equals("inteiro")){
            return;
        }
        if(!ltype.equals(rtype)){
            throw new SemanticErrorException("Semantic error on line "+ attr.getLine()+ 
                ": there's no auto cast from " + rtype + " to " + ltype);
        }
    }
    
    //Verify expressions type and returns it if no mismatch was found.
    public String verifyType(String scope, GrammarParser.ExprContext ctx){
        String currentType = new String();
        if(ctx.termo() != null){
            currentType = getType(scope,ctx.termo());
            if(ctx.unary != null){
                verifyExpr(currentType,ctx.unary);
            }
        }
        
        if(!ctx.expr().isEmpty()){
            String typeR = verifyType(scope, ctx.expr().get(1));
            String typeL = verifyType(scope, ctx.expr().get(0));
            currentType = verifyExpr(typeR, typeL, ctx.op());
        }
        return currentType;
    }
    
    //verify an unary operator eg.: +1, -1, nao verdadeiro
    public void verifyExpr(String currentType, Token unary){
        int op = unary.getType();
        if(op == GrammarParser.OPERADOR_SOMA || op == GrammarParser.OPERADOR_SUB){
            if(!currentType.equals("inteiro") && !currentType.equals("real")){
                throw new SemanticErrorException("Semantic error on line "+ unary.getLine()+
                ": invalid increment/decrement operator for given type");
            }
        }
        if(op == GrammarParser.OPERADOR_NAO){
            if(!currentType.equals("logico")){
                throw new SemanticErrorException("Semantic error on line "+ unary.getLine()+
                ": invalid negation operator for given type");
            }
        }
    }
    
    //verify if a given expression is valid.
    public String verifyExpr(String typeR, String typeL, GrammarParser.OpContext ctx){
        if(ctx.OPERADOR_LOGICO() != null){
            if(typeR.equals(typeL) && typeR.equals("logico")){
                return typeR;
            }
            throw new SemanticErrorException(ctx, typeR, typeL, "type mismatch");
        }
        if(ctx.OPERADOR_RELACIONAL() != null){
            if(typeR.equals(typeL)){
                return "logico";
            }
            throw new SemanticErrorException(ctx, typeR, typeL, "type mismatch");
        }
        if(ctx.OPERADOR_ARITIMETICA() != null || ctx.OPERADOR_SOMA() != null || ctx.OPERADOR_SUB() != null){
            return arithmeticReturnType(typeR,typeL,ctx);
        }
        throw new SemanticErrorException("bit-to-bit operator not treated yet.");
    }
    
    public String arithmeticReturnType(String typeR, String typeL, GrammarParser.OpContext ctx){
        if(typeR.equals("logico") || typeR.equals("literal") || typeR.equals("caractere")){
            throw new SemanticErrorException(ctx,typeR,typeL,"arithmetic mismatch");
        }
        if(typeL.equals("logico") || typeL.equals("literal") || typeL.equals("caractere")){
            throw new SemanticErrorException(ctx,typeL,typeR,"arithmetic mismatch");
        }
        if(typeR.equals("inteiro") && typeL.equals("inteiro")){
            return "inteiro";
        }
        return "real";
    }
    
    //Get termos type.
    public String getType(String scope,GrammarParser.TermoContext ctx){
        if(ctx.fcall() != null){
            verifyScope(ctx.fcall());
            verifyArity(ctx.fcall());
            verifyTypeFunc(ctx.fcall());
            return getType(scope, ctx.fcall());
        }
        if(ctx.lvalue() != null){
            return getType(scope,ctx.lvalue());
        }
        if(ctx.literal() != null){
            return getType(scope, ctx.literal());
        }
        if(ctx.expr() != null){
            return verifyType(scope,ctx.expr());
        }
        return null;
    }
    
    //Get literals type.
    public String getType(String scope, GrammarParser.LiteralContext ctx){
        switch (ctx.getStop().getType()) {
            case GrammarParser.LITERAL: return "literal";
            case GrammarParser.INTEIRO: return "inteiro";
            case GrammarParser.REAL:    return "real";
            case GrammarParser.CARACTERE:   return "caractere";
            case GrammarParser.LOGICO:  return "logico";
        }
        return null;
    }
    
    //Get left values type.
    public String getType(String scope, GrammarParser.LvalueContext ctx){
        ParserRuleContext variable = verifyScope(scope, ctx);
        return variable.getStop().getText();
    }
    
    //Get function calls type.
    public String getType(String scope, GrammarParser.FcallContext ctx){
        GrammarParser.Func_declContext function = (GrammarParser.Func_declContext) verifyScope(ctx);
        if(function.tp_primitivo() != null){
            return function.tp_primitivo().getText();
        }
        
        String name = ctx.IDENTIFICADOR().getText();
        if(name.equals("leia")){
            return "inteiro";
        }
        if(name.equals("imprima")){
            return null;
        }
        return null;
    }
    
    //Verify left values scope.
    public ParserRuleContext verifyScope(String scope, GrammarParser.LvalueContext ctx){
        String name = ctx.IDENTIFICADOR().getText();
        
        if(functions.get("main").containsKey(name)){
            return functions.get("main").get(name);
        }
        if(functions.get(scope).containsKey(name)){
           return  functions.get(scope).get(name);
        }
        throw new SemanticErrorException(ctx,name,"variable not declared");   
    }
    
    //Verify function calls scope.
    public ParserRuleContext verifyScope(GrammarParser.FcallContext ctx){
        String funcName = ctx.IDENTIFICADOR().getText();
        if(functions.containsKey(funcName)){
           return  functions.get(funcName).get("0");
        }
        throw new SemanticErrorException(ctx,funcName,"function not declared");
    }
    
    public Void verifyTypeFunc(GrammarParser.FcallContext ctx){
        String funcName = ctx.IDENTIFICADOR().getText();
        GrammarParser.Func_declContext function =(GrammarParser.Func_declContext) functions.get(funcName).get("0");
        if(function.fparams() != null){
            List<GrammarParser.FparamContext> params = function.fparams().fparam();
            List<GrammarParser.ExprContext> realArgs = ctx.fargs().expr();
            for(int i = 0; i < params.size();i++){
                String arg_type = params.get(i).tp_primitivo().getText();
                String real_type = verifyType(null,realArgs.get(i));
               
                if(arg_type.equals("real") && real_type.equals("inteiro")){
                    return null;
                }
                
                if(!arg_type.equals(real_type)){
                    throw new SemanticErrorException(ctx,funcName,"fCall type mismatch");
                }
            }
        }
        return null;
        
    }    
    
    public Void verifyArity(GrammarParser.FcallContext ctx){
        String funcName = ctx.IDENTIFICADOR().getText();
        
        // imprima tem aridade variavel
        if(funcName.equals("imprima"))
            return null;
        
        int arity = 0;
        
        if(ctx.fargs() != null){
            for(GrammarParser.ExprContext expr : ctx.fargs().expr())
                arity++;
        }
        
        if(funcName.equals("leia")){
            if(arity != 0){
                throw new SemanticErrorException(ctx,funcName,"incorrect arity",arity,0);
            }
        }else{
            HashMap<String, ParserRuleContext> function = functions.get(funcName);
            
            if(function.size()>0){ // funcao recebe argumentos
                int realArity = function.size()-1;
                if(realArity != arity){
                    throw new SemanticErrorException(ctx,funcName,"incorrect arity",arity, realArity);
                }
            }else{ // funcao nao recebe argumento nenhum
                if(arity != 0){
                    throw new SemanticErrorException(ctx,funcName,"incorrect arity",arity,0);
                }   
            }
        }
        
        return null;
    }
    
    @Override
    public Void visitVar_decl_block(GrammarParser.Var_decl_blockContext ctx) {
        for(GrammarParser.Var_declContext var_decl : ctx.var_decl()){
            for (TerminalNode token : var_decl.IDENTIFICADOR()){
                add(var_decl, token.getText(), functions.get("main"));
            }
        }
        return null; 
    }
    
    private HashMap<String, ParserRuleContext> func_vars(GrammarParser.Func_declContext ctx){
        HashMap<String, ParserRuleContext>func_vars = new HashMap<>();
        
        //add parameters to the function variables map.
        if(ctx.fparams() != null){
            for(GrammarParser.FparamContext param : ctx.fparams().fparam()){
                add(param,param.IDENTIFICADOR().getText(),func_vars);
            }
        }
        
        //add function variables to the function variables map.
        for(GrammarParser.Var_declContext var_decl : ctx.fvar_decl().var_decl()){
            for (TerminalNode token : var_decl.IDENTIFICADOR()){
                add(var_decl, token.getText(), func_vars);
            }
        }
        add(ctx,"0",func_vars);
        return func_vars;
    }
    
    private void add(ParserRuleContext ctx, String key, HashMap<String, ParserRuleContext> map){
        if(map.containsKey(key)){
            ParserRuleContext ele = map.get(key);
            throw new SemanticErrorException(ctx,ele,key,"variable redeclaration");
        }else{
            map.put(key,ctx);
        }
    }
    
    private void add(HashMap<String, ParserRuleContext> vars, String key, HashMap<String,HashMap<String, ParserRuleContext>> map){
        if(map.containsKey(key)){
            HashMap<String, ParserRuleContext> ele = map.get(key);
            if(ele.get("0").getStart() != null){
                throw new SemanticErrorException(vars.get("0"),ele.get("0"),key,"function redeclaration");
            }
            throw new SemanticErrorException(vars.get("0"),key,"primitive redeclaration");
        }else{
            map.put(key,vars);
        }
    }
}
