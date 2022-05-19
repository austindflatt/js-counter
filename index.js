let buttonAdd = document.querySelector('#add');
let buttonRemove = document.querySelector('#remove');
let input = document.querySelector('#input');
let star = document.querySelector('#star')
let count = 0;

buttonAdd.addEventListener('click', () => {
	input.value = parseInt(input.value) + 1;
	addStar();
});

buttonRemove.addEventListener('click', () => {
	input.value = parseInt(input.value) - 1;
	if(count > 0){
		count -= 1;
		input.value = count;
		removeStar();
	}
});

const addStar = () => {
	const starDiv = document.createElement("div");
	starDiv.id = "starDiv";
	const image = document.createTextNode("*");
	starDiv.appendChild(image);
	star.appendChild(starDiv);
}

const removeStar = () => {
	let lastStar = document.querySelector("#star :last-of-type");
	star.removeChild(lastStar);
}