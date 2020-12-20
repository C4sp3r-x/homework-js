'use strict';


const integer = {
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

console.log("Стоимость корзины: " + countBasketPrice(basket));



/* const basket = {
    products: [{
            title: 'hat',
            price: 1000,
            quantity: 2,
        },
        {
            title: 'sweather',
            price: 3000,
            quantity: 4,
        },
        {
            title: 'socks',
            price: 500,
            quantity: 7,
        }
    ],

    totalPrice() {
        return this.products.reduce((sum, good) => {
            return sum + good.price * good.quantity;
        }, 0)
    },

    goodsCount() {
        return this.products.length;
    }
};

console.log(basket); */