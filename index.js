let buttonAdd = document.querySelector('#add');
let buttonRemove = document.querySelector('#remove');
let input = document.querySelector('#input');

buttonAdd.addEventListener('click', () => {
	input.value = parseInt(input.value) + 1;
});

buttonRemove.addEventListener('click', () => {
	input.value = parseInt(input.value) - 1;
});