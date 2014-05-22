Smalltalk createPackage: 'Examples-ToDo-Views'!
Widget subclass: #TodoAppSection
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoAppSection methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoAppSection methodsFor: 'rendering'!

renderOn: html
	html section
		id: 'todoapp';
		with: [
                  TodoInput new renderOn: html.
                  TodoMain new renderOn: html.
				  TodoFooter new renderOn: html. ].
! !

Widget subclass: #TodoCheckbox
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Views'!

!TodoCheckbox methodsFor: 'accessing'!

todo
	^ todo.
! !

!TodoCheckbox methodsFor: 'events'!

updateTodo: aTodo
	| announcer builder newTodo |
	builder := TodoBuilder newWithTodo: aTodo.
	builder addIsDone: (aTodo isDone) not.
	newTodo := builder build.
	todo := newTodo.
	announcer := TodoAnnouncer current.
	announcer announce: (TodoUpdated newWithTodo: newTodo).
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
	html input
    	type: 'checkbox';
		class: 'toggle';
		onClick: [ self updateTodo: (self todo) ].
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

!TodoClearButton methodsFor: 'announcing'!

announceClearCompleted
	| announcer |
	announcer := TodoAnnouncer current.
	announcer announce: TodoClearCompleted new.
! !

!TodoClearButton methodsFor: 'initialization'!

initialize
	| announcer |
	super initialize.
	announcer := TodoAnnouncer current.
	announcer on: TodoUpdated do: [ self toggle ].
! !

!TodoClearButton methodsFor: 'rendering'!

decorate
	|items|
	items := TodoApp todos select: [ :each | each isDone = true ].
	^ 'Clear completed (', (items size), ')'.
!

refresh
	[:html | self renderContentOn: html ] appendToJQuery: (root asJQuery empty).
!

remove
	'#clear-completed' asJQuery hide.
!

renderContentOn: html
	html with: (self decorate).
!

renderOn: html
	root := html button
		id: 'clear-completed';
		style: 'display: none;';
		with: [ (self renderContentOn: html) ];
		onClick: [ console log: 'clear completed' ].
!

show
	'#clear-completed' asJQuery show.
!

toggle
	| items |
	items := (TodoApp todos select: [ :each | each isDone = true ]).
	(items size > 0)
		ifTrue: [ self show. self refresh. ] 
		ifFalse: [ self remove. ].
! !

Widget subclass: #TodoCount
	instanceVariableNames: 'root count'
	package: 'Examples-ToDo-Views'!

!TodoCount methodsFor: 'accessing'!

count
	| active |
	active := TodoApp todos select: [ :each | each isDone = false ].
	^ active size.
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
	announcer := TodoAnnouncer current.
	announcer on: TodoAdded do: [ self refresh ].
	announcer on: TodoUpdated do: [ self refresh ].
! !

!TodoCount methodsFor: 'rendering'!

decorate: aNumber
	| str |
	str := aNumber = 1
		ifTrue: [ ' item left' ]
		ifFalse: [ ' items left' ].
	^ str.
!

refresh
	[:html | self renderContentOn: html ] appendToJQuery: (root asJQuery empty).
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
	"FIXME: State!!"
	console log: 'delete'
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
		onClick: [ console log: 'delete todo' ].
! !

!TodoDeleteButton class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Widget subclass: #TodoFilters
	instanceVariableNames: 'root'
	package: 'Examples-ToDo-Views'!

!TodoFilters methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoFilters methodsFor: 'rendering'!

renderOn: html
	html ul
		id: 'filters';
		with: [
			html li: [ html a href: '#'; class: 'selected'; onClick: [ console log: 'All' ]; with: 'All'. ].
			html li: [ html a href: '#'; with: 'Active'. ].
			html li: [ html a href: '#'; with: 'Completed'. ]].
! !

Widget subclass: #TodoFooter
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoFooter methodsFor: 'initialization'!

initialize
	| announcer |
	super initialize.
	announcer := TodoAnnouncer current.
	announcer on: TodoAdded do: [ self show ].
! !

!TodoFooter methodsFor: 'rendering'!

renderOn: html
	html footer
		id: 'footer';
		style: ((TodoApp todos size > 0) ifTrue: [ '' ] ifFalse: [ 'display: none;' ]);
		with: [
			TodoCount new renderOn: html.
			TodoFilters new renderOn: html.
			TodoClearButton new renderOn: html. ]
!

show
	'#footer' asJQuery show.
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
	"FIXME: State!!"
	console log: 'Adding todo:'.
	console log: aTodo.
! !

!TodoInput methodsFor: 'events'!

handleInput: anEvent
	| text builder |
    text := anEvent target value.
    builder := (TodoBuilder new) addText: text.
 	self addTodo: (builder build).
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
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Views'!

!TodoLabel methodsFor: 'accessing'!

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
	html label with: (todo text).
! !

!TodoLabel class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Widget subclass: #TodoList
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoList methodsFor: 'initialization'!

initialize
	| announcer |
	super initialize.
	announcer := TodoAnnouncer current.
	announcer on: TodoAdded do: [ :aTodoAdded | self appendTodoListItem: (TodoListItem newWithTodo: (aTodoAdded todo)) ].
	announcer on: TodoDeleted do: [ :aTodoDeleted | self removeFromList: (aTodoDeleted todo). ].
	announcer on: TodoClearCompleted do: [ self clearCompleted. ].
! !

!TodoList methodsFor: 'rendering'!

appendTodoListItem: todoListItem
	"Adds a list item to the end of list items"
	todoListItem appendToJQuery: '#todo-list' asJQuery.
!

clearCompleted
	console log: 'Remove completed items!!'
!

removeFromList: aTodo
	"Removes a list item from the list of items"
	('#', (aTodo id)) asJQuery remove.
!

renderOn: html
	| todos |
	todos := TodoApp todos.
	html ul
		id: 'todo-list';
		with: [ todos do: [ :aTodo | (TodoListItem newWithTodo: aTodo) renderOn: html ]].
! !

Widget subclass: #TodoListItem
	instanceVariableNames: 'todo checkbox label button'
	package: 'Examples-ToDo-Views'!

!TodoListItem methodsFor: 'accessing'!

button
	^ button.
!

checkbox
	^ checkbox.
!

label
	^ label.
!

todo
	^ todo.
! !

!TodoListItem methodsFor: 'initialization'!

initialize
	"FIXME: Raise an error"
	self initializeWithTodo: nil.
!

initializeWithTodo: aTodo
	| announcer |
	super initialize.
	todo := aTodo.
	checkbox := TodoCheckbox newWithTodo: aTodo.
	button := TodoDeleteButton newWithTodo: aTodo.
	label := TodoLabel newWithTodo: aTodo.
	announcer := TodoAnnouncer current.
	announcer on: TodoUpdated do: [ :aTodoUpdated | self updateTodo: (aTodoUpdated todo) ].
! !

!TodoListItem methodsFor: 'rendering'!

renderOn: html
	html li 
		"FIXME: State!!"
		class: ((todo isDone) ifTrue: [ "completed" ] ifFalse: [''] );
		id: (todo id);
		with: [
			html div
				class: 'view';
				with: [
                  	checkbox renderOn: html.
					label renderOn: html.
					button renderOn: html. ]].
!

updateTodo: aTodo
	"Toggles whether this Todo isDone"
	console log: aTodo.
	aTodo isDone
		ifTrue: [ ('#', aTodo id) asJQuery addClass: 'completed'. ]
		ifFalse: [ ('#', aTodo id) asJQuery removeClass: 'completed' ].
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
	announcer := TodoAnnouncer current.
	announcer on: TodoAdded do: [ self show ].
! !

!TodoMain methodsFor: 'rendering'!

renderOn: html
	html section
		id: 'main';
		style: ((TodoApp todos size > 0) ifTrue: [''] ifFalse: [ 'display: none;' ]);
		with: [
			TodoToggle new renderOn: html.
            TodoList new renderOn: html. ].
!

show
	'#main' asJQuery show.
! !

Object subclass: #TodoToggle
	instanceVariableNames: ''
	package: 'Examples-ToDo-Views'!

!TodoToggle methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoToggle methodsFor: 'rendering'!

renderOn: html
	| input label |
	input := html input
				    id: 'toggle-all';
                  	type: 'checkbox'.
	label := html label
					for: 'toggle-all';
					with: 'Mark all as complete'.
	input element.
	label element.
! !

