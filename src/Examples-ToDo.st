Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #TodoApp
	instanceVariableNames: 'todos'
	package: 'Examples-ToDo'!

!TodoApp methodsFor: 'initializing'!

initialize
	super initialize.
	self seed.
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

completedTodos
	^ todos select: [ :each | each isDone = true ].
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

sortedTodos
	^ todos sort: [ :a :b | (a id) < (b id) ]
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

