Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #TodoApp
	instanceVariableNames: ''
	package: 'Examples-ToDo'!

!TodoApp methodsFor: 'initializing'!

initialize
	| announcer |
	super initialize.
	self seed.
	announcer := TodoAnnouncer current.
	announcer on: TodoUpdated do: [ :aTodoUpdated | self update: (aTodoUpdated todo) ].
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

update: aTodo
	| old |
	old := (self class todos) detect: [ :each | each = aTodo ].
	(self class todos) remove: old.
	(self class todos) add: aTodo.
	console log: (self class todos).
	^ aTodo.
! !

TodoApp class instanceVariableNames: 'todos'!

!TodoApp class methodsFor: 'accessing'!

todos
	^ todos ifNil: [ todos := (TodoStorage newWithName: 'todos-amber') load. ]
! !

!TodoApp class methodsFor: 'lifecycle'!

run
	self new appendToJQuery: 'body' asJQuery
! !

