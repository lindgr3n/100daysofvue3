class BoardManager {
    constructor(config) {
        this.target = "app";
        const { width, height, gameManager } = config;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.GameManager = gameManager;
        this.render();
    }
    render() {
        const appElement = document.querySelector(`#${this.target}`);
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                const cell = new BoardCell(x, y);
                appElement.appendChild(cell);
            }
        }
    }
}
class BoardCell extends HTMLElement {
    constructor(x, y, data) {
        super()
        this.x = x;
        this.y = y;
    }
    generate() {
        const element = document.createElement('div');
        element.classList.add('cell');
        return element;
    }
}
class GameManager {
    constructor() {
    }
}
const boardManager = new BoardManager({ width: 3, height: 3 });
boardManager.render();
