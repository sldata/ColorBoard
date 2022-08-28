const box = document.querySelector('.box')
const speedBtns = document.querySelectorAll('[data-setting = "speed"]')
const colorBtns = document.querySelectorAll('[data-setting = "color"]')
const slider = document.querySelector('#slider')
const sliderInfo = document.querySelector('.slider-info')

const squares = 546
let sliderValue = 70
let range = 360

const createSquares = () => {
	for (let i = 0; i < squares; i++) {
		const square = document.createElement('div')
		square.classList.add('square')

		square.addEventListener('mouseover', () => setColor(square))
		square.addEventListener('mouseout', () => removeColor(square))
        
        
		box.appendChild(square)
	}
}

const setColor = square => {
    let h
    
	if (range === 360) {
        h = Math.floor(Math.random() * 360)
	} else {
        h = Math.floor(Math.random() * 60) + range
	}
    
	const s = slider.value + '%'
	const l = '50%'
    
	square.style.backgroundColor = `hsl(${h},${s},${l})`
}

const removeColor = (square) => {
    
    square.style.backgroundColor = `transparent`
    
}

createSquares()

removeColor()