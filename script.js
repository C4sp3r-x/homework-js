'use string';
var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // результат 2, т.к. это инкремент, увеличение на 1
d = b++;
alert(d); // результат 1, т.к. это постфиксная запись инкремента, прибавляет 1,но возвращает старое значение, до выполнения новых операций
c = (2 + ++a);
alert(c); // результат 5, т.к. в первом примере результат 2, прибавляем 2 и увеличиваем еще на один
d = (2 + b++);
alert(d); // результат 4, т.к.  во втором примере 1, прибавляем 2  и т.к. новая операция он увеличивает еще на один
alert(a); // результат 3, т. к. до это в операциях икремента 2 раза прибавили по 1 
alert(b); // результат 3, т. к. до это в операциях икремента 2 раза прибавили по 1

var a = 2;
var x = 1 + (a *= 2);
console.log(x); // результат 5, т.к. 2 умножается на 2 и прибавляется 1.

let a = -10;
let b = 5;
if (a > 0 && b > 0) {
    z = a - b;
} else if (a < 0 && b < 0) {
    z = a * b;
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    z = a + b;
}
console.log(z);

let x = 17;
switch (x) {
    case 1:
        console.log('Ваше число 1');
        break;
    case 2:
        console.log('Ваше число 2');
        break;
    case 3:
        console.log('Ваше число 3');
        break;
    case 4:
        console.log('Ваше число 4');
        break;
    case 5:
        console.log('Ваше число 5');
        break;
    case 6:
        console.log('Ваше число 6');
        break;
    case 7:
        console.log('Ваше число 7');
        break;
    case 8:
        console.log('Ваше число 8');
        break;
    case 9:
        console.log('Ваше число 9');
        break;
    case 10:
        console.log('Ваше число 10');
        break;
    case 11:
        console.log('Ваше число 11');
        break;
    case 12:
        console.log('Ваше число 12');
        break;
    case 13:
        console.log('Ваше число 13');
        break;
    case 14:
        console.log('Ваше число 14');
        break;
    case 15:
        console.log('Ваше число 15');
        break;
    default:
        console.log('Введите число от 1 дл 15');
        break;
}


function plus(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function MathOperation(a, b, operation) {
    switch (operation) {
        case plus:
            return a + b;
        case sub:
            return a - b;
        case multi:
            return a * b;
        case div:
            return a / b;
        default:
            return null;
    }
}