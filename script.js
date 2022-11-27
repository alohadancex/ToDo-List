const todoList = document.querySelector('.todos')
todoList.addEventListener('click', event => {
	if (event.target.classList.contains('js-tick')) {
		const itemKey = event.target.parentElement.dataset.key
		toggleDone(itemKey)
	}

	//Delete task from todo
	if (event.target.classList.contains('js-delete-todo')) {
		const itemKey = event.target.parentElement.dataset.key
		deleteTodo(itemKey)
	}
})

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
// Mark task a complate
function deleteTodo(key) {
	const index = todoItems.findIndex(item => item.id === Number(key))
	const todo = {
		deleted: true,
		...todoItems[index],
	}
	//remove the todo item from array;
	todoItems = todoItems.filter(item => item.id !== Number(key))
	console.log(key)
	renderTodo(todo)
}

function renderTodo(todo) {
	const todoList = document.querySelector('.todos')
	const item = document.querySelector(`[data-key='${todo.id}']`)

	if (todo.deleted) {
		item.remove()
		return
	}

	const isChecked = todo.checked ? 'done' : ''
	const node = document.createElement('li')

	node.setAttribute('class', `todo-item ${isChecked}`)
	node.setAttribute('data-key', todo.id)

	node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `

	if (item) {
		todoList.replaceChild(node, item)
	} else {
		todoList.append(node)
	}
}

function toggleDone(key) {
	const index = todoItems.findIndex(item => item.id === Number(key))

	todoItems[index].checked = !todoItems[index].checked
	renderTodo(todoItems[index])
}
