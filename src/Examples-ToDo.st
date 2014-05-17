Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #FooterSection
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

!FooterSection methodsFor: 'initialization'!

initialize
	super initialize.
! !

!FooterSection methodsFor: 'rendering'!

renderOn: html
	html footer
		id: 'footer';
		style: ((TodoStorage singleton items size = 0) ifTrue: [ 'display: none;' ]);
		with: [
			TodoCount singleton renderOn: html.
			TodoFilters singleton renderOn: html.]
!

renderTodoFiltersOn: html
	html ul
		id: 'filters';
		with: [
			html li: [ html a href: '#/'; with: 'All'. ].
			html li: [ html a href: '#/active'; with: 'Active'. ].
			html li: [ html a href: '#/completed'; with: 'Completed'. ]].
!

show
	'#footer' asJQuery show.
! !

!FooterSection class methodsFor: 'initialization'!

singleton
	| UniqueInstance |
	UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].
    ^ UniqueInstance.
! !

Widget subclass: #MainSection
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

!MainSection methodsFor: 'initialization'!

initialize
	super initialize.
! !

!MainSection methodsFor: 'rendering'!

appendTodoListItem: todo
	"Adds a list item to the end of list items"
	self show.
	todo appendToJQuery: '#todo-list' asJQuery.
!

renderOn: html
	html section
		id: 'main';
		style: ((TodoStorage singleton items size = 0) ifTrue: [ 'display: none;' ]);
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
!

show
	'#main' asJQuery show.
! !

!MainSection class methodsFor: 'initialization'!

singleton
	| UniqueInstance |
	UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].
    ^ UniqueInstance.
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

text
	^ text
!

text: anObject
	text := anObject
!

toggleCompleted
	"Toggles whether this Todo isDone"
	self toggleIsDone.
	('#', self id) asJQuery toggleClass: 'completed'.
!

toggleIsDone
	self isDone: isDone not.
! !

!Todo methodsFor: 'initializing'!

initialize
	super initialize.
	id := Date now asNumber.
	isDone := false.
! !

!Todo methodsFor: 'rendering'!

renderCompletedCheckboxOn: html
	html input
    	type: 'checkbox';
		class: 'toggle';
		onClick: [ self toggleCompleted ].
!

renderDeleteButtonOn: html
	html button
		class: 'destroy';
		onClick: [ console log: 'delete me'. ].
!

renderOn: html
	| label |
	html li 
		class: (self isDone ifTrue: [ "completed" ] ifFalse: [''] );
		id: self id;
		with: [
			html div
				class: 'view';
				with: [
                  	self renderCompletedCheckboxOn: html.
					label := html label with: self text.
					self renderDeleteButtonOn: html. ]].
! !

!Todo methodsFor: 'testing'!

= aTodo
	^ self id = aTodo id
! !

!Todo class methodsFor: 'initialization'!

newWithText: aString
	^ self new text: aString
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
! !

Widget subclass: #TodoApp
	instanceVariableNames: 'storage'
	package: 'Examples-ToDo'!

!TodoApp methodsFor: 'adding/removing'!

addTodo: aTodo
	"Adds a Todo and tells storage to save it"
    storage add: aTodo.
	storage save
		ifNotNil: [ self renderTodo: aTodo. ].
!

removeTodo: aTodo
	storage remove: aTodo.
! !

!TodoApp methodsFor: 'events'!

handleInput: anEvent
	| text todo |
    text := anEvent target value.
    todo := Todo newWithText: text.
 	self addTodo: todo.
! !

!TodoApp methodsFor: 'initializing'!

initialize
	super initialize.
	storage := TodoStorage singleton.
	announcer := Announcer new.
! !

!TodoApp methodsFor: 'rendering'!

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
                                    	self handleInput: event.
                                    	input asJQuery val: '' ] ] ].
	input element placeholder: defaultText.
!

renderOn: html
	self renderBodyOn: html.
    self renderFooterOn: html.
!

renderTodo: aTodo
	MainSection singleton appendTodoListItem: aTodo.
	FooterSection singleton show.
!

renderTodosOn: html
	MainSection singleton renderOn: html.
	FooterSection singleton renderOn: html.
! !

!TodoApp class methodsFor: 'not yet classified'!

run
	self new appendToJQuery: 'body' asJQuery
! !

Widget subclass: #TodoCount
	instanceVariableNames: 'root count'
	package: 'Examples-ToDo'!

!TodoCount methodsFor: 'accessing'!

count
	^ TodoStorage singleton items size.
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
	count := TodoStorage singleton items size.
	announcer := SystemAnnouncer current.
	announcer on: TodoSaved do: [ self refresh ].
! !

!TodoCount methodsFor: 'rendering'!

decorate: aNumber
	| str |
	str := aNumber = 1
		ifTrue: [ '1 item left' ]
		ifFalse: [ aNumber asString, ' items left' ].
	^ str.
!

refresh
	[:html | self renderContentOn: html ] appendToJQuery: (root asJQuery empty).
!

renderContentOn: html
	html with: (self decorate: self count).
!

renderOn: html
	root := html span
		id: 'todo-count';
		with: [ self renderContentOn: html ].
! !

!TodoCount class methodsFor: 'initialization'!

singleton
	| UniqueInstance |
	UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].
    ^ UniqueInstance.
! !

Widget subclass: #TodoFilters
	instanceVariableNames: 'root'
	package: 'Examples-ToDo'!

!TodoFilters methodsFor: 'rendering'!

renderOn: html
	html ul
		id: 'filters';
		with: [
			html li: [ html a href: '#/'; with: 'All'. ].
			html li: [ html a href: '#/active'; with: 'Active'. ].
			html li: [ html a href: '#/completed'; with: 'Completed'. ]].
! !

!TodoFilters class methodsFor: 'initialization'!

singleton
	| UniqueInstance |
	UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].
    ^ UniqueInstance.
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
	^ items
! !

!TodoStorage methodsFor: 'adding/removing'!

add: anObject
	items add: anObject.
!

remove: anObject
	| d |
	d := items detect: [ :each | each asJSON = anObject asJSON ]. 
	items remove: d.
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
	| str todos |
	str := (localStorage getItem: 'todos-amber').
	todos := Smalltalk readJSObject: (JSON parse: str).
	^ todos collect: [ :todo | Todo fromDictionary: todo ].
!

save
	| announcer |
	localStorage setItem: 'todos-amber' value: items asJSONString.
	announcer := SystemAnnouncer current.
	announcer announce: TodoSaved new.
! !

TodoStorage class instanceVariableNames: 'singleton'!

!TodoStorage class methodsFor: 'initialization'!

singleton
	| UniqueInstance |
	UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].
    ^ UniqueInstance.
! !

SystemAnnouncement subclass: #TodoStorageAnnouncement
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

TodoStorageAnnouncement subclass: #TodoSaved
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

