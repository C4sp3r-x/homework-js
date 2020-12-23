'use strict';


/* const integer = {
    number: Math.ceil(Math.random() * 999),
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (integer.number <= 999) {
    integer.units = Math.floor(integer.number % 10);
    integer.tens = Math.floor(integer.number / 10 % 10);
    integer.hundreds = Math.floor(integer.number / 100 % 10);
} else {
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(integer);




let basket = [{
        product: "hat",
        price: 50,
        quantity: 1
    },
    {
        product: "sweather",
        price: 100,
        quantity: 2
    },
    {
        product: "hoody",
        price: 300,
        quantity: 3
    },
    {
        product: "t-shirt",
        price: 1000,
        quantity: 3
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price * prod.quantity;
    console.log(prod.product + ' стоит: ' + prod.price * prod.quantity);
}

console.log('Всего ' + basketPrice);


function countBasketPrice(basket) {
    let allBasketPrice = 0;
    for (let prod of basket) {
        allBasketPrice += prod.price * prod.quantity;
    }
    return allBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket)); */

function chessBoard() {

    const col = document.createElement('tr');
    const row = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let turn = true;

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');


        let tdd = document.createElement('td');
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (let j = 0; j < 8; j++) {

            if (j === 0)
                turn = !turn;

            let td = document.createElement('td');

            if (turn) {
                td.style.background = 'black';
            } else
                td.style.background = 'white';

            tr.appendChild(td);
            turn = !turn;
        }
        table.appendChild(tr);
    }


    for (let k = 0; k < 9; k++) {

        let td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.background = 'white';
        td.innerHTML = row[k];

        col.appendChild(td);

    }
    table.appendChild(col);

    document.body.appendChild(table);
}

chessBoard();