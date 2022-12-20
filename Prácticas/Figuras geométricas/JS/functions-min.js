(() => {
	'use strict';
	let e = document.getElementById('square-perimeter-button'),
		t = document.getElementById('square-area-button'),
		l = document.getElementById('triangle-perimeter-button'),
		n = document.getElementById('triangle-area-button'),
		r = document.getElementById('circle-diameter-button'),
		i = document.getElementById('circle-perimeter-button'),
		d = document.getElementById('circle-area-button');
	t.addEventListener('click', () => {
		let e = Number(document.getElementById('square-side-input').value),
			t;
		(e *= 2),
			(document.getElementById('answer-result').innerHTML = `El \xe1rea del cuadrado es: ${String(e)} cm<sup>2</sup>`);
	}),
		e.addEventListener('click', () => {
			let e = Number(document.getElementById('square-side-input').value),
				t;
			(e *= 4), (document.getElementById('answer-result').innerHTML = `El per\xedmetro del cuadrado es: ${String(e)} cm`);
		}),
		n.addEventListener('click', () => {
			let e,
				t = Number(document.getElementById('triangle-base-input').value),
				l = Number(document.getElementById('triangle-height-input').value),
				n = document.getElementById('answer-result');
			(e = (t * l) / 2), (n.innerHTML = `El \xe1rea del triangulo es: ${String(e)} cm<sup>2</sup>`);
		}),
		l.addEventListener('click', () => {
			let e,
				t = Number(document.getElementById('triangle-first-side-input').value),
				l = Number(document.getElementById('triangle-second-side-input').value),
				n = Number(document.getElementById('triangle-third-side-input').value),
				r = document.getElementById('answer-result');
			(e = t + l + n), (r.innerHTML = `El per\xedmetro del triangulo es: ${String(e)} cm`);
		}),
		r.addEventListener('click', () => {
			let e,
				t = Number(document.getElementById('circle-radius-input').value),
				l = document.getElementById('answer-result');
			(e = 2 * t), (l.innerHTML = `El diametro del circulo es: ${String(e)} cm`);
		}),
		d.addEventListener('click', () => {
			let e,
				t = Number(document.getElementById('circle-radius-input').value),
				l = document.getElementById('answer-result');
			(e = Math.pow(t, 2)), (l.innerHTML = `El \xe1rea del circulo es: ${String(e)}π cm<sup>2</sup>`);
		}),
		i.addEventListener('click', () => {
			let e,
				t = Number(document.getElementById('circle-radius-input').value),
				l = document.getElementById('answer-result');
			(e = 2 * t), (l.innerHTML = `El per\xedmetro del circulo es: ${String(e)}π cm`);
		});
})();
