// Generated from SudoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SudoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SudoParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SudoParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.rule_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_?: (ctx: Rule_Context) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.expects`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpects?: (ctx: ExpectsContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.quantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifier?: (ctx: QuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.id_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_list?: (ctx: Id_listContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.apply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApply?: (ctx: ApplyContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.apply_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApply_params?: (ctx: Apply_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.conjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.disjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction?: (ctx: DisjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.cell_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_params?: (ctx: Cell_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.cell_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_list?: (ctx: Cell_listContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.cell`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell?: (ctx: CellContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.cell_val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_val?: (ctx: Cell_valContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.cell_sum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_sum?: (ctx: Cell_sumContext) => Result;

	/**
	 * Visit a parse tree produced by `SudoParser.cell_len`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_len?: (ctx: Cell_lenContext) => Result;
}

