export function debounce(fn, delay = 500) {
	let timerId;
	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => fn(...args), delay);
	};
}

export function addComma(num) {
	let arr = [...num.toString()];
	let newArr = arr
		.reverse()
		.map((v, i, a) => ((i + 1) % 3 == 0 && i + 1 != a.length ? "," + v : v))
		.reverse();
	return newArr.join("");
}
