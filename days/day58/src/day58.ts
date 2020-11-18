class BoardManager {
    protected target: string = "app"
    protected WIDTH: number;
    protected HEIGHT: number;
    protected GameManager: GameManager;

    constructor(config) {
        const { width, height, gameManager } = config;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.GameManager = gameManager;
        this.render()
    }

    render() {
        const appElement = document.querySelector(`#${this.target}`)
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                const cell: any = new BoardCell(x, y);
                appElement.appendChild(cell);
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
        element.classList.add('cell')
        return element
    }
}

class GameManager {
    constructor() {

    }
}

const boardManager: BoardManager = new BoardManager({ width: 3, height: 3 });
boardManager.render();