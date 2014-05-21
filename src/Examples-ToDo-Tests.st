Smalltalk createPackage: 'Examples-ToDo-Tests'!
TestCase subclass: #TodoAppTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

TestCase subclass: #TodoBuilderTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

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

testToggleIsDone
	| t1 t2 |
	t1 := Todo new.
	t2 := t1 toggleIsDone.
	self assert: (t1 isDone = false).
	self assert: (t2 isDone = true).
! !

