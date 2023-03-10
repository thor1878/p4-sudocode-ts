import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { SudoParserVisitor } from "../lib/SudoParserVisitor";
import { ProgContext, SudoParser } from "../lib/SudoParser";
import { ParserRuleContext } from "antlr4ts";

import util from 'util'
util.inspect.defaultOptions.depth = 4

export class PrintVisitor implements SudoParserVisitor<object> {
    visit(tree: ParseTree): object {
        const output = {
            text: tree.childCount
                ? Object.getPrototypeOf(tree).constructor.name.replace('Context', '')
                : tree.text,
            children: [] as object[]
        }


        for (let i = 0; i < tree.childCount; i++) {
            const child = this.visit(tree.getChild(i))
            output.children.push(child)
        }
        return output
    }


















    visitChildren(node: RuleNode): object {
        console.log('children');
        return {}
        
    }
    visitTerminal(node: TerminalNode): object {
        return {}
    }
    visitErrorNode(node: ErrorNode): object {
        console.log('error');
        return {}
    }
}