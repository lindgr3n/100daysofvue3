class BoardManager {
    protected target: string = "app"
    protected WIDTH: number;
    protected HEIGHT: number;
    protected GameManager: GameManager;
    protected board: BoardCell[]

    constructor(config) {
        const { width, height, gameManager } = config;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.GameManager = gameManager;
        this.board = [];
        this.setup()
    }

    setup() {
        const appElement = document.querySelector(`#${this.target}`)
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                const cell: BoardCell = new BoardCell(x, y);
                this.board.push(cell);
            }
        }
    }

    render() {
        const appElement = document.querySelector(`#${this.target}`)
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                const cell: BoardCell = this.board[y * this.HEIGHT + x];
                this.board.push(cell);
                console.log(cell)
                appElement.appendChild(cell.generate());
            }
        }
    }
}

class BoardCell {
    private x: number;
    private y: number;

    constructor(x, y, data?) {
        this.x = x;
        this.y = y;
    }

    generate(): HTMLElement {
        const element: HTMLElement = document.createElement('div')
        element.classList.add(`cell-${this.x}x${this.y}`)
        return element
    }
}

class GameManager {
    constructor() {

    }
}

const boardManager: BoardManager = new BoardManager({ width: 3, height: 3 });
boardManager.render();