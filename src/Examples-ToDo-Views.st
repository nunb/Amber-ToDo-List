Smalltalk createPackage: 'Examples-ToDo-Views'!
Widget subclass: #TodoAppSection
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoAppSection methodsFor: 'initialization'!

initialize
	| announcer |
	super initialize.
	announcer := TodoAnnouncer current.
	announcer on: TodoAdded do: [ self refresh ].
	announcer on: TodoUpdated do: [ self refresh ].
	announcer on: TodoDeleted do: [ self refresh ].
	announcer on: TodoFiltered do: [ self refresh ].
! !

!TodoAppSection methodsFor: 'rendering'!

refresh
	[:html | self renderContentOn: html ] appendToJQuery: (root asJQuery empty).
!

renderContentOn: html
	TodoInput new renderOn: html.
    TodoMain new renderOn: html.
	TodoFooter new renderOn: html.
!

renderOn: html
	root := html section
		id: 'todoapp';
		with: [ self renderContentOn: html ].
! !

Widget subclass: #TodoCheckbox
	instanceVariableNames: 'root todo'
	package: 'Examples-ToDo-Views'!

!TodoCheckbox methodsFor: 'accessing'!

root
	^ root.
!

todo
	^ todo.
! !

!TodoCheckbox methodsFor: 'events'!

updateTodo: aTodo
	| builder newTodo |
	builder := TodoBuilder newWithTodo: aTodo.
	builder addIsDone: (aTodo isDone) not.
	newTodo := builder build.
	(TodoApp current) update: newTodo.
! !

!TodoCheckbox methodsFor: 'initialization'!

initialize
	super initialize.
!

initializeWithTodo: aTodo
	super initialize.
	todo := aTodo.
! !

!TodoCheckbox methodsFor: 'rendering'!

renderOn: html
	root := html input
    	type: 'checkbox';
		class: 'toggle';
		onClick: [ self updateTodo: (self todo) ].
	(todo isDone)
		ifTrue: [ (root element asJQuery) prop: 'checked' put: true ].
! !

!TodoCheckbox class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
!

newWithTodo: aTodo callback: aString
	^ self basicNew initializeWithTodo: aTodo callback: aString.
! !

Widget subclass: #TodoClearButton
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoClearButton methodsFor: 'accessing'!

root
	^ root.
!

root: aTagBrush
	root := aTagBrush.
! !

!TodoClearButton methodsFor: 'events'!

clearCompleted
	| completedItems |
	completedItems := (TodoApp current todos) select: [ :each | each isDone = true ].
	completedItems do: [ :each | TodoApp current remove: each ].
! !

!TodoClearButton methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoClearButton methodsFor: 'rendering'!

decorate
	|items|
	items := (TodoApp current todos) select: [ :each | each isDone = true ].
	^ 'Clear completed (', (items size), ')'.
!

renderContentOn: html
	html with: (self decorate).
!

renderOn: html
	root := html button
		id: 'clear-completed';
		style: ((TodoApp current completedTodos size >  0) ifTrue: [ '' ] ifFalse: ['display: none;']);
		with: [ (self renderContentOn: html) ];
		onClick: [ self clearCompleted ].
! !

Widget subclass: #TodoCount
	instanceVariableNames: 'root count'
	package: 'Examples-ToDo-Views'!

!TodoCount methodsFor: 'accessing'!

count
	^ TodoApp current activeTodos size.
!

root
	^ root
!

root: aTagBrush
	root := aTagBrush
! !

!TodoCount methodsFor: 'initialization'!

initialize
	| announcer |
	super initialize.
! !

!TodoCount methodsFor: 'rendering'!

decorate: aNumber
	| str |
	str := aNumber = 1
		ifTrue: [ ' item left' ]
		ifFalse: [ ' items left' ].
	^ str.
!

renderContentOn: html
	html with: [
		html strong: (self count).
		html with: (self decorate: (self count)) ].
!

renderOn: html
	root := html span
		id: 'todo-count';
		with: [ 
			self renderContentOn: html ].
! !

Widget subclass: #TodoDeleteButton
	instanceVariableNames: 'todo root'
	package: 'Examples-ToDo-Views'!

!TodoDeleteButton methodsFor: 'accessing'!

todo
	^ todo
! !

!TodoDeleteButton methodsFor: 'events'!

deleteTodo: aTodo
	TodoApp current remove: aTodo.
! !

!TodoDeleteButton methodsFor: 'initialization'!

initialize
	super initialize.
!

initializeWithTodo: aTodo
	super initialize.
	todo := aTodo.
! !

!TodoDeleteButton methodsFor: 'rendering'!

renderOn: html
	html button
		class: 'destroy';
		onClick: [ self deleteTodo: (self todo) ].
! !

!TodoDeleteButton class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Widget subclass: #TodoEditInput
	instanceVariableNames: 'root todo'
	package: 'Examples-ToDo-Views'!

!TodoEditInput methodsFor: 'accessing'!

root
	^ root
!

todo
	^ todo.
! !

!TodoEditInput methodsFor: 'initialization'!

initialize
	super initialize.
!

initializeWithTodo: aTodo
	super initialize.
	todo := aTodo.
! !

!TodoEditInput methodsFor: 'rendering'!

renderOn: html
	root := html input
		class: 'edit';
		value: (self todo) text.
! !

!TodoEditInput class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Widget subclass: #TodoFilterActive
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoFilterActive methodsFor: 'events'!

filterTodos
	TodoApp current filter: 'active'.
! !

!TodoFilterActive methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoFilterActive methodsFor: 'rendering'!

renderOn: html
	html li: [
		html a href: '#';
			class: ((TodoApp current filter = 'active') ifTrue: [ 'selected' ] ifFalse: [ '' ]);
			with: 'Active';
			onClick: [ self filterTodos ]].
! !

Widget subclass: #TodoFilterAll
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoFilterAll methodsFor: 'events'!

filterTodos
	TodoApp current filter: 'all'.
! !

!TodoFilterAll methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoFilterAll methodsFor: 'rendering'!

renderOn: html
	html li: [
		html a href: '#';
			class: ((TodoApp current filter = 'all') ifTrue: [ 'selected' ] ifFalse: [ '' ]);
			with: 'All';
			onClick: [ self filterTodos ]].
! !

Widget subclass: #TodoFilterCompleted
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoFilterCompleted methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoFilterCompleted methodsFor: 'rendering'!

filterTodos
	TodoApp current filter: 'completed'.
!

renderOn: html
	html li: [
		html a href: '#';
			class: ((TodoApp current filter = 'completed') ifTrue: [ 'selected' ] ifFalse: [ '' ]);
			with: 'Completed';
			onClick: [ self filterTodos ]].
! !

Widget subclass: #TodoFilters
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoFilters methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoFilters methodsFor: 'rendering'!

renderContentOn: html
	TodoFilterAll new renderOn: html.
	TodoFilterActive new renderOn: html.
	TodoFilterCompleted new renderOn: html.
!

renderOn: html
	html ul
		id: 'filters';
		with: [ self renderContentOn: html ].
! !

Widget subclass: #TodoFooter
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoFooter methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoFooter methodsFor: 'rendering'!

renderOn: html
	html footer
		id: 'footer';
		style: ((TodoApp current todos size > 0) ifTrue: [ '' ] ifFalse: [ 'display: none;' ]);
		with: [
			TodoCount new renderOn: html.
			TodoFilters new renderOn: html.
			TodoClearButton new renderOn: html. ]
! !

Object subclass: #TodoInfo
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoInfo methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoInfo methodsFor: 'rendering'!

renderOn: html
	html footer
		id: 'info';
		with: [ 
			html p with: 'Double-click to edit a todo'.
			html p with: 'Written by rbistolfi, @statonjr, & others'.
			html p: [
				html with: 'Part of '.
				html a href: 'http://todomvc.com'; with: 'TodoMVC']].
! !

Widget subclass: #TodoInput
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoInput methodsFor: 'adding/removing'!

addTodo: aTodo
	"Adds a Todo"
	(TodoApp current) add: aTodo.
! !

!TodoInput methodsFor: 'events'!

handleInput: anEvent
	| text builder |
    text := anEvent target value.
	(text size > 0)
		ifTrue: [ builder := (TodoBuilder new) addText: text. self addTodo: (builder build). ]
! !

!TodoInput methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoInput methodsFor: 'rendering'!

renderOn: html
	| input defaultText |
	defaultText := 'What needs to be done?'.
	html header
		id: 'header';
		with: [
				   html h1: 'todos'.
                   input := html input
				    id: 'new-todo';
                  	type: 'text';
					autofocus;
                  	onKeyUp: [ :event |
                                  (event keyCode = 13) ifTrue: [
                                    	self handleInput: event.
                                    	input asJQuery val: '' ] ] ].
	input element placeholder: defaultText.
! !

Object subclass: #TodoLabel
	instanceVariableNames: 'todo root'
	package: 'Examples-ToDo-Views'!

!TodoLabel methodsFor: 'accessing'!

root
	^ root.
!

todo
	^ todo.
! !

!TodoLabel methodsFor: 'initialization'!

initialize
	super initialize.
!

initializeWithTodo: aTodo
	super initialize.
	todo := aTodo.
! !

!TodoLabel methodsFor: 'rendering'!

renderOn: html
	root := html label with: (todo text).
! !

!TodoLabel class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Widget subclass: #TodoList
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoList methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoList methodsFor: 'rendering'!

renderContentOn: html
	(TodoApp current sortedTodos) do: [ :aTodo | (TodoListItem newWithTodo: aTodo) renderOn: html ]
!

renderOn: html
	root := html ul
		id: 'todo-list';
		with: [ self renderContentOn: html ].
! !

Widget subclass: #TodoListItem
	instanceVariableNames: 'root todo checkbox label button editInput'
	package: 'Examples-ToDo-Views'!

!TodoListItem methodsFor: 'accessing'!

button
	^ button.
!

checkbox
	^ checkbox.
!

editInput
	^ editInput
!

label
	^ label.
!

root
	^ root.
!

todo
	^ todo.
! !

!TodoListItem methodsFor: 'events'!

endEditingMode: anEvent
	| builder newTodo |
	(anEvent target value = '')
		ifTrue: [ TodoApp current remove: (self todo).]
		ifFalse: [
			builder := TodoBuilder newWithTodo: (self todo).
			builder addText: (anEvent target value).
			newTodo := builder build.
			(TodoApp current) update: newTodo.
			root asJQuery removeClass: 'editing'. ]
!

enterEditingMode
	root asJQuery addClass: 'editing'.
!

revertEditingMode
	root asJQuery removeClass: 'editing'.
!

setupEditingMode
	label root onDblClick: [ self enterEditingMode ].
	editInput root onKeyUp: [ :evt | self updateOnEnter: evt ].
!

updateOnEnter: anEvent
	(anEvent keyCode = 13)
		ifTrue: [ self endEditingMode: anEvent ]
		ifFalse: [ (anEvent keyCode = 27) ifTrue: [ self revertEditingMode ]].
! !

!TodoListItem methodsFor: 'initialization'!

initialize
	"FIXME: Raise an error"
	self initializeWithTodo: nil.
!

initializeWithTodo: aTodo
	super initialize.
	todo := aTodo.
	checkbox := TodoCheckbox newWithTodo: aTodo.
	button := TodoDeleteButton newWithTodo: aTodo.
	label := TodoLabel newWithTodo: aTodo.
	editInput := TodoEditInput newWithTodo: aTodo.
! !

!TodoListItem methodsFor: 'rendering'!

renderContentOn: html
	html div
		class: 'view';
		with: [
			checkbox renderOn: html.
			label renderOn: html.
			button renderOn: html. ].
	editInput renderOn: html.
	self setupEditingMode.
!

renderOn: html
	root := html li
		class: ((todo isDone) ifTrue: [ 'completed' ] ifFalse: [''] );
		id: (todo id);
		with: [ 
			self renderContentOn: html. ]
! !

!TodoListItem class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Widget subclass: #TodoMain
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoMain methodsFor: 'initialization'!

initialize
	| announcer |
	super initialize.
! !

!TodoMain methodsFor: 'rendering'!

renderOn: html
	html section
		id: 'main';
		style: ((TodoApp current todos size > 0) ifTrue: [''] ifFalse: [ 'display: none;' ]);
		with: [
			TodoToggle new renderOn: html.
            TodoList new renderOn: html. ].
! !

Object subclass: #TodoToggle
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoToggle methodsFor: 'convenience'!

todoStatus
	^ (TodoApp current todos) inject: #= into: [ :result :each | each isDone ].
! !

!TodoToggle methodsFor: 'events'!

markAllAsComplete
	| newItems |
	newItems := (TodoApp current todos) collect: [ :item | 
		| builder |
		builder := TodoBuilder newWithTodo: item.
		builder addIsDone: (self todoStatus) not.
		builder build. ].
	newItems do: [ :each | (TodoApp current) update: each. ].
! !

!TodoToggle methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoToggle methodsFor: 'rendering'!

renderOn: html
	| input label |
	input := html input
				    id: 'toggle-all';
                  	type: 'checkbox';
					onClick: [ self markAllAsComplete ].
	label := html label
					for: 'toggle-all';
					with: 'Mark all as complete'.
	input element.
	label element.
! !

