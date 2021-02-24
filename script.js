'use strict';

const products = [{

            product: 'Шляпа',
            price: 50,
            quantity: 1
        },
        {
            product: 'Свитер',
            price: 100,
            quantity: 2
        },
        {
            product: 'Худи',
            price: 300,
            quantity: 3
        },
        {
            product: 'Майка',
            price: 1000,
            quantity: 3
        }
    ],

    basket = [],
    goodsBlock = document.getElementsByClassName('goods')[0];

for (let i = 0; i < products.length; i++) {
    let good = document.createElement('div');
    good.setAttribute('class', 'good');
    good.innerHTML = '<h3>' + products[i].product + '</h3>';
    good.innerHTML += '<span><b>Цена:</b> ' + products[i].price + '</span>';
    good.innerHTML += '<a id="' + i + '" href="#" class="add">Добавить в корзину</a>';
    goodsBlock.appendChild(good);
    document.getElementById(i).addEventListener('click', addInBasket);
}

function addInBasket() {
    if (checkBasket(this.id)) {
        let newOrder = {
            id: this.id,
            count: 1
        };
        basket.push(newOrder);
    } else {
        for (let key in basket) {
            if (basket[key].id == this.id) ++basket[key].count;
        }
    }
    drawBasket();
}

function checkBasket(id) {
    if (basket.length > 0) {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id == id) return false;
        }
    }
    return true;
}

function drawBasket() {
    let basketBlock = document.getElementsByClassName('basket')[0];
    basketBlock.innerHTML = '<table class="basketTable">';
    '<tr>';
    '<td>Наименование товара</td>';
    '<td>Цена за 1 штуку</td>';
    '<td>Количество штук</td>';
    '<td>Итого</td>';
    '</tr>';
    '</table>';

    let basketTable = document.getElementsByClassName('basketTable')[0],
        fullOrderPrice = 0;

    for (let i = 0; i < basket.length + 1; i++) {
        let rowOrder = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdPrice = document.createElement('td'),
            tdHowMuch = document.createElement('td'),
            tdSumPrice = document.createElement('td');

        if (i < basket.length) {
            tdName.innerText = products[basket[i].id].product;
            tdPrice.innerText = products[basket[i].id].price;
            tdHowMuch.innerText = basket[i].count;
            tdSumPrice.innerText = basket[i].count * products[basket[i].id].price;
            fullOrderPrice += basket[i].count * products[basket[i].id].price;
        } else {
            tdName.innerText = 'Итого';
            tdPrice.innerText = '';
            tdHowMuch.innerText = '';
            tdSumPrice.innerText = fullOrderPrice;
        }

        rowOrder.appendChild(tdName);
        rowOrder.appendChild(tdPrice);
        rowOrder.appendChild(tdHowMuch);
        rowOrder.appendChild(tdSumPrice);
        basketTable.appendChild(rowOrder);
    }
}