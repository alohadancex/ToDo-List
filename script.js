const form = document.querySelector('.js-form')
form.addEventListener('submit', event => {
	event.preventDefault()

	const input = document.querySelector('.input')

	const text = input.value.trim()
	if (text !== '') {
		addTodo(text)
		input.value = ''
		input.focus()
	}
})

function renderTodo(todo) {
	const todoList = document.querySelector('.todos')
	const ischecked = todo.checked ? 'done' : ''
	const node = document.createElement('li')

	node.setAttribute('class', `todo-item ${ischecked}`)
	node.setAttribute('data-key', todo.id)

	node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `

	todoList.append(node)
}

let todoItems = []

function addTodo(text) {
	const todo = {
		text,
		checked: false,
		id: Date.now(),
	}

	todoItems.push(todo)
	renderTodo(todo)
}
