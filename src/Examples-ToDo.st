Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #TodoApp
	instanceVariableNames: 'todos filter'
	package: 'Examples-ToDo'!

!TodoApp methodsFor: 'filtering'!

activeTodos
	^ todos select: [ :each | each isDone = false ].
!

allTodos
	^ todos.
!

completedTodos
	^ todos select: [ :each | each isDone = true ].
!

filter
	^ filter
!

filter: aString
	| announcer |
	filter := aString.
	self perform: (aString, 'Todos').
	announcer := TodoAnnouncer current.
	announcer announce: TodoFiltered new.
!

sortedTodos
	^ (self filteredTodos) sort: [ :a :b | (a id) < (b id) ]
! !

!TodoApp methodsFor: 'initializing'!

initialize
	super initialize.
	self seed.
	filter := 'all'.
!

seed
	| storage |
	storage := TodoStorage newWithName: 'todos-amber'.
	storage add: Todo new.
	storage save.
! !

!TodoApp methodsFor: 'rendering'!

renderOn: html
	TodoAppSection new renderOn: html.
    TodoInfo new renderOn: html.
! !

!TodoApp methodsFor: 'state'!

add: aTodo
	| announcer |
	(self todos) add: aTodo.
	announcer := TodoAnnouncer current.
	announcer announce: TodoAdded new.
	^ aTodo.
!

filteredTodos
	^ self perform: ((self filter), 'Todos').
!

remove: aTodo
	| announcer |
	(self todos) remove: aTodo.
	announcer := TodoAnnouncer current.
	announcer announce: TodoDeleted new.
	^ aTodo.
!

removeAll
	| announcer |
	(self todos) removeAll.
	announcer := TodoAnnouncer current.
	announcer announce: TodoDeleted new.
!

todos
	^ todos ifNil: [ todos := (TodoStorage newWithName: 'todos-amber') load. ]
!

update: aTodo
	| old announcer |
	old := (self todos) detect: [ :each | each = aTodo ].
	(self todos) remove: old.
	(self todos) add: aTodo.
	announcer := TodoAnnouncer current.
	announcer announce: TodoUpdated new.
	^ aTodo.
! !

TodoApp class instanceVariableNames: 'current'!

!TodoApp class methodsFor: 'lifecycle'!

current
	^ current ifNil: [ current := TodoApp new ]
!

run
	self current appendToJQuery: 'body' asJQuery
! !

