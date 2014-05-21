Smalltalk createPackage: 'Examples-ToDo'!
Widget subclass: #TodoApp
	instanceVariableNames: ''
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

TodoApp class instanceVariableNames: 'todos'!

!TodoApp class methodsFor: 'accessing'!

todos
	^ todos ifNil: [ (TodoStorage newWithName: 'todos-amber') load. ]
! !

!TodoApp class methodsFor: 'lifecycle'!

run
	self new appendToJQuery: 'body' asJQuery
! !

