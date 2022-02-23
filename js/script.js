function chess(n, m) {
	const chess = document.querySelector(".board")
	for (let i = 0; i < n; i++) {
		let floor = document.createElement('div')
		floor.className = `floor${i} floor`
		chess.append(floor)
		for (let j = 0; j < m; j++) {
			let item = document.createElement('div')
			if (j % 2 === 0 && i % 2 === 0) item.className += 'item itemWhite'
			else if (j % 2 !== 0 && i % 2 !== 0) item.className += 'item itemWhite'
			else item.className += 'item itemBlack'
			floor.append(item)
		}
	}
}
let board = document.querySelector('.board')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

function update() {
	n = num1.value
	m = num2.value

	board.innerHTML = ''
	if (n !== '' && m !== '') {
		chess(n, m)
		let max = Math.max(n, m)
		let items = [...document.getElementsByClassName('item')]
		items.forEach(it => it.style.width = `${600 / max}px`)
		items.forEach(it => it.style.height = `${600 / max}px`)
	}
}
document.body.addEventListener('click', (event) =>{
	if (event.target === num1 || event.target === num2){
		update()
	}
})
document.body.onkeyup = () => {
	update()
}
board.onclick = () => {
	let items = [...document.getElementsByClassName('item')]
	console.log(items);
	if (board.innerHTML !== '') {
		items.forEach(item => {
			if (item.className.includes('itemWhite')) {
				item.classList.remove('itemWhite')
				item.classList.add('itemBlack')
			}
			else if (item.className.includes('itemBlack')) {
				item.classList.remove('itemBlack')
				item.classList.add('itemWhite')
			}
		})
	}
}
