Smalltalk createPackage: 'Examples-ToDo-Tests'!
TestCase subclass: #TodoAppTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

!TodoAppTest methodsFor: 'tests'!

tearDown
	localStorage clear.
!

testSeed
	TodoApp new.
	self assert: (TodoApp todos size) = 1.
! !

TestCase subclass: #TodoBuilderTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

!TodoBuilderTest methodsFor: 'tests'!

testAddIsDone
	| builder d |
	builder := TodoBuilder new.
	builder addIsDone: true.
	self assert: ((builder build) isDone = true).
!

testAddText
	| builder d |
	builder := TodoBuilder new.
	builder addText: 'Hello'.
	self assert: ((builder build) text = 'Hello').
!

testBuild
	| builder d |
	builder := TodoBuilder new.
	self assert: ((builder build) class = Todo).
!

testNewWithDictionary
	| builder d |
	d := Dictionary new.
	d at: 'text' put: 'Hello'; at: 'isDone' put: true; at: 'id' put: 12345.
	builder := TodoBuilder newWithDictionary: d.
	self assert: ((builder build) class = Todo).
!

testNewWithTodo
	| b t1 |
	t1 := Todo new.
	b := TodoBuilder newWithTodo: t1.
	self assert: ((b build) class) = Todo.
! !

TestCase subclass: #TodoStorageTest
	instanceVariableNames: ''
	package: 'Examples-ToDo-Tests'!

!TodoStorageTest methodsFor: 'tests'!

tearDown
	localStorage clear.
!

testAdd
	| s t1 |
	s := TodoStorage newWithName: 'todos-amber-test'.
	s load.
	t1 := Todo new.
	s add: t1.
	self assert: (s items size = 1).
!

testInitializeStorage
	| s |
	s := TodoStorage new.
	self assert: (s initializeStorage class = Array).
!

testLoad
	| s |
	s := TodoStorage newWithName: 'todos-amber-test'.
	s load.
	self assert: (s items class = Array).
!

testNewWithName
	| s |
	s := TodoStorage newWithName: 'todos-amber-storage'.
	self assert: (s name = 'todos-amber-storage').
!

testSave
	| s t1 |
	s := TodoStorage newWithName: 'todos-amber-test'.
	s load.
	t1 := Todo new.
	s add: t1.
	s save.
	self assert: (JSON parse: (localStorage getItem: 'todos-amber-test')) size = 1.
! !

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

