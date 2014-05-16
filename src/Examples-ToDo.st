Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #FooterSection
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

!FooterSection methodsFor: 'initialization'!

initialize
	super initialize.
! !

!FooterSection methodsFor: 'rendering'!

decorate: num
	num = 1
		ifTrue: [ '1 item left' ]
		ifFalse: [ num, ' items left' ].
!

renderOn: html
	html footer
		id: 'footer';
		with: [
			self renderTodoCountOn: html.
			self renderTodoFiltersOn: html.]
!

renderTodoCountOn: html
	"Renders the count of Todos that are not done in the footer"
	html span
		id: 'todo-count';
		with: '1 item left'.
!

renderTodoFiltersOn: html
	html ul
		id: 'filters';
		with: [
			html li: [ html a href: '#/'; with: 'All'. ].
			html li: [ html a href: '#/active'; with: 'Active'. ].
			html li: [ html a href: '#/selected'; with: 'Selected'. ]].
! !

Widget subclass: #MainSection
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

!MainSection methodsFor: 'initialization'!

initialize
	super initialize.
! !

!MainSection methodsFor: 'rendering'!

renderOn: html
	html section
		id: 'main';
		with: [
			self renderToggleTodosOn: html.
            self renderTodoListItemsOn: html. ].
!

renderTodoListItemsOn: html
	| todos |
	todos := TodoStorage singleton items.
	html ul
		id: 'todo-list';
		with: [ todos do: [ :aTodo | aTodo renderOn: html ]].
!

renderToggleTodosOn: html
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

Widget subclass: #Todo
	instanceVariableNames: 'isDone text id'
	package: 'Examples-ToDo'!

!Todo methodsFor: 'accessing'!

id
	^ id
!

id: aString
	id := aString
!

isDone
	^ isDone
!

isDone: aBool
	isDone := aBool.
!

onDeleteClickedDo: aBlock
	onDeleteClicked := aBlock
!

onTodoChangedDo: aBlock
	onTodoChanged := aBlock
!

text
	^ text
!

text: anObject
	text := anObject
!

toggleIsDone
	self isDone: isDone not
! !

!Todo methodsFor: 'initializing'!

initialize
	super initialize.
	id := Date now asNumber.
	isDone := false.
! !

!Todo methodsFor: 'rendering'!

renderOn: html
	| input label delete |
	html li: [
		html div
			class: 'view';
			with: [
                  	input := html input
                  		type: 'checkbox';
						class: 'toggle';
						onClick: [ console log: 'mark me as done'. ].
					label := html label with: self text.
					delete := html button
						class: 'destroy';
						onClick: [ console log: 'delete me'. ]]].
! !

!Todo methodsFor: 'testing'!

= aTodo
	^ self id = aTodo id
! !

!Todo class methodsFor: 'not yet classified'!

fromDictionary: aDict
	| todo |
	todo := self new.
	todo id: (aDict at: 'id').
	todo text: (aDict at: 'text').
	todo isDone: (aDict at: 'isDone').
	^ todo
!

fromDictionary: aDict withCallback: aBlock
	| todo |
	todo := self fromDictionary: aDict.
	todo onTodoChangedDo: aBlock.
	^ todo
!

fromDictionary: aDict withTodoChangedCallback: aBlock withDeleteClickedCallback: oBlock
	| todo |
	todo := self fromDictionary: aDict.
	todo onTodoChangedDo: aBlock.
	todo onDeleteClickedDo: oBlock.
	^ todo
!

newWithText: aString
	^ self new text: aString
! !

Widget subclass: #TodoList
	instanceVariableNames: 'storage'
	package: 'Examples-ToDo'!

!TodoList methodsFor: 'adding/removing'!

addTodo: aTodo
	aTodo onTodoChangedDo: [ :todo | storage at: (storage indexOf: todo) put: todo ].
	aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].
    storage add: aTodo.
!

removeTodo: aTodo
	storage remove: aTodo.
	('li#', aTodo id) asJQuery remove
! !

!TodoList methodsFor: 'events'!

handleInput: anEvent
	| text todo |
    text := anEvent target value.
    todo := Todo newWithText: text.
 	self addTodo: todo.
! !

!TodoList methodsFor: 'initializing'!

initialize
	super initialize.
	storage := TodoStorage singleton.
! !

!TodoList methodsFor: 'rendering'!

renderBodyOn: html
	html section
		id: 'todoapp';
		with: [
                  self renderFormOn: html.
                  self renderTodosOn: html ]
!

renderFooterOn: html
	html footer
		id: 'info';
		with: [ 
			html p with: 'Double-click to edit a todo'.
			html p with: 'Written by rbistolfi'.
			html p: [
				html with: 'Part of '.
				html a href: 'http://todomvc.com'; with: 'TodoMVC']].
!

renderFormOn: html
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
									    self renderMainAndFooterSectionsOn: html.
                                    	self handleInput: event.
                                    	input asJQuery val: '' ] ] ].
	input element placeholder: defaultText.
!

renderMainAndFooterSectionsOn: html
	| footer main |
	footer := FooterSection new.
	main := MainSection new.
	main renderOn: html.
	footer renderOn: html.
!

renderOn: html
	self renderBodyOn: html.
    self renderFooterOn: html.
!

renderTodosOn: html
	| todos |
	todos := storage items.
	todos size = 0
		ifFalse: [ self renderMainAndFooterSectionsOn: html ]
! !

!TodoList class methodsFor: 'not yet classified'!

run
	self new appendToJQuery: 'body' asJQuery
! !

Object subclass: #TodoStorage
	instanceVariableNames: 'items'
	package: 'Examples-ToDo'!

!TodoStorage methodsFor: 'accessing'!

at: anIndex
	^ array at: anIndex
!

at: anIndex put: anObject
	array at: anIndex put: anObject.
	self save
!

indexOf: anObject
	^ array indexOf: anObject
!

items
	"Returns an Array of all Todos in TodoStorage"
	| todos |
	todos := self parseTodoItems: (localStorage getItem: 'todos-amber' ).
	^ todos collect: [ :todo | Todo fromDictionary: todo ].
!

length
	^ self size
!

parseTodoItems: json
	"Parses serialized JSON todos in localStorage and returns an Array of Todo objects"
	^ Smalltalk readJSObject: (JSON parse: json).
! !

!TodoStorage methodsFor: 'adding/removing'!

add: anObject
	items add: anObject.
	self save.
!

remove: anObject
	| d |
	d := items detect: [ :each | each asJSON = anObject asJSON ]. 
	items remove: d.
	self save
! !

!TodoStorage methodsFor: 'initializing'!

initialize
	items := self fetch.
	^ self.
!

initializeStorage
	" Initialize localStorage with an empty Array"
	localStorage setItem: 'todos-amber' value: (Array new) asJSONString.
	^ Array new.
! !

!TodoStorage methodsFor: 'iterating'!

collect: aBlock
	^ array collect: aBlock
!

detect: aBlock
	^ array detect: aBlock
!

do: aBlock
	array do: aBlock.
	self save.
!

select: aBlock
	^ array select: aBlock
! !

!TodoStorage methodsFor: 'persistence'!

fetch
	| storedTodos todos |
	storedTodos := (localStorage getItem: 'todos-amber')
		ifNil: [ todos := self initializeStorage ]
		ifNotNil: [ todos := self load ].
	^ todos.
!

load
	"Loads the serialized items from localStorage"
	| str |
	str := (localStorage getItem: 'todos-amber').
	Smalltalk readJSObject: (JSON parse: str).
!

save
	localStorage setItem: 'todos-amber' value: items asJSONString
! !

TodoStorage class instanceVariableNames: 'singleton'!

!TodoStorage class methodsFor: 'initialization'!

singleton
	| UniqueInstance |
	UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].
    ^ UniqueInstance.
! !

