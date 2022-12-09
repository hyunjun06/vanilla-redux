const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counter = document.getElementById('counter');

let count = 0;

const updateCounter = () => {
  counter.innerText = count;
}

plus.addEventListener('click', () => {
  count++;
  updateCounter();
});

minus.addEventListener('click', () => {
  count--;
  updateCounter();
});
