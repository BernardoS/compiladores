// Generated from Grammar.g4 by ANTLR 4.5.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link GrammarParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface GrammarVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link GrammarParser#algoritmo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlgoritmo(GrammarParser.AlgoritmoContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#declaracao_algoritmo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclaracao_algoritmo(GrammarParser.Declaracao_algoritmoContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#var_decl_block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVar_decl_block(GrammarParser.Var_decl_blockContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#var_decl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVar_decl(GrammarParser.Var_declContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#tp_primitivo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTp_primitivo(GrammarParser.Tp_primitivoContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#tp_matriz}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTp_matriz(GrammarParser.Tp_matrizContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#tp_prim_pl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTp_prim_pl(GrammarParser.Tp_prim_plContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_block(GrammarParser.Stm_blockContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_list(GrammarParser.Stm_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_ret}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_ret(GrammarParser.Stm_retContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#lvalue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLvalue(GrammarParser.LvalueContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_attr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_attr(GrammarParser.Stm_attrContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_se}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_se(GrammarParser.Stm_seContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_enquanto}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_enquanto(GrammarParser.Stm_enquantoContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#stm_para}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStm_para(GrammarParser.Stm_paraContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#passo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPasso(GrammarParser.PassoContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr(GrammarParser.ExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#op}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOp(GrammarParser.OpContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#termo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTermo(GrammarParser.TermoContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#fcall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFcall(GrammarParser.FcallContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#fargs}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFargs(GrammarParser.FargsContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(GrammarParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#func_decl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunc_decl(GrammarParser.Func_declContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#fvar_decl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFvar_decl(GrammarParser.Fvar_declContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#fparams}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFparams(GrammarParser.FparamsContext ctx);
	/**
	 * Visit a parse tree produced by {@link GrammarParser#fparam}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFparam(GrammarParser.FparamContext ctx);
}