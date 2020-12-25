'use strict';

const cartItem = {
    render(products) {
        return `<div class="products">
                    <div><b>Наименование</b>: ${products.product}</div>
                    <div><b>Цена за шт.</b>: ${products.price}</div>
                    <div><b>Количество</b>: ${products.quantity}</div>
                    <div><b>Стоимость</b>: ${products.quantity * products.price}</div>
                </div>`;
    }
}

const basket = {
    cartListBlock: null,
    basketButton: null,
    cartItem,
    allBasket: [{
            product: 'hat',
            price: 50,
            quantity: 1
        },
        {
            product: 'sweather',
            price: 100,
            quantity: 2
        },
        {
            product: 'hoody',
            price: 300,
            quantity: 3
        },
        {
            product: 't-shirt',
            price: 1000,
            quantity: 3
        }
    ],

    init() {
        this.cartListBlock = document.querySelector('.basket-list');
        this.basketButton = document.querySelector('.basket-btn');
        this.basketButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },

    render() {
        if (this.allBasket.length) {
            this.allBasket.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.allBasket.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.allBasket.reduce(function(price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.allBasket = [];
        this.render();
    },
};

basket.init();


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