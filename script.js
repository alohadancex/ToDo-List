const input = document.querySelector('.js-todo-input')

const form = document.querySelector('.js-form')
form.addEventListener('submit', e => {
	e.preventDefault()
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
//

addTodo('hello')
