// Generated from SudoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./SudoParser";
import { Rule_Context } from "./SudoParser";
import { ExpectsContext } from "./SudoParser";
import { QuantifierContext } from "./SudoParser";
import { Id_listContext } from "./SudoParser";
import { BlockContext } from "./SudoParser";
import { ApplyContext } from "./SudoParser";
import { Apply_paramsContext } from "./SudoParser";
import { StmtContext } from "./SudoParser";
import { For_stmtContext } from "./SudoParser";
import { If_stmtContext } from "./SudoParser";
import { ConjunctionContext } from "./SudoParser";
import { DisjunctionContext } from "./SudoParser";
import { ComparisonContext } from "./SudoParser";
import { ExprContext } from "./SudoParser";
import { FactorContext } from "./SudoParser";
import { TermContext } from "./SudoParser";
import { Cell_paramsContext } from "./SudoParser";
import { Cell_listContext } from "./SudoParser";
import { CellContext } from "./SudoParser";
import { Cell_valContext } from "./SudoParser";
import { Cell_sumContext } from "./SudoParser";
import { Cell_lenContext } from "./SudoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SudoParser`.
 */
export interface SudoParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SudoParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.rule_`.
	 * @param ctx the parse tree
	 */
	enterRule_?: (ctx: Rule_Context) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.rule_`.
	 * @param ctx the parse tree
	 */
	exitRule_?: (ctx: Rule_Context) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.expects`.
	 * @param ctx the parse tree
	 */
	enterExpects?: (ctx: ExpectsContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.expects`.
	 * @param ctx the parse tree
	 */
	exitExpects?: (ctx: ExpectsContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.quantifier`.
	 * @param ctx the parse tree
	 */
	enterQuantifier?: (ctx: QuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.quantifier`.
	 * @param ctx the parse tree
	 */
	exitQuantifier?: (ctx: QuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.id_list`.
	 * @param ctx the parse tree
	 */
	enterId_list?: (ctx: Id_listContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.id_list`.
	 * @param ctx the parse tree
	 */
	exitId_list?: (ctx: Id_listContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.apply`.
	 * @param ctx the parse tree
	 */
	enterApply?: (ctx: ApplyContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.apply`.
	 * @param ctx the parse tree
	 */
	exitApply?: (ctx: ApplyContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.apply_params`.
	 * @param ctx the parse tree
	 */
	enterApply_params?: (ctx: Apply_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.apply_params`.
	 * @param ctx the parse tree
	 */
	exitApply_params?: (ctx: Apply_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.conjunction`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.conjunction`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.disjunction`.
	 * @param ctx the parse tree
	 */
	enterDisjunction?: (ctx: DisjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.disjunction`.
	 * @param ctx the parse tree
	 */
	exitDisjunction?: (ctx: DisjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.cell_params`.
	 * @param ctx the parse tree
	 */
	enterCell_params?: (ctx: Cell_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.cell_params`.
	 * @param ctx the parse tree
	 */
	exitCell_params?: (ctx: Cell_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.cell_list`.
	 * @param ctx the parse tree
	 */
	enterCell_list?: (ctx: Cell_listContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.cell_list`.
	 * @param ctx the parse tree
	 */
	exitCell_list?: (ctx: Cell_listContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.cell`.
	 * @param ctx the parse tree
	 */
	enterCell?: (ctx: CellContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.cell`.
	 * @param ctx the parse tree
	 */
	exitCell?: (ctx: CellContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.cell_val`.
	 * @param ctx the parse tree
	 */
	enterCell_val?: (ctx: Cell_valContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.cell_val`.
	 * @param ctx the parse tree
	 */
	exitCell_val?: (ctx: Cell_valContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.cell_sum`.
	 * @param ctx the parse tree
	 */
	enterCell_sum?: (ctx: Cell_sumContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.cell_sum`.
	 * @param ctx the parse tree
	 */
	exitCell_sum?: (ctx: Cell_sumContext) => void;

	/**
	 * Enter a parse tree produced by `SudoParser.cell_len`.
	 * @param ctx the parse tree
	 */
	enterCell_len?: (ctx: Cell_lenContext) => void;
	/**
	 * Exit a parse tree produced by `SudoParser.cell_len`.
	 * @param ctx the parse tree
	 */
	exitCell_len?: (ctx: Cell_lenContext) => void;
}

