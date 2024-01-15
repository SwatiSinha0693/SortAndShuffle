let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let isShuffled = false;
let numberWrapper = document.getElementById('main-container');

numbers.forEach((item) => {
  numberWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})

//Shuffling the numbers
function shuffle() {
  let array = [...numbers];
  isShuffled = true;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  render(array);
}

// Sorting Actions
function sort() {
  if (isShuffled) {
    render(numbers);
    isShuffled = false;
  }
}

function render(numbers) {
  numberWrapper.innerHTML = ''
  for (let i = 0; i < numbers.length; i++) {
    let numItem = document.createElement("li");
    numItem.innerHTML = numbers[i]
    numItem.setAttribute('data-item', numbers[i])
    numberWrapper.appendChild(numItem);
  }
}

render(numbers);
