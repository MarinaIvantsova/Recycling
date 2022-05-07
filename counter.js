let buttonCount = document.querySelector('.count');
let counter = document.getElementById('counter-id');
let result = document.querySelector('.result');
const priceForOne = 100;

const countMoney = () => {
let price = priceForOne * counter.value;
return result.textContent = 'Спасибо! Вы помогли фонду суммой ' + price + ' рублей!';
}

countMoney();
buttonCount.addEventListener('click', countMoney);
