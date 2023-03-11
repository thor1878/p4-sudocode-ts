export class Sudoku {
    private constraints: Constraint[]
    private predicates: { [key: string]: Predicate }
    private cells: Cell[]

    constructor(cells: Cell[]) {
        this.cells = cells

        this.predicates = {
            uniqueCollection: (params: number[], cells: Cell[][]): PredicateResult => {
                //
                const results: PredicateResult[] = []
                let passed = true

                //
                for (let i = 0; i < cells[0].length; i++) {
                    for (let j = i + 1; j < cells[0].length; j++) {
                        const r1 = this.predicates.unique([], [[cells[0][i]], [cells[0][j]]])
                        passed = passed && r1.passed
                        results.push(r1)
                    }
                }

                //
                return {
                    passed: passed,
                    name: 'uniqueCollection',
                    children: results
                }
            },

            unique: (params: number[], cells: Cell[][]): PredicateResult => {
                //
                const results: PredicateResult[] = []
                let passed = true

                //
                const r1: PredicateResult = {
                    passed: cells[0][0].val !== cells[1][0].val,
                    name: '',
                    children: []
                }
                passed = passed && r1.passed
                results.push(r1)

                //
                return {
                    passed: passed,
                    name: 'unique',
                    children: results
                }
            }
        }
        this.constraints = [
            {
                pred: this.predicates.uniqueCollection,
                cells: [
                    [
                        cells[0],
                        cells[1],
                        cells[2],
                        cells[3],
                        cells[4],
                        cells[5],
                        cells[6],
                        cells[7],
                        cells[8]
                    ]
                ],
                params: []
            }
        ]
    }

    public validate() {
        const resultList: PredicateResult[] = []
        for (const c of this.constraints) {
            resultList.push(c.pred(c.params, c.cells))
        }
        return resultList
    }
}

type Constraint = {
    pred: Predicate
    params: number[]
    cells: Cell[][]
}

type Predicate = (params: number[], cells: Cell[][]) => PredicateResult

type PredicateResult = {
    passed: boolean
    name: string
    children: PredicateResult[]
}

export type Cell = {
    row: number
    col: number
    val: number
}
