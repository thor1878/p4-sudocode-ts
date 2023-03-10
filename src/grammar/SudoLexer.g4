lexer grammar SudoLexer;
tokens { NEWLINE, INDENT, DEDENT, ERR_DEDENT }

@header {
    import LexerHelper from '../helpers/LexerHelper'
}

@members {
    helper: LexerHelper = new LexerHelper();
    
    nextToken = () => this.helper.nextToken(() => super.nextToken())
}

L_PAREN: '(';
R_PAREN: ')';
L_CURLY: '{';
R_CURLY: '}';
L_BRACK: '[';
R_BRACK: ']';
ADD: '+';
SUB: '-';
MULT: '*';
DIVD: '/';
MOD: '%';
COLON: ':';
SEMI: ';';
COMMA: ',';

COMPARISON: '==' | '!=' | '>=' | '>' | '<=' | '<';

RULE: 'rule';
APPLY: 'apply';
EXPECTS: 'expects';
FOR: 'for';
IF: 'if';
TO: 'to';
FROM: 'from';
OR: 'or';
AND: 'and';
GLOBAL: 'CELLS' | 'ROWS' | 'COLUMNS' | 'BOXES';

VAL: 'val';
SUM: 'sum';
LEN: 'len';

NUMBER: '-'? POS_NUMBER;
POS_NUMBER: '0' | [1-9][0-9]*;

ID: [A-Za-z] [A-Za-z0-9]*;

WHITESPACE: ('\r'? '\n' ' '*)+;

IGNORE: ' ' -> skip;
COMMENT: '#' (~('\r'|'\n'))* -> skip;
