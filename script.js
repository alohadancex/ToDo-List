const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todo')

form.addEventListener('submit', event => {
	event.preventDefault()
})

const text = input.value.trim()
if (text !== '') {
	addTodo(text)
	input.value = ''
	input.focuse()
}

function renderTodo(todo) {
	const isCheked = todo.checked ? 'done' : ''
	const node = document.createElement('li')
	console.log(node)
}

// function which will to add item
let todoItems = []

function addTodo(text) {
	const todo = {
		text,
		checked: false,
		id: Date.now(),
	}

	todoItems.push(todo)
	console.log(todoItems)
}
//

renderTodo('hello')
addTodo('hello')
