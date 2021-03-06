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
    private clickedBy: string;

    constructor(x, y, data?) {
        this.x = x;
        this.y = y;
    }

    generate(): HTMLElement {
        const element: HTMLElement = document.createElement('div')
        element.classList.add('cell')
        element.classList.add(`cell-${this.x}x${this.y}`)
        return element
    }

    clicked(player) {
        this.clickedBy = player;
    }
}

class GameManager {
    protected boardManager: BoardManager
    protected isPlayerOne: boolean

    constructor() {
        this.boardManager = new BoardManager({ width: 3, height: 3 });

        var appElement: HTMLElement = document.querySelector('#app');
        appElement.addEventListener('click', this.onClick.bind(this))
    }

    onClick(evt) {
        console.log('CLICK', evt.target);


    }

    update() {

        this.render()
    }

    render() {
        this.boardManager.render()
    }
}


const gameManager: GameManager = new GameManager();
gameManager.update()