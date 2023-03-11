import * as path from 'path';
import * as fs from 'fs';
import { SudoLexer } from './lib/SudoLexer';
import { SudoParser } from './lib/SudoParser';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PrintVisitor } from './visitors/PrintVisitor';
import { Cell, Sudoku } from './test';

import util from 'util';
util.inspect.defaultOptions.depth = 5;

function main() {
    const _path = path.join(__dirname, '..', 'input-files', 'input.sudocode');
    const inputFile = fs.readFileSync(_path, 'utf-8');
    const lexer = new SudoLexer(CharStreams.fromString(inputFile));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SudoParser(tokenStream);
    // parser.prog()

    const visitor = new PrintVisitor();
    const tree = visitor.visit(parser.prog());
    console.log(JSON.stringify(tree));

    // const cells: Cell[] = []
    // for (let y = 0; y < 9; y++) {
    //     for (let x = 0; x < 9; x++) {

    //         cells.push({
    //             row: y,
    //             col: x,
    //             val: Math.floor(Math.random() * 9) + 1
    //         })
    //     }
    // }
    // console.log(cells);

    // const s = new Sudoku(cells)
    // console.log(JSON.stringify(s.validate()))
}
main();
