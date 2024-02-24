const readlineSync = require('readline-sync');

const calculator = {
    number: readlineSync.question('Введите первое число: '),
    secondNumber: readlineSync.question('Введите второе число: '),
    sum: function() {
        return Number(this.number) + Number(this.secondNumber);
    },
    mult: function() {
        return Number(this.number) * Number(this.secondNumber);
    }
}

console.log('Сумма двух чисел равна ' + calculator.sum());
console.log('Произведение двух чисел равно ' + calculator.mult());

// Вроде как работает, не проверял через VS, у меня не импортируется в VS через винду, делал в JS online, там импортировалось, да и в целом, задание по сути выполенено
