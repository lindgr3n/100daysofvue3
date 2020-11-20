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
    BoardManager.prototype.getBoard = function () {
        return this.board;
    };
    BoardManager.prototype.getBoardById = function (_a) {
        var x = _a.x, y = _a.y;
        return this.board[y * this.HEIGHT + x];
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
        element.dataset.x = "" + this.x;
        element.dataset.y = "" + this.y;
        this.element = element;
        return element;
    };
    BoardCell.prototype.clicked = function (player) {
        if (this.clickedBy) {
            return false;
        }
        this.clickedBy = player;
        this.element.classList.add(player);
        return true;
    };
    BoardCell.prototype.getClickedBy = function () {
        return this.clickedBy;
    };
    return BoardCell;
}());
var GameManager = /** @class */ (function () {
    function GameManager() {
        this.winConditon = [
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 2]],
            [[0, 3], [1, 3], [2, 3]],
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [2, 0], [2, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[1, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [0, 0]],
        ];
        this.boardManager = new BoardManager({ width: 3, height: 3 });
        var appElement = document.querySelector('#app');
        appElement.addEventListener('click', this.onClick.bind(this));
    }
    GameManager.prototype.onClick = function (evt) {
        var _this = this;
        var _a = evt.target.dataset, x = _a.x, y = _a.y;
        var cell = this.boardManager.getBoardById({ x: parseInt(x), y: parseInt(y) });
        var player = this.isPlayerOne ? 'player1' : 'player2';
        var accepted = cell.clicked(player);
        if (!accepted) {
            console.log('Occupied');
            return;
        }
        // Check win condition
        var victory = this.winConditon.some(function (cords) {
            return cords.every(function (cord) { return _this.boardManager.getBoardById({ x: cord[0], y: cord[1] }).getClickedBy() === player; });
        });
        console.log('VICTORY', victory);
        if (victory) {
            alert('Winner: ' + player);
        }
        this.isPlayerOne = !this.isPlayerOne;
        console.log('CLICK', cell, this.boardManager.getBoard());
    };
    GameManager.prototype.update = function () {
        this.render();
    };
    GameManager.prototype.render = function () {
        this.boardManager.render();
    };
    GameManager.prototype.haveWinner = function () {
        this.boardManager.getBoard();
        {
            // Lazy man validation
        }
    };
    return GameManager;
}());
var gameManager = new GameManager();
gameManager.update();
