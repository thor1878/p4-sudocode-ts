parser grammar SudoParser;
options { tokenVocab=SudoLexer; }

prog: (rule_ | apply)+ EOF;

rule_: 'rule' ID '(' id_list? ')' expects? ':' block;
expects: 'expects' quantifier? ID (',' quantifier? ID)*;
quantifier: '*' | POS_NUMBER;
id_list: ID (',' ID)*; 

block: NEWLINE INDENT (stmt | apply)+ DEDENT;

apply
    : 'apply' conjunction NEWLINE
    | 'apply' ID apply_params ('to' cell_params)? NEWLINE
    ;
apply_params: '(' (expr (',' expr)*)? ')';

stmt
    : for_stmt
    | if_stmt
    ;

for_stmt: 'for' ID 'from' expr 'to' expr ':' block;

if_stmt: 'if' conjunction ':' block;

conjunction: disjunction 'and' conjunction | disjunction;
disjunction: comparison 'or' disjunction | comparison;

comparison: expr COMPARISON expr;

expr: factor ('+' | '-') expr | factor;
factor: term ('*' | '/' | '%') factor | term;
term
    : '(' expr ')' 
    | cell_val
    | cell_sum
    | cell_len
    | ID
    | NUMBER
    ;

cell_params: (cell | cell_list) (',' (cell | cell_list))*;
cell_list
    : '[' cell (',' cell)* ']'
    | ID
    ;
cell
    : term ':' term 
    | cell_list '[' expr ']'
    | ID;
cell_val
    : 'val' '(' term ':' term ')' 
    | 'val' '(' ID ')'
    ;
cell_sum: 'sum' '(' cell_list ')';
cell_len: 'len' '(' cell_list ')';
