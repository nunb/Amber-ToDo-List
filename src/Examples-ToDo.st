Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #Todo
	instanceVariableNames: 'isDone text id onTodoChanged onDeleteClicked'
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
	isDone := false.
! !

!Todo methodsFor: 'rendering'!

renderOn: html
	| input delete |
	html li
		id: self id;
		with: [
                  input := html input
                  	type: 'checkbox';
                  	onClick: [
                          self toggleIsDone.
                          onTodoChanged value: self. 
                          (input asJQuery next) toggleClass: 'done' ].
		html span with: text .
                delete := html span
                  with: '  [x]';
                  onClick: [ onDeleteClicked value: self ]].
	isDone ifTrue: [ 
          input at: 'checked' put: 'checked'.
          (input asJQuery next) addClass: 'done'].
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
	instanceVariableNames: 'todos container count'
	package: 'Examples-ToDo'!

!TodoList methodsFor: 'adding/removing'!

addTodo: aTodo
	aTodo id: count asString.
	aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].
	aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].
       	todos add: aTodo.
       	aTodo appendToJQuery: container asJQuery.
	count := count + 1
!

removeTodo: aTodo
	todos remove: aTodo.
	('li#', aTodo id) asJQuery remove
! !

!TodoList methodsFor: 'events'!

handleInput: anEvent
	| text todo |
        text := anEvent target value.
        todo := Todo newWithText: text.
 	self addTodo: todo
! !

!TodoList methodsFor: 'initializing'!

initialize
	super initialize.
	todos := TodoStorage new.
	container := '#todos-list'.
	count := todos size = 0 ifTrue: [ 1 ] ifFalse: [( todos collect: [ :each | each id asNumber ]) sort last + 1 ]
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
                                    self handleInput: event.
                                    input asJQuery val: '' ] ] ].
	input element placeholder: defaultText.
!

renderHeaderOn: html
	html div
		id: 'header';
		class: 'section';
		with: [ html h1 with: 'Todo list' ]
!

renderOn: html
	self renderBodyOn: html.
    self renderFooterOn: html.
!

renderTodosOn: html
	todos size = 0
		ifFalse: [
			html section
				id: 'main';
				with: [
				  self renderToggleTodosOn: html.
                  html ul
				  	id: 'todos-list';
                  	with: [ todos do: [ :aTodo | 
                                           aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].
	                                   aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].
                                           aTodo renderOn: html ]]].
	 		html footer
				id: 'footer'. ]
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

!TodoList class methodsFor: 'not yet classified'!

run
	self new appendToJQuery: 'body' asJQuery
! !

Object subclass: #TodoStorage
	instanceVariableNames: 'storage array'
	package: 'Examples-ToDo'!

!TodoStorage methodsFor: 'accessing'!

at: anIndex
	^ array at: anIndex
!

at: anIndex put: anObject
	array at: anIndex put: anObject.
	self save
!

getArray
	| anArray aJSONArray |
	aJSONArray := storage getItem: 'TodoList'.
	anArray := aJSONArray ifNil: [ self initializeStorage ] 
	                      ifNotNil: [ Smalltalk readJSObject: (JSON parse: aJSONArray) ].
	^ anArray collect: [ :each | Todo fromDictionary: each ]
!

indexOf: anObject
	^ array indexOf: anObject
!

length
	^ self size
!

setArray
	^ self save
!

size
	^ array size
! !

!TodoStorage methodsFor: 'adding/removing'!

add: anObject
	array add: anObject.
	self save.
!

remove: anObject
	| d |
	d := array detect: [ :each | each asJSON = anObject asJSON ]. 
	array remove: d.
	self save
! !

!TodoStorage methodsFor: 'initializing'!

initialize
	storage := localStorage.
	array := self getArray.
!

initializeStorage
	| anArray |
	anArray := Array new.
	storage setItem: 'TodoList' value: anArray asJSON.
	^ anArray
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

save
	storage setItem: 'TodoList' value: array asJSONString
! !

