// Generated from SudoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SudoParserListener } from "./SudoParserListener";
import { SudoParserVisitor } from "./SudoParserVisitor";


export class SudoParser extends Parser {
	public static readonly NEWLINE = 1;
	public static readonly INDENT = 2;
	public static readonly DEDENT = 3;
	public static readonly ERR_DEDENT = 4;
	public static readonly L_PAREN = 5;
	public static readonly R_PAREN = 6;
	public static readonly L_CURLY = 7;
	public static readonly R_CURLY = 8;
	public static readonly L_BRACK = 9;
	public static readonly R_BRACK = 10;
	public static readonly ADD = 11;
	public static readonly SUB = 12;
	public static readonly MULT = 13;
	public static readonly DIVD = 14;
	public static readonly MOD = 15;
	public static readonly COLON = 16;
	public static readonly SEMI = 17;
	public static readonly COMMA = 18;
	public static readonly COMPARISON = 19;
	public static readonly RULE = 20;
	public static readonly APPLY = 21;
	public static readonly EXPECTS = 22;
	public static readonly FOR = 23;
	public static readonly IF = 24;
	public static readonly TO = 25;
	public static readonly FROM = 26;
	public static readonly OR = 27;
	public static readonly AND = 28;
	public static readonly GLOBAL = 29;
	public static readonly VAL = 30;
	public static readonly SUM = 31;
	public static readonly LEN = 32;
	public static readonly NUMBER = 33;
	public static readonly POS_NUMBER = 34;
	public static readonly ID = 35;
	public static readonly WHITESPACE = 36;
	public static readonly IGNORE = 37;
	public static readonly COMMENT = 38;
	public static readonly RULE_prog = 0;
	public static readonly RULE_rule_ = 1;
	public static readonly RULE_expects = 2;
	public static readonly RULE_quantifier = 3;
	public static readonly RULE_id_list = 4;
	public static readonly RULE_block = 5;
	public static readonly RULE_apply = 6;
	public static readonly RULE_apply_params = 7;
	public static readonly RULE_stmt = 8;
	public static readonly RULE_for_stmt = 9;
	public static readonly RULE_if_stmt = 10;
	public static readonly RULE_conjunction = 11;
	public static readonly RULE_disjunction = 12;
	public static readonly RULE_comparison = 13;
	public static readonly RULE_expr = 14;
	public static readonly RULE_factor = 15;
	public static readonly RULE_term = 16;
	public static readonly RULE_cell_params = 17;
	public static readonly RULE_cell_list = 18;
	public static readonly RULE_cell = 19;
	public static readonly RULE_cell_val = 20;
	public static readonly RULE_cell_sum = 21;
	public static readonly RULE_cell_len = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "rule_", "expects", "quantifier", "id_list", "block", "apply", 
		"apply_params", "stmt", "for_stmt", "if_stmt", "conjunction", "disjunction", 
		"comparison", "expr", "factor", "term", "cell_params", "cell_list", "cell", 
		"cell_val", "cell_sum", "cell_len",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "'+'", "'-'", "'*'", "'/'", "'%'", "':'", "';'", 
		"','", undefined, "'rule'", "'apply'", "'expects'", "'for'", "'if'", "'to'", 
		"'from'", "'or'", "'and'", undefined, "'val'", "'sum'", "'len'", undefined, 
		undefined, undefined, undefined, "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NEWLINE", "INDENT", "DEDENT", "ERR_DEDENT", "L_PAREN", "R_PAREN", 
		"L_CURLY", "R_CURLY", "L_BRACK", "R_BRACK", "ADD", "SUB", "MULT", "DIVD", 
		"MOD", "COLON", "SEMI", "COMMA", "COMPARISON", "RULE", "APPLY", "EXPECTS", 
		"FOR", "IF", "TO", "FROM", "OR", "AND", "GLOBAL", "VAL", "SUM", "LEN", 
		"NUMBER", "POS_NUMBER", "ID", "WHITESPACE", "IGNORE", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SudoParser._LITERAL_NAMES, SudoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SudoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SudoParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SudoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SudoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SudoParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SudoParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 48;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SudoParser.RULE:
					{
					this.state = 46;
					this.rule_();
					}
					break;
				case SudoParser.APPLY:
					{
					this.state = 47;
					this.apply();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SudoParser.RULE || _la === SudoParser.APPLY);
			this.state = 52;
			this.match(SudoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_(): Rule_Context {
		let _localctx: Rule_Context = new Rule_Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, SudoParser.RULE_rule_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(SudoParser.RULE);
			this.state = 55;
			this.match(SudoParser.ID);
			this.state = 56;
			this.match(SudoParser.L_PAREN);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SudoParser.ID) {
				{
				this.state = 57;
				this.id_list();
				}
			}

			this.state = 60;
			this.match(SudoParser.R_PAREN);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SudoParser.EXPECTS) {
				{
				this.state = 61;
				this.expects();
				}
			}

			this.state = 64;
			this.match(SudoParser.COLON);
			this.state = 65;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expects(): ExpectsContext {
		let _localctx: ExpectsContext = new ExpectsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SudoParser.RULE_expects);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(SudoParser.EXPECTS);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SudoParser.MULT || _la === SudoParser.POS_NUMBER) {
				{
				this.state = 68;
				this.quantifier();
				}
			}

			this.state = 71;
			this.match(SudoParser.ID);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SudoParser.COMMA) {
				{
				{
				this.state = 72;
				this.match(SudoParser.COMMA);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SudoParser.MULT || _la === SudoParser.POS_NUMBER) {
					{
					this.state = 73;
					this.quantifier();
					}
				}

				this.state = 76;
				this.match(SudoParser.ID);
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifier(): QuantifierContext {
		let _localctx: QuantifierContext = new QuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SudoParser.RULE_quantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_la = this._input.LA(1);
			if (!(_la === SudoParser.MULT || _la === SudoParser.POS_NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id_list(): Id_listContext {
		let _localctx: Id_listContext = new Id_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SudoParser.RULE_id_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(SudoParser.ID);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SudoParser.COMMA) {
				{
				{
				this.state = 85;
				this.match(SudoParser.COMMA);
				this.state = 86;
				this.match(SudoParser.ID);
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SudoParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(SudoParser.NEWLINE);
			this.state = 93;
			this.match(SudoParser.INDENT);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 96;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SudoParser.FOR:
				case SudoParser.IF:
					{
					this.state = 94;
					this.stmt();
					}
					break;
				case SudoParser.APPLY:
					{
					this.state = 95;
					this.apply();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SudoParser.APPLY) | (1 << SudoParser.FOR) | (1 << SudoParser.IF))) !== 0));
			this.state = 100;
			this.match(SudoParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apply(): ApplyContext {
		let _localctx: ApplyContext = new ApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SudoParser.RULE_apply);
		let _la: number;
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.match(SudoParser.APPLY);
				this.state = 103;
				this.conjunction();
				this.state = 104;
				this.match(SudoParser.NEWLINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 106;
				this.match(SudoParser.APPLY);
				this.state = 107;
				this.match(SudoParser.ID);
				this.state = 108;
				this.apply_params();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SudoParser.TO) {
					{
					this.state = 109;
					this.match(SudoParser.TO);
					this.state = 110;
					this.cell_params();
					}
				}

				this.state = 113;
				this.match(SudoParser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apply_params(): Apply_paramsContext {
		let _localctx: Apply_paramsContext = new Apply_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SudoParser.RULE_apply_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(SudoParser.L_PAREN);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (SudoParser.L_PAREN - 5)) | (1 << (SudoParser.VAL - 5)) | (1 << (SudoParser.SUM - 5)) | (1 << (SudoParser.LEN - 5)) | (1 << (SudoParser.NUMBER - 5)) | (1 << (SudoParser.ID - 5)))) !== 0)) {
				{
				this.state = 118;
				this.expr();
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SudoParser.COMMA) {
					{
					{
					this.state = 119;
					this.match(SudoParser.COMMA);
					this.state = 120;
					this.expr();
					}
					}
					this.state = 125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 128;
			this.match(SudoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SudoParser.RULE_stmt);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SudoParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this.for_stmt();
				}
				break;
			case SudoParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.if_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SudoParser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(SudoParser.FOR);
			this.state = 135;
			this.match(SudoParser.ID);
			this.state = 136;
			this.match(SudoParser.FROM);
			this.state = 137;
			this.expr();
			this.state = 138;
			this.match(SudoParser.TO);
			this.state = 139;
			this.expr();
			this.state = 140;
			this.match(SudoParser.COLON);
			this.state = 141;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SudoParser.RULE_if_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(SudoParser.IF);
			this.state = 144;
			this.conjunction();
			this.state = 145;
			this.match(SudoParser.COLON);
			this.state = 146;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjunction(): ConjunctionContext {
		let _localctx: ConjunctionContext = new ConjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SudoParser.RULE_conjunction);
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 148;
				this.disjunction();
				this.state = 149;
				this.match(SudoParser.AND);
				this.state = 150;
				this.conjunction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
				this.disjunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public disjunction(): DisjunctionContext {
		let _localctx: DisjunctionContext = new DisjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SudoParser.RULE_disjunction);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.comparison();
				this.state = 156;
				this.match(SudoParser.OR);
				this.state = 157;
				this.disjunction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.comparison();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SudoParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.expr();
			this.state = 163;
			this.match(SudoParser.COMPARISON);
			this.state = 164;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SudoParser.RULE_expr);
		let _la: number;
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.factor();
				this.state = 167;
				_la = this._input.LA(1);
				if (!(_la === SudoParser.ADD || _la === SudoParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 168;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.factor();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SudoParser.RULE_factor);
		let _la: number;
		try {
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 173;
				this.term();
				this.state = 174;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SudoParser.MULT) | (1 << SudoParser.DIVD) | (1 << SudoParser.MOD))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 175;
				this.factor();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.term();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SudoParser.RULE_term);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SudoParser.L_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.match(SudoParser.L_PAREN);
				this.state = 181;
				this.expr();
				this.state = 182;
				this.match(SudoParser.R_PAREN);
				}
				break;
			case SudoParser.VAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				this.cell_val();
				}
				break;
			case SudoParser.SUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 185;
				this.cell_sum();
				}
				break;
			case SudoParser.LEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 186;
				this.cell_len();
				}
				break;
			case SudoParser.ID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 187;
				this.match(SudoParser.ID);
				}
				break;
			case SudoParser.NUMBER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 188;
				this.match(SudoParser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell_params(): Cell_paramsContext {
		let _localctx: Cell_paramsContext = new Cell_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SudoParser.RULE_cell_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				this.cell();
				}
				break;

			case 2:
				{
				this.state = 192;
				this.cell_list();
				}
				break;
			}
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SudoParser.COMMA) {
				{
				{
				this.state = 195;
				this.match(SudoParser.COMMA);
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 196;
					this.cell();
					}
					break;

				case 2:
					{
					this.state = 197;
					this.cell_list();
					}
					break;
				}
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell_list(): Cell_listContext {
		let _localctx: Cell_listContext = new Cell_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SudoParser.RULE_cell_list);
		let _la: number;
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SudoParser.L_BRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.match(SudoParser.L_BRACK);
				this.state = 206;
				this.cell();
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SudoParser.COMMA) {
					{
					{
					this.state = 207;
					this.match(SudoParser.COMMA);
					this.state = 208;
					this.cell();
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 214;
				this.match(SudoParser.R_BRACK);
				}
				break;
			case SudoParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.match(SudoParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell(): CellContext {
		let _localctx: CellContext = new CellContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SudoParser.RULE_cell);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 219;
				this.term();
				this.state = 220;
				this.match(SudoParser.COLON);
				this.state = 221;
				this.term();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.cell_list();
				this.state = 224;
				this.match(SudoParser.L_BRACK);
				this.state = 225;
				this.expr();
				this.state = 226;
				this.match(SudoParser.R_BRACK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.match(SudoParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell_val(): Cell_valContext {
		let _localctx: Cell_valContext = new Cell_valContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SudoParser.RULE_cell_val);
		try {
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.match(SudoParser.VAL);
				this.state = 232;
				this.match(SudoParser.L_PAREN);
				this.state = 233;
				this.term();
				this.state = 234;
				this.match(SudoParser.COLON);
				this.state = 235;
				this.term();
				this.state = 236;
				this.match(SudoParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.match(SudoParser.VAL);
				this.state = 239;
				this.match(SudoParser.L_PAREN);
				this.state = 240;
				this.match(SudoParser.ID);
				this.state = 241;
				this.match(SudoParser.R_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell_sum(): Cell_sumContext {
		let _localctx: Cell_sumContext = new Cell_sumContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SudoParser.RULE_cell_sum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(SudoParser.SUM);
			this.state = 245;
			this.match(SudoParser.L_PAREN);
			this.state = 246;
			this.cell_list();
			this.state = 247;
			this.match(SudoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell_len(): Cell_lenContext {
		let _localctx: Cell_lenContext = new Cell_lenContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SudoParser.RULE_cell_len);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(SudoParser.LEN);
			this.state = 250;
			this.match(SudoParser.L_PAREN);
			this.state = 251;
			this.cell_list();
			this.state = 252;
			this.match(SudoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\u0101\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x06\x023\n\x02\r\x02\x0E\x024\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03=\n\x03\x03\x03\x03\x03\x05\x03" +
		"A\n\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04H\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04M\n\x04\x03\x04\x07\x04P\n\x04\f\x04\x0E\x04S" +
		"\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06Z\n\x06\f\x06\x0E" +
		"\x06]\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07c\n\x07\r\x07\x0E\x07" +
		"d\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\br\n\b\x03\b\x03\b\x05\bv\n\b\x03\t\x03\t\x03\t\x03\t\x07\t|\n" +
		"\t\f\t\x0E\t\x7F\v\t\x05\t\x81\n\t\x03\t\x03\t\x03\n\x03\n\x05\n\x87\n" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x9C\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xA3\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xAE\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xB5\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xC0\n" +
		"\x12\x03\x13\x03\x13\x05\x13\xC4\n\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xC9\n\x13\x07\x13\xCB\n\x13\f\x13\x0E\x13\xCE\v\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\xD4\n\x14\f\x14\x0E\x14\xD7\v\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\xDC\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xE8\n\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x05\x16\xF5\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02" +
		"\x05\x04\x02\x0F\x0F$$\x03\x02\r\x0E\x03\x02\x0F\x11\x02\u0109\x022\x03" +
		"\x02\x02\x02\x048\x03\x02\x02\x02\x06E\x03\x02\x02\x02\bT\x03\x02\x02" +
		"\x02\nV\x03\x02\x02\x02\f^\x03\x02\x02\x02\x0Eu\x03\x02\x02\x02\x10w\x03" +
		"\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x88\x03\x02\x02\x02\x16\x91\x03" +
		"\x02\x02\x02\x18\x9B\x03\x02\x02\x02\x1A\xA2\x03\x02\x02\x02\x1C\xA4\x03" +
		"\x02\x02\x02\x1E\xAD\x03\x02\x02\x02 \xB4\x03\x02\x02\x02\"\xBF\x03\x02" +
		"\x02\x02$\xC3\x03\x02\x02\x02&\xDB\x03\x02\x02\x02(\xE7\x03\x02\x02\x02" +
		"*\xF4\x03\x02\x02\x02,\xF6\x03\x02\x02\x02.\xFB\x03\x02\x02\x0203\x05" +
		"\x04\x03\x0213\x05\x0E\b\x0220\x03\x02\x02\x0221\x03\x02\x02\x0234\x03" +
		"\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x07" +
		"\x02\x02\x037\x03\x03\x02\x02\x0289\x07\x16\x02\x029:\x07%\x02\x02:<\x07" +
		"\x07\x02\x02;=\x05\n\x06\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x03" +
		"\x02\x02\x02>@\x07\b\x02\x02?A\x05\x06\x04\x02@?\x03\x02\x02\x02@A\x03" +
		"\x02\x02\x02AB\x03\x02\x02\x02BC\x07\x12\x02\x02CD\x05\f\x07\x02D\x05" +
		"\x03\x02\x02\x02EG\x07\x18\x02\x02FH\x05\b\x05\x02GF\x03\x02\x02\x02G" +
		"H\x03\x02\x02\x02HI\x03\x02\x02\x02IQ\x07%\x02\x02JL\x07\x14\x02\x02K" +
		"M\x05\b\x05\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"NP\x07%\x02\x02OJ\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"QR\x03\x02\x02\x02R\x07\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\t\x02\x02" +
		"\x02U\t\x03\x02\x02\x02V[\x07%\x02\x02WX\x07\x14\x02\x02XZ\x07%\x02\x02" +
		"YW\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02" +
		"\x02\\\v\x03\x02\x02\x02][\x03\x02\x02\x02^_\x07\x03\x02\x02_b\x07\x04" +
		"\x02\x02`c\x05\x12\n\x02ac\x05\x0E\b\x02b`\x03\x02\x02\x02ba\x03\x02\x02" +
		"\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02ef\x03\x02\x02" +
		"\x02fg\x07\x05\x02\x02g\r\x03\x02\x02\x02hi\x07\x17\x02\x02ij\x05\x18" +
		"\r\x02jk\x07\x03\x02\x02kv\x03\x02\x02\x02lm\x07\x17\x02\x02mn\x07%\x02" +
		"\x02nq\x05\x10\t\x02op\x07\x1B\x02\x02pr\x05$\x13\x02qo\x03\x02\x02\x02" +
		"qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x07\x03\x02\x02tv\x03\x02\x02\x02" +
		"uh\x03\x02\x02\x02ul\x03\x02\x02\x02v\x0F\x03\x02\x02\x02w\x80\x07\x07" +
		"\x02\x02x}\x05\x1E\x10\x02yz\x07\x14\x02\x02z|\x05\x1E\x10\x02{y\x03\x02" +
		"\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x81" +
		"\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80x\x03\x02\x02\x02\x80\x81\x03" +
		"\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x07\b\x02\x02\x83\x11\x03" +
		"\x02\x02\x02\x84\x87\x05\x14\v\x02\x85\x87\x05\x16\f\x02\x86\x84\x03\x02" +
		"\x02\x02\x86\x85\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x88\x89\x07\x19" +
		"\x02\x02\x89\x8A\x07%\x02\x02\x8A\x8B\x07\x1C\x02\x02\x8B\x8C\x05\x1E" +
		"\x10\x02\x8C\x8D\x07\x1B\x02\x02\x8D\x8E\x05\x1E\x10\x02\x8E\x8F\x07\x12" +
		"\x02\x02\x8F\x90\x05\f\x07\x02\x90\x15\x03\x02\x02\x02\x91\x92\x07\x1A" +
		"\x02\x02\x92\x93\x05\x18\r\x02\x93\x94\x07\x12\x02\x02\x94\x95\x05\f\x07" +
		"\x02\x95\x17\x03\x02\x02\x02\x96\x97\x05\x1A\x0E\x02\x97\x98\x07\x1E\x02" +
		"\x02\x98\x99\x05\x18\r\x02\x99\x9C\x03\x02\x02\x02\x9A\x9C\x05\x1A\x0E" +
		"\x02\x9B\x96\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x19\x03\x02\x02" +
		"\x02\x9D\x9E\x05\x1C\x0F\x02\x9E\x9F\x07\x1D\x02\x02\x9F\xA0\x05\x1A\x0E" +
		"\x02\xA0\xA3\x03\x02\x02\x02\xA1\xA3\x05\x1C\x0F\x02\xA2\x9D\x03\x02\x02" +
		"\x02\xA2\xA1\x03\x02\x02\x02\xA3\x1B\x03\x02\x02\x02\xA4\xA5\x05\x1E\x10" +
		"\x02\xA5\xA6\x07\x15\x02\x02\xA6\xA7\x05\x1E\x10\x02\xA7\x1D\x03\x02\x02" +
		"\x02\xA8\xA9\x05 \x11\x02\xA9\xAA\t\x03\x02\x02\xAA\xAB\x05\x1E\x10\x02" +
		"\xAB\xAE\x03\x02\x02\x02\xAC\xAE\x05 \x11\x02\xAD\xA8\x03\x02\x02\x02" +
		"\xAD\xAC\x03\x02\x02\x02\xAE\x1F\x03\x02\x02\x02\xAF\xB0\x05\"\x12\x02" +
		"\xB0\xB1\t\x04\x02\x02\xB1\xB2\x05 \x11\x02\xB2\xB5\x03\x02\x02\x02\xB3" +
		"\xB5\x05\"\x12\x02\xB4\xAF\x03\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5" +
		"!\x03\x02\x02\x02\xB6\xB7\x07\x07\x02\x02\xB7\xB8\x05\x1E\x10\x02\xB8" +
		"\xB9\x07\b\x02\x02\xB9\xC0\x03\x02\x02\x02\xBA\xC0\x05*\x16\x02\xBB\xC0" +
		"\x05,\x17\x02\xBC\xC0\x05.\x18\x02\xBD\xC0\x07%\x02\x02\xBE\xC0\x07#\x02" +
		"\x02\xBF\xB6\x03\x02\x02\x02\xBF\xBA\x03\x02\x02\x02\xBF\xBB\x03\x02\x02" +
		"\x02\xBF\xBC\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02" +
		"\x02\xC0#\x03\x02\x02\x02\xC1\xC4\x05(\x15\x02\xC2\xC4\x05&\x14\x02\xC3" +
		"\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4\xCC\x03\x02\x02\x02\xC5" +
		"\xC8\x07\x14\x02\x02\xC6\xC9\x05(\x15\x02\xC7\xC9\x05&\x14\x02\xC8\xC6" +
		"\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC5" +
		"\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD" +
		"\x03\x02\x02\x02\xCD%\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD0" +
		"\x07\v\x02\x02\xD0\xD5\x05(\x15\x02\xD1\xD2\x07\x14\x02\x02\xD2\xD4\x05" +
		"(\x15\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03" +
		"\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03" +
		"\x02\x02\x02\xD8\xD9\x07\f\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xDC\x07" +
		"%\x02\x02\xDB\xCF\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\'\x03\x02" +
		"\x02\x02\xDD\xDE\x05\"\x12\x02\xDE\xDF\x07\x12\x02\x02\xDF\xE0\x05\"\x12" +
		"\x02\xE0\xE8\x03\x02\x02\x02\xE1\xE2\x05&\x14\x02\xE2\xE3\x07\v\x02\x02" +
		"\xE3\xE4\x05\x1E\x10\x02\xE4\xE5\x07\f\x02\x02\xE5\xE8\x03\x02\x02\x02" +
		"\xE6\xE8\x07%\x02\x02\xE7\xDD\x03\x02\x02\x02\xE7\xE1\x03\x02\x02\x02" +
		"\xE7\xE6\x03\x02\x02\x02\xE8)\x03\x02\x02\x02\xE9\xEA\x07 \x02\x02\xEA" +
		"\xEB\x07\x07\x02\x02\xEB\xEC\x05\"\x12\x02\xEC\xED\x07\x12\x02\x02\xED" +
		"\xEE\x05\"\x12\x02\xEE\xEF\x07\b\x02\x02\xEF\xF5\x03\x02\x02\x02\xF0\xF1" +
		"\x07 \x02\x02\xF1\xF2\x07\x07\x02\x02\xF2\xF3\x07%\x02\x02\xF3\xF5\x07" +
		"\b\x02\x02\xF4\xE9\x03\x02\x02\x02\xF4\xF0\x03\x02\x02\x02\xF5+\x03\x02" +
		"\x02\x02\xF6\xF7\x07!\x02\x02\xF7\xF8\x07\x07\x02\x02\xF8\xF9\x05&\x14" +
		"\x02\xF9\xFA\x07\b\x02\x02\xFA-\x03\x02\x02\x02\xFB\xFC\x07\"\x02\x02" +
		"\xFC\xFD\x07\x07\x02\x02\xFD\xFE\x05&\x14\x02\xFE\xFF\x07\b\x02\x02\xFF" +
		"/\x03\x02\x02\x02\x1D24<@GLQ[bdqu}\x80\x86\x9B\xA2\xAD\xB4\xBF\xC3\xC8" +
		"\xCC\xD5\xDB\xE7\xF4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SudoParser.__ATN) {
			SudoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SudoParser._serializedATN));
		}

		return SudoParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SudoParser.EOF, 0); }
	public rule_(): Rule_Context[];
	public rule_(i: number): Rule_Context;
	public rule_(i?: number): Rule_Context | Rule_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Rule_Context);
		} else {
			return this.getRuleContext(i, Rule_Context);
		}
	}
	public apply(): ApplyContext[];
	public apply(i: number): ApplyContext;
	public apply(i?: number): ApplyContext | ApplyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApplyContext);
		} else {
			return this.getRuleContext(i, ApplyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_prog; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_Context extends ParserRuleContext {
	public RULE(): TerminalNode { return this.getToken(SudoParser.RULE, 0); }
	public ID(): TerminalNode { return this.getToken(SudoParser.ID, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(SudoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SudoParser.R_PAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(SudoParser.COLON, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public id_list(): Id_listContext | undefined {
		return this.tryGetRuleContext(0, Id_listContext);
	}
	public expects(): ExpectsContext | undefined {
		return this.tryGetRuleContext(0, ExpectsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_rule_; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterRule_) {
			listener.enterRule_(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitRule_) {
			listener.exitRule_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitRule_) {
			return visitor.visitRule_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpectsContext extends ParserRuleContext {
	public EXPECTS(): TerminalNode { return this.getToken(SudoParser.EXPECTS, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.ID);
		} else {
			return this.getToken(SudoParser.ID, i);
		}
	}
	public quantifier(): QuantifierContext[];
	public quantifier(i: number): QuantifierContext;
	public quantifier(i?: number): QuantifierContext | QuantifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuantifierContext);
		} else {
			return this.getRuleContext(i, QuantifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.COMMA);
		} else {
			return this.getToken(SudoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_expects; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterExpects) {
			listener.enterExpects(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitExpects) {
			listener.exitExpects(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitExpects) {
			return visitor.visitExpects(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifierContext extends ParserRuleContext {
	public MULT(): TerminalNode | undefined { return this.tryGetToken(SudoParser.MULT, 0); }
	public POS_NUMBER(): TerminalNode | undefined { return this.tryGetToken(SudoParser.POS_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_quantifier; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterQuantifier) {
			listener.enterQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitQuantifier) {
			listener.exitQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitQuantifier) {
			return visitor.visitQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Id_listContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.ID);
		} else {
			return this.getToken(SudoParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.COMMA);
		} else {
			return this.getToken(SudoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_id_list; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterId_list) {
			listener.enterId_list(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitId_list) {
			listener.exitId_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitId_list) {
			return visitor.visitId_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(SudoParser.NEWLINE, 0); }
	public INDENT(): TerminalNode { return this.getToken(SudoParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(SudoParser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public apply(): ApplyContext[];
	public apply(i: number): ApplyContext;
	public apply(i?: number): ApplyContext | ApplyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApplyContext);
		} else {
			return this.getRuleContext(i, ApplyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_block; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyContext extends ParserRuleContext {
	public APPLY(): TerminalNode { return this.getToken(SudoParser.APPLY, 0); }
	public conjunction(): ConjunctionContext | undefined {
		return this.tryGetRuleContext(0, ConjunctionContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(SudoParser.NEWLINE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SudoParser.ID, 0); }
	public apply_params(): Apply_paramsContext | undefined {
		return this.tryGetRuleContext(0, Apply_paramsContext);
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(SudoParser.TO, 0); }
	public cell_params(): Cell_paramsContext | undefined {
		return this.tryGetRuleContext(0, Cell_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_apply; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterApply) {
			listener.enterApply(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitApply) {
			listener.exitApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitApply) {
			return visitor.visitApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Apply_paramsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(SudoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SudoParser.R_PAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.COMMA);
		} else {
			return this.getToken(SudoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_apply_params; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterApply_params) {
			listener.enterApply_params(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitApply_params) {
			listener.exitApply_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitApply_params) {
			return visitor.visitApply_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_stmt; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SudoParser.FOR, 0); }
	public ID(): TerminalNode { return this.getToken(SudoParser.ID, 0); }
	public FROM(): TerminalNode { return this.getToken(SudoParser.FROM, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(SudoParser.TO, 0); }
	public COLON(): TerminalNode { return this.getToken(SudoParser.COLON, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_for_stmt; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterFor_stmt) {
			listener.enterFor_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitFor_stmt) {
			listener.exitFor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitFor_stmt) {
			return visitor.visitFor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SudoParser.IF, 0); }
	public conjunction(): ConjunctionContext {
		return this.getRuleContext(0, ConjunctionContext);
	}
	public COLON(): TerminalNode { return this.getToken(SudoParser.COLON, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConjunctionContext extends ParserRuleContext {
	public disjunction(): DisjunctionContext {
		return this.getRuleContext(0, DisjunctionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SudoParser.AND, 0); }
	public conjunction(): ConjunctionContext | undefined {
		return this.tryGetRuleContext(0, ConjunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_conjunction; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterConjunction) {
			listener.enterConjunction(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitConjunction) {
			listener.exitConjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisjunctionContext extends ParserRuleContext {
	public comparison(): ComparisonContext {
		return this.getRuleContext(0, ComparisonContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(SudoParser.OR, 0); }
	public disjunction(): DisjunctionContext | undefined {
		return this.tryGetRuleContext(0, DisjunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_disjunction; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterDisjunction) {
			listener.enterDisjunction(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitDisjunction) {
			listener.exitDisjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitDisjunction) {
			return visitor.visitDisjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMPARISON(): TerminalNode { return this.getToken(SudoParser.COMPARISON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_comparison; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SudoParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SudoParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_expr; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(SudoParser.MULT, 0); }
	public DIVD(): TerminalNode | undefined { return this.tryGetToken(SudoParser.DIVD, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(SudoParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_factor; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(SudoParser.L_PAREN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(SudoParser.R_PAREN, 0); }
	public cell_val(): Cell_valContext | undefined {
		return this.tryGetRuleContext(0, Cell_valContext);
	}
	public cell_sum(): Cell_sumContext | undefined {
		return this.tryGetRuleContext(0, Cell_sumContext);
	}
	public cell_len(): Cell_lenContext | undefined {
		return this.tryGetRuleContext(0, Cell_lenContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SudoParser.ID, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(SudoParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_term; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_paramsContext extends ParserRuleContext {
	public cell(): CellContext[];
	public cell(i: number): CellContext;
	public cell(i?: number): CellContext | CellContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CellContext);
		} else {
			return this.getRuleContext(i, CellContext);
		}
	}
	public cell_list(): Cell_listContext[];
	public cell_list(i: number): Cell_listContext;
	public cell_list(i?: number): Cell_listContext | Cell_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cell_listContext);
		} else {
			return this.getRuleContext(i, Cell_listContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.COMMA);
		} else {
			return this.getToken(SudoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_cell_params; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterCell_params) {
			listener.enterCell_params(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitCell_params) {
			listener.exitCell_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitCell_params) {
			return visitor.visitCell_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_listContext extends ParserRuleContext {
	public L_BRACK(): TerminalNode | undefined { return this.tryGetToken(SudoParser.L_BRACK, 0); }
	public cell(): CellContext[];
	public cell(i: number): CellContext;
	public cell(i?: number): CellContext | CellContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CellContext);
		} else {
			return this.getRuleContext(i, CellContext);
		}
	}
	public R_BRACK(): TerminalNode | undefined { return this.tryGetToken(SudoParser.R_BRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SudoParser.COMMA);
		} else {
			return this.getToken(SudoParser.COMMA, i);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SudoParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_cell_list; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterCell_list) {
			listener.enterCell_list(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitCell_list) {
			listener.exitCell_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitCell_list) {
			return visitor.visitCell_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CellContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SudoParser.COLON, 0); }
	public cell_list(): Cell_listContext | undefined {
		return this.tryGetRuleContext(0, Cell_listContext);
	}
	public L_BRACK(): TerminalNode | undefined { return this.tryGetToken(SudoParser.L_BRACK, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public R_BRACK(): TerminalNode | undefined { return this.tryGetToken(SudoParser.R_BRACK, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SudoParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_cell; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterCell) {
			listener.enterCell(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitCell) {
			listener.exitCell(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitCell) {
			return visitor.visitCell(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_valContext extends ParserRuleContext {
	public VAL(): TerminalNode { return this.getToken(SudoParser.VAL, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(SudoParser.L_PAREN, 0); }
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SudoParser.COLON, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SudoParser.R_PAREN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SudoParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_cell_val; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterCell_val) {
			listener.enterCell_val(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitCell_val) {
			listener.exitCell_val(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitCell_val) {
			return visitor.visitCell_val(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_sumContext extends ParserRuleContext {
	public SUM(): TerminalNode { return this.getToken(SudoParser.SUM, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(SudoParser.L_PAREN, 0); }
	public cell_list(): Cell_listContext {
		return this.getRuleContext(0, Cell_listContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(SudoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_cell_sum; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterCell_sum) {
			listener.enterCell_sum(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitCell_sum) {
			listener.exitCell_sum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitCell_sum) {
			return visitor.visitCell_sum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_lenContext extends ParserRuleContext {
	public LEN(): TerminalNode { return this.getToken(SudoParser.LEN, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(SudoParser.L_PAREN, 0); }
	public cell_list(): Cell_listContext {
		return this.getRuleContext(0, Cell_listContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(SudoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SudoParser.RULE_cell_len; }
	// @Override
	public enterRule(listener: SudoParserListener): void {
		if (listener.enterCell_len) {
			listener.enterCell_len(this);
		}
	}
	// @Override
	public exitRule(listener: SudoParserListener): void {
		if (listener.exitCell_len) {
			listener.exitCell_len(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SudoParserVisitor<Result>): Result {
		if (visitor.visitCell_len) {
			return visitor.visitCell_len(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


