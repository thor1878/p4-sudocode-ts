# SudoCode Lexer and Parser

Lexer and parser for SudoCode created with ANTLR4.\
Part of P4 software project at Aalborg University.

### Developer prerequisites

-   Install a [Java Development Kit](https://www.oracle.com/in/java/technologies/downloads/)
-   Install [NodeJs](https://nodejs.org/en/download/)
-   Intall NodeJs dependencies
    -   `npm i`
-   Install recommended VS code extentions.
    -   `npm run install:extensions`
-   Install the SudoCode syntax highlighter extension
    -   `npm run install:highlighter`

### Development

To build and compile the lexer and parser run: `npm run build:dist`\
To generate the parse tree on `input-files/input.sudocode`, after building the dist, run: `npm run tree`\
See `package.json` for more scripts.
