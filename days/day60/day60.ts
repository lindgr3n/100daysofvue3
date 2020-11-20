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

    getBoard() {
        return this.board;
    }

    getBoardById({ x, y }: { x: number, y: number }) {
        return this.board[y * this.HEIGHT + x]
    }

}

class BoardCell {
    private x: number;
    private y: number;
    private clickedBy: string;
    protected element: HTMLElement

    constructor(x, y, data?) {
        this.x = x;
        this.y = y;
    }

    generate(): HTMLElement {
        const element: HTMLElement = document.createElement('div')
        element.classList.add('cell')
        element.dataset.x = `${this.x}`;
        element.dataset.y = `${this.y}`;
        this.element = element;
        return element
    }

    clicked(player): boolean {
        if (this.clickedBy) {
            return false;
        }
        this.clickedBy = player;
        this.element.classList.add(player)
        return true;
    }

    getClickedBy(): string {
        return this.clickedBy;
    }
}

class GameManager {
    protected boardManager: BoardManager
    protected isPlayerOne: boolean
    private winConditon: Object[][] = [
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 2]],
        [[0, 3], [1, 3], [2, 3]],
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [2, 0], [2, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[1, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [0, 0]],
    ]

    constructor() {
        this.boardManager = new BoardManager({ width: 3, height: 3 });

        var appElement: HTMLElement = document.querySelector('#app');
        appElement.addEventListener('click', this.onClick.bind(this))
    }

    onClick(evt) {

        const { x, y } = evt.target.dataset;
        const cell = this.boardManager.getBoardById({ x: parseInt(x), y: parseInt(y) })
        const player = this.isPlayerOne ? 'player1' : 'player2'
        const accepted = cell.clicked(player)
        if (!accepted) {
            console.log('Occupied')
            return;
        }
        // Check win condition
        const victory = this.winConditon.some(cords => {
            return cords.every(cord => this.boardManager.getBoardById({ x: cord[0], y: cord[1] }).getClickedBy() === player)
        })
        console.log('VICTORY', victory)
        if (victory) {
            alert('Winner: ' + player)
        }
        this.isPlayerOne = !this.isPlayerOne
        console.log('CLICK', cell, this.boardManager.getBoard());
    }

    update() {

        this.render()
    }

    render() {
        this.boardManager.render()
    }

    haveWinner() {
        this.boardManager.getBoard() {
            // Lazy man validation

        }
    }
}


const gameManager: GameManager = new GameManager();
gameManager.update()