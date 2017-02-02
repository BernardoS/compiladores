"use strict";

let GrammarListener = require("./Grammar/GrammarListener").GrammarListener;

module.exports = class Listener extends GrammarListener{
  constructor(stream){
    super();
    this.stream = stream;
    this.node = 0;
  }
  /*@Overrride*/
  enterEveryRule(ctx){
    this.print(ctx);
  }
  /*@Overrride*/
  exitAlgoritmo(ctx){
    this.stream.write("}");
  }
  print(ctx){
      if(!ctx.parentCtx){
        ctx._node = this.node++;
        this.stream.write("digraph {");
        this.stream.write(`node0 [label="algoritmo"];`);
      }
      let children = ctx.getChildCount();
      for (var i = 0; i < children;i++ ) {
        let child = ctx.getChild(i);
        child._node = this.node++;
        if(child.getChildCount()){
          this.stream.write(`node${child._node} [label="${child.parser.ruleNames[child.ruleIndex]}"];`);
        }else{
          this.stream.write(`node${child._node} [label="${child.getText().replace(/\"/g,"\\\"")}"];`);
        }
        this.stream.write(`node${ctx._node} -> node${child._node};`);
      }
  }
};
