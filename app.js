const white = 'rgb(255, 255, 255)';

const red = 'rgba(207, 16, 16, 0.805)';

const words = document.querySelectorAll('.word');
const valentine = document.querySelector('.valentine');
const carousel = document.querySelector('.carousel');

let i = 0;

const resetLetters = function (words, color) {
	for (let word of words) {
		word.style.color = color;
	}
};

const initialEffect = setInterval(function () {
	if (words[i]) {
		words[i].style.color = white;
	}
	if (i === 3) {
		setTimeout(function () {
			valentine.style.color = 'rgb(180, 65, 186)';
		}, 1000);
		setTimeout(function () {
			clearInterval(initialEffect);
			resetLetters(words, red);
			document.body.style.backgroundColor = 'rgb(137, 178, 250)';
            carousel.classList.remove('hide')
            carousel.classList.add('reveal')
		}, 2000);
	}
	i = i + 1;
}, 1000);
