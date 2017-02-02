"use strict";

let GrammarVisitor = require("./Grammar/Grammar2Visitor").Grammar2Visitor;

module.exports = class visitor extends GrammarVisitor{
  constructor(){
    super();
  }
  visitEval(ctx){
    if(ctx.getChildCount()){
      var result = this.visit(ctx.expr())
      console.log('>> '+result);
    }
  }
  visitExpr(ctx){
    return ctx.accept(this);
  }
  visitNeg(ctx){
      return -1*this.visit(ctx.expr());
  }
  visitPow(ctx){
    return Math.pow(this.visit(ctx.expr(0)),this.visit(ctx.expr(1)));
  }
  visitParen(ctx){
    return this.visitExpr(ctx.expr());
  }
  visitMulDiv(ctx){
    let left = this.visit(ctx.expr(0));
    let right = this.visit(ctx.expr(1));
    if(ctx.op.text === '*'){
        return left*right;
    }
    return left/right; 
  }
  visitAddSub(ctx){
    var left = this.visit(ctx.expr(0));
    var right = this.visit(ctx.expr(1));
    if(ctx.op.text === '+'){
        return left + right;
    }
    return left - right;
  }
  visitReal(ctx){
    return Number(ctx.REAL().getText());
  }
  visitInt(ctx){
    return Number(ctx.INTEIRO().getText());
  }
};