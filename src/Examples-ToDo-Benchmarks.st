Smalltalk createPackage: 'Examples-ToDo-Benchmarks'!
Object subclass: #TodoBench
	instanceVariableNames: ''
	package: 'Examples-ToDo-Benchmarks'!

!TodoBench class methodsFor: 'accessories'!

createTodos: aNumber
	| aTodo |
	^ Date millisecondsToRun: [
		aNumber timesRepeat: [ 
			aTodo := Todo newWithText: 'foo' done: false id: 123.
			TodoApp current add: aTodo.]].
! !

!TodoBench class methodsFor: 'benchmarks'!

benchmark1

	| result |
	result := self createTodos: 200.
	console log: 'createTodos => ' , result
! !

