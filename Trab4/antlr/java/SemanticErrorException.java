import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.Token;

public class SemanticErrorException extends java.lang.RuntimeException{
  
  private ParserRuleContext original;
  private ParserRuleContext err;
  String type;
  String scope;
  String currentType;
  String newType;
  Integer callFuncArity;
  Integer declaredFuncArity;
  
  public SemanticErrorException() {
    super();
  }
  
  public SemanticErrorException(String s) {
    super("Semantic error on line "+s);
  }
  
  public SemanticErrorException(ParserRuleContext err, ParserRuleContext original,String scope,String type){
    super();
    this.original = original;
    this.err = err;
    this.scope = scope;
    this.type = type;
  }
  
  public SemanticErrorException(ParserRuleContext err, String scope, String type){
    super();
    this.err = err;
    this.scope = scope;
    this.type = type;
  }
  
  public SemanticErrorException(ParserRuleContext err, String scope, String type, Integer callFuncArity, Integer declaredFuncArity){
    super();
    this.err = err;
    this.scope = scope;
    this.type = type;
    this.callFuncArity = callFuncArity;
    this.declaredFuncArity = declaredFuncArity;
  }
  
  public SemanticErrorException(ParserRuleContext err, String currentType, String newType, String type){
    super();
    this.err = err;
    this.currentType = currentType;
    this.newType = newType;
    this.type = type;
  }
  
  @Override
  public String getMessage(){
    String msg = "Semantic error on line ";
    if(type != null){
      switch (type) {
        case "primitive redeclaration": return msg + primitiveMsg();
        case "function redeclaration":  return msg + redeclarationMsg("function");
        case "variable redeclaration":  return msg + redeclarationMsg("variable");
        case "function not declared": return msg + noDeclarationMsg("function");
        case "variable not declared": return msg + noDeclarationMsg("variable");
        case "incorrect arity": return msg + incorrectArity("function");
        case "type mismatch": return msg + mismatchTypeMsg();
        case "fCall type mismatch": return msg + fCallMismatchTypeMsg();
        case "arithmetic mismatch": return msg+ mismatchArithmetic();
      }
    }
    return super.getMessage();
  }
  
  private String mismatchArithmetic(){
    return err.getStart().getLine()+
      ": "+
      currentType+
      " not valid for an "+
      err.getText()+
      " expression";
  }
  
  private String mismatchTypeMsg(){
    return err.getStart().getLine()+
      ": expression with mismatching data types "+
      currentType+
      " <--> "+
      newType;
  }
  
  private String fCallMismatchTypeMsg(){
    return err.getStart().getLine()+
        ": function '"+
        scope +
        "' with with mismatching parameters types";
  }
  
  private String primitiveMsg(){
    return err.getStart().getLine()+
        ": function '"+
        scope +
        "' primitive function redeclaration";
  }
  
  private String redeclarationMsg(String type){
    return  err.getStart().getLine()+
      ": "+type+" '"+
      scope +
      "' was already declared on line "+
      original.getStart().getLine();
  }

  private String noDeclarationMsg(String type){
    return  err.getStart().getLine()+
      ": "+type+" '"+
      scope +
      "' was not declared ";
  }
  
  private String incorrectArity(String type){
    return  err.getStart().getLine()+
      ": "+type+" '"+
      scope +
      "'was called with "+ callFuncArity +
      " arguments but declared with "+declaredFuncArity+" parameters";
  }
}