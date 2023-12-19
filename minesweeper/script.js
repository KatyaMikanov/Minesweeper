//FIRST VARIANT


// function createField () {
//     let field = document.createElement("div");
//     field.classList.add('field');
//     body.append(field);
// }
// createField ();


// function startGame(width, height, bombs_count) {
//     let fieldForButtons = document.querySelector('.field');
//     const numberOfButtons = width * height;
//     fieldForButtons.innerHTML = '<button></button>'.repeat(numberOfButtons);
//     const cells = [...fieldForButtons.children];

//     let numberClosedButtons = numberOfButtons;

//     const bombs = [...Array(numberOfButtons).keys()]
//     .sort(() => Math.random() - 0.5)
//     .slice(0, bombs_count);
//     console.log (bombs);

//     fieldForButtons.addEventListener ('click', (event) => {
//         if (event.target.tagName !== 'BUTTON') {
//             return;
//         }

//         const indexEvent = cells.indexOf(event.target);
//         let column = indexEvent % width;
//         let row = Math.floor(indexEvent / width);

//         open(row, column);
//     })

//     function isValid(row, column) {
//         return (row >= 0
//             && row < height
//             && column >= 0
//             && column < width)
//     }

//     function open (row, column) {
//         if (!isValid(row, column)) return;

//         const index = row * width + column;
//         const cell = cells[index];

//         if (cell.disabled === true) return;

//        cell.disabled = true;


//         if (isBomb(row, column)) {

//             cell.innerHTML = 'X'; 
//             alert ('GAME OVER!');
//             return;
//         }

//         numberClosedButtons --;
//         if (numberClosedButtons <= bombs_count) {
//             alert ('Игра окончена. Попробуйте еще раз');
//             return;
//         }

//        const count = getMinesCount(row, column);

//        if (count !== 0) {
//         cell.innerHTML = count;

//         if (count === 1) {
//             cell.classList.add('num_one');
//         } else if (count === 2) {
//             cell.classList.add('num_two');
//         } else if (count === 3) {
//             cell.classList.add('num_three');
//         }
//         return;
//        }

//         for (let x = -1; x <= 1; x++) {
//             for (let y = -1; y <= 1; y++) {
//                 open(row + y, column + x);
//             }
//         }
//     }

//     function getMinesCount (row, column) {
//         let  count = 0;
//         for (let x=-1; x<=1; x++) {
//             for (let y=-1; y<=1; y++) {
//                 if (isBomb(row+y, column+x)) {
//                     count++
//                 }
//             }
//         }
//         return count;
//     }

//     function isBomb(row, column) {
//         if (!isValid(row, column)) return false;
//         let index = row * width + column;
//         return bombs.includes(index);
//     }
// }
// startGame(10, 10, 10);


// SECOND VARIANT
const body = document.querySelector ('body');

function createTitle () {
    let title = document.createElement("p");
    title.classList.add('title');
    title.innerHTML = 'Minesweeper';
    body.append(title);
}
createTitle ();


function createNavigation () {
    let nav = document.createElement("div");
    nav.classList.add('nav');
    body.append(nav);
}
createNavigation ();

let counter = document.querySelector('.div');
const nav = document.querySelector ('.nav');



let wrapper = document.createElement("div");
wrapper.classList.add('wrapper');
body.append(wrapper);


function Cell() {
    this.is_bomb = false;
    this.bombs_around = 0;
    this.is_open = false;
}

let game = {
    width: 10,
    height: 10,
    bombs_count: 10,
    open_count: 0,
lock_count: 0,
click_count: 0,
    field: [],
    fill_field: function () {
        this.field = [];
        for (let i = 0; i < this.width; i++) {
            let tmp = [];
            for (let j = 0; j < this.height; j++) {
                tmp.push(new Cell);
            }
            this.field.push(tmp);
        }

         for (let i = 1; i <= this.bombs_count;) {
             let x = parseInt(Math.random() * this.width - 0.0001);
             let y = parseInt(Math.random() * this.height - 0.0001);
            if (!(this.field[x][y].is_bomb)) {
                this.field[x][y].is_bomb = true;
                 i++;
            }
        }


    },

    bombs_around_counter: function (x, y) {
        let x_start = x > 0 ? x - 1 : x;
        let y_start = y > 0 ? y - 1 : y;
        let x_end = x < (this.width - 1) ? x + 1 : x;
        let y_end = y < (this.height - 1) ? y + 1 : y;
        let count = 0;
        for (let i = x_start; i <= x_end; i++) {
            for (let j = y_start; j <= y_end; j++) {
                if (this.field[i][j].is_bomb && !(x === i && y === j)) count++;
            }
        }
        this.field[x][y].bombs_around = count;
    },

    start_bombs_counter: function () {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.bombs_around_counter(i, j);
            }
        }
    },

    start: function () {
        this.open_count = 0;
this.lock_count = 0;
this.click_count = 0;    
        this.fill_field();
        this.start_bombs_counter();
    }
}

let page = {
    table: null,

    init: function () {

        this.game_interface.init();
    },
    game_interface: {
        init: function () {
            game.start();
            this.wrapper = document.querySelector('.wrapper');
            this.draw_field();
            let self = this;
             this.wrapper.addEventListener('click', function (e) {
               if (e.target.matches('td') && !(e.target.matches('.lock'))) {
                self.open(e);
game.click_count++;
clickCounter ();
console.log(game.click_count);
            }
              })
            this.wrapper.addEventListener('contextmenu', function (e) {
                if (e.target.matches('td')) self.lock(e);
            })
        },
        draw_field: function () {
            this.wrapper.innerHTML = '';
            let table = document.createElement('table');
            this.table = table;
            table.classList.add('table');
            for (let i = 0; i < game.height; i++) {
                let tr = document.createElement('tr');
                tr.classList.add('tr');
                for (let j = 0; j < game.width; j++) {
                    let td = document.createElement('td');
                    td.classList.add('td');
themeDar.addEventListener('click', function (e) {
td.classList.remove('td');
td.classList.add('td_dark');
})
themeLig.addEventListener('click', function (e) {
td.classList.remove('td_dark');
td.classList.add('td');
})

                    tr.appendChild(td);
                }

                table.appendChild(tr);
            }
            this.wrapper.appendChild(table);
        },
        open: function (e) {
            x = e.target.cellIndex;
            y = e.target.parentNode.rowIndex;
            this.recurse_open(x, y);

        },
        recurse_open: function (x, y) {
            let td = this.table.rows[y].children[x];
            if (game.field[x][y].is_open) return;
            if (game.field[x][y].is_bomb) {
                game.start();
                this.draw_field();
              alert('GAME OVER!');
td.innerHTML = 'X';
            } else {
                td.innerHTML = game.field[x][y].bombs_around;
                game.field[x][y].is_open = true;
                if (game.field[x][y].bombs_around === 0) {
                    let x_start = x > 0 ? x - 1 : x;
                    let y_start = y > 0 ? y - 1 : y;
                    for (let i = x_start; i <= x+1 && i<game.width; i++) {
                        for (let j = y_start; j <= y+1 && j<game.height; j++) {
                            this.recurse_open(i, j);
td.innerHTML = '';
                        }
                    }
                }
                td.classList.add('open');
                game.open_count++;

if (game.field[x][y].bombs_around === 1) {
td.classList.add('num_one');
} else if (game.field[x][y].bombs_around === 2) {
td.classList.add('num_two');
} else if (game.field[x][y].bombs_around === 3) {
td.classList.add('num_three');
} else if (game.field[x][y].bombs_around === 4) {
td.classList.add('num_four');
}
                if (game.width*game.height - game.bombs_count === game.open_count) {
                    alert ('YOU ARE WINNER!');
                    game.start();
                    this.draw_field();
                }
            }
        },
        lock: function (e) {
            x = e.target.cellIndex;
            y = e.target.parentNode.rowIndex;
            if (game.field[x][y].is_open) return;
            e.target.classList.toggle('lock');
            

if (e.target.matches('.lock')) {
game.lock_count++;
e.target.innerHTML = game.lock_count;
} else {
e.target.innerHTML = '';
game.lock_count--;
}
            e.preventDefault();
        }
    }
}

let time = document.querySelector('.time')
function createTime () {
    time = document.createElement("div");
    time.classList.add('time');
    time.innerHTML = 'Time';
    nav.append(time);
}
createTime ();


function createHandlerStart () {
    let start = document.createElement("div");
    start.classList.add('start');
    start.innerHTML = 'NEW GAME';
    nav.append(start);

    start.addEventListener('click', function (e) {

        game.start();
        page.game_interface.draw_field();
     })
}
createHandlerStart ();

//counter for click
function createClickCounter () {
    counter = document.createElement("div");
    counter.classList.add('counter');
    clickCounter ();
    nav.append(counter);
}
function clickCounter () {
   counter.innerHTML = game.click_count;
}
createClickCounter ();


//LEVELS
let levels = document.querySelector ('.levels');
function createLevels () {
    let level = document.createElement("div");
    level.classList.add('level');
    level.innerHTML = 'LEVELS'
    body.append(level);
}
createLevels ();
//div for levels
let wrapLevels = document.querySelector ('.wrapLevels');
function createWrapperForLevels () {
    wrapLevels = document.createElement("div");
    wrapLevels.classList.add('wrapLevels');
    body.append( wrapLevels);
}
createWrapperForLevels ();


//Level BASIC
function createBasic () {
    let levelBasic = document.createElement("div");
    levelBasic.classList.add('levelBasic');
    levelBasic.innerHTML = 'BASIC';
    wrapLevels.append(levelBasic);
}
createBasic ();
let levBasic = document.querySelector ('.levelBasic');
levBasic.addEventListener('click', function (e) {
game.width=10;
game.height=10;
page.init();
})


//Level MIDDLE
function createMiddle () {
    let levelMiddle = document.createElement("div");
    levelMiddle.classList.add('levelMiddle');
    levelMiddle.innerHTML = 'MIDDLE';
    wrapLevels.append( levelMiddle);
}
createMiddle ();
let levMiddle = document.querySelector ('.levelMiddle');
levMiddle.addEventListener('click', function (e) {
game.width=15;
game.height=15;
page.init();
})

//Level PROFESSIONAL
function createProf () {
    let levelProf = document.createElement("div");
    levelProf.classList.add('levelProf');
    levelProf.innerHTML = 'PROFESSIONAL';
    wrapLevels.append(levelProf);
}
createProf ();
let levProf = document.querySelector ('.levelProf');
levProf.addEventListener('click', function (e) {
game.width=25;
game.height=25;
page.init();
})


//THEMES
let themes = document.querySelector ('.themes');
function createThemes () {
    let theme = document.createElement("div");
    theme.classList.add('theme');
    theme.innerHTML = 'THEMES'
    body.append(theme);
}
createThemes ();
//wrapper for themes
let wrapThemes = document.querySelector ('.wrapThemes');
function createWrapperForThemes () {
    wrapThemes = document.createElement("div");
    wrapThemes.classList.add('wrapThemes');
    body.append( wrapThemes);
}
createWrapperForThemes ();

//light theme
function createLight () {
    let themeLight = document.createElement("div");
    themeLight.classList.add('themeLight');
    themeLight.innerHTML = 'LIGHT';
    wrapThemes.append(themeLight);
}
createLight ();
let themeLig = document.querySelector ('.themeLight');

function createDark () {
    let themeDark = document.createElement("div");
    themeDark.classList.add('themeDark');
    themeDark.innerHTML = 'DARK';
    wrapThemes.append(themeDark);
}
createDark ();
let themeDar = document.querySelector ('.themeDark');



//modal window
// function modalWindow () {
// let modalWindow = document.createElement("div");
// modalWindow.classList.add('modalWindow');
// modalWindow.innerHTML = 'GAME OVER!';
// body.append(modalWindow);
// }
// modalWindow ();
// let modalWind = document.querySelector ('.modalWindow');


window.onload = function () {
    page.init();
}
