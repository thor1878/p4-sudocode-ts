#!/bin/zsh

cd src/grammar
npx antlr4ts SudoLexer.g4 -o ../lib
npx antlr4ts SudoParser.g4 -visitor -o ../lib
cd ../..
npx tsc