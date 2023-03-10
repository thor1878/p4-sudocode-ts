import { CommonToken, Token } from "antlr4ts";
import { SudoLexer } from "../lib/SudoLexer";

export default class LexerHelper {
    indentStack: number[]
    tokens: Token[]

    constructor() {
        this.indentStack = [0]
        this.tokens = []
    }
    /* 
     * Helper method to handle whitespace (NEWLINE, INDENT, DEDENT) while scanning tokens
     */
    nextToken(_nextToken: () => Token) {
        if (this.tokens.length > 0) {
            const first = this.tokens.shift()
            if (first === undefined) throw new Error('Token is undefined')
            return first
        }
        
        // Get the next token
        const next = _nextToken()

        if (next.type != SudoLexer.WHITESPACE) return next
        if (next.text === undefined) throw new Error('Token has no text')

        const whitespace = next.text.split(/(\r|\n)+/)

        const indent = (whitespace.length === 0 || next.text.at(-1) === '\n') ? 0 : whitespace[whitespace.length - 1].length

        // Check if whitespace results in INDENT
        if (this.indentStack[this.indentStack.length - 1] < indent) {
            this.indentStack.push(indent)
            this.tokens.push(new CommonToken(SudoLexer.INDENT, "<INDENT>"))
        }
        // Check if whitespace results in DEDENT
        else if (this.indentStack[this.indentStack.length - 1] > indent) {
            if (!this.indentStack.includes(indent)) {
                this.tokens.push(new CommonToken(SudoLexer.ERR_DEDENT, "<ERR_DEDENT>"));
            }
            else {
                while(this.indentStack.length > 0 && this.indentStack[this.indentStack.length - 1] != indent) {
                    this.tokens.push(new CommonToken(SudoLexer.DEDENT, "<DEDENT>"));
                    this.indentStack.pop();
                }
            }
        }
        // Always return NEWLINE
        return new CommonToken(SudoLexer.NEWLINE, "<NEWLINE>");
    }
}
