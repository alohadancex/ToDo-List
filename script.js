const form = document.getElementById('form')
const input = document.getElementById('input')
const todoList = document.getElementById('todo')

form.addEventListener('submit', event => {
	event.preventDefault()
})

const text = input.value.trim()
if (text !== '') {
	addTodo(text)
	input.value = ''
	input.focuse()
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

addTodo('hello')

//
