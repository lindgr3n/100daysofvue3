var BoardManager = /** @class */ (function () {
    function BoardManager(config) {
        this.target = "app";
        var width = config.width, height = config.height, gameManager = config.gameManager;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.GameManager = gameManager;
        this.board = [];
        this.setup();
    }
    BoardManager.prototype.setup = function () {
        var appElement = document.querySelector("#" + this.target);
        for (var y = 0; y < this.HEIGHT; y++) {
            for (var x = 0; x < this.WIDTH; x++) {
                var cell = new BoardCell(x, y);
                this.board.push(cell);
            }
        }
    };
    BoardManager.prototype.render = function () {
        var appElement = document.querySelector("#" + this.target);
        for (var y = 0; y < this.HEIGHT; y++) {
            for (var x = 0; x < this.WIDTH; x++) {
                var cell = this.board[y * this.HEIGHT + x];
                this.board.push(cell);
                console.log(cell);
                appElement.appendChild(cell.generate());
            }
        }
    };
    return BoardManager;
}());
var BoardCell = /** @class */ (function () {
    function BoardCell(x, y, data) {
        this.x = x;
        this.y = y;
    }
    BoardCell.prototype.generate = function () {
        var element = document.createElement('div');
        element.classList.add('cell');
        element.classList.add("cell-" + this.x + "x" + this.y);
        return element;
    };
    BoardCell.prototype.clicked = function (player) {
        this.clickedBy = player;
    };
    return BoardCell;
}());
var GameManager = /** @class */ (function () {
    function GameManager() {
        this.boardManager = new BoardManager({ width: 3, height: 3 });
        var appElement = document.querySelector('#app');
        appElement.addEventListener('click', this.onClick.bind(this));
    }
    GameManager.prototype.onClick = function (evt) {
        console.log('CLICK', evt.target);
    };
    GameManager.prototype.update = function () {
        this.render();
    };
    GameManager.prototype.render = function () {
        this.boardManager.render();
    };
    return GameManager;
}());
var gameManager = new GameManager();
gameManager.update();
