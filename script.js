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

const form = document.querySelector('.js-form')
form.addEventListener('sumbit', e => {
	e.preventDefault()

	const input = document.querySelector('js-todo-input')

	const text = input.value.trim()
	if (text !== '') {
		add(text)
		input.value = ''
		input.focuse()
	}
})
