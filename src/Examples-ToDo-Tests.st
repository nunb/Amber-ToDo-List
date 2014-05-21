Smalltalk createPackage: 'Examples-ToDo-Tests'!
TestCase subclass: #TodoAppTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

TestCase subclass: #TodoBuilderTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

!TodoBuilderTest methodsFor: 'tests'!

testNewWithTodo
	| b t1 |
	t1 := Todo new.
	b := TodoBuilder newWithTodo: t1.
	self assert: ((b build) class) = Todo.
! !

TestCase subclass: #TodoStorageTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

TestCase subclass: #TodoTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

!TodoTest methodsFor: 'tests'!

testEqual
	| t1 t2 |
	t1 := Todo new.
	t2 := Todo new.
	self deny: (t1 = t2).
!

testNew
	| t1 |
	t1 := Todo new.
	self assert: (t1 text = 'Untitled').
!

testNewIsDone
	| t1 |
	t1 := Todo new.
	self assert: (t1 isDone = false).
!

testNewWithDictionary
	| t1 d |
	d := Dictionary new.
	d at: 'text' put: 'Hello'; at: 'isDone' put: true; at: 'id' put: 12345.
	t1 := Todo newWithDictionary: d.
	self assert: (t1 text = 'Hello').
!

testNewWithTextDoneId
	| t1 |
	t1 := Todo newWithText: 'Hello' done: false id: 12345.
	self assert: (t1 class = Todo).
!

testToggleIsDone
	| t1 t2 |
	t1 := Todo new.
	t2 := t1 toggleIsDone.
	self assert: (t1 isDone = false).
	self assert: (t2 isDone = true).
! !

