Smalltalk createPackage: 'Examples-ToDo-Models'!
Object subclass: #Todo
	instanceVariableNames: 'isDone text id'
	package: 'Examples-ToDo-Models'!

!Todo methodsFor: 'accessing'!

id
	^ id
!

isDone
	^ isDone
!

text
	^ text
!

toggleIsDone
	| builder |
	console log: self.
	builder := TodoBuilder newWithTodo: self.
	console log: builder.
	console log: ((self isDone) not).
	builder addIsDone: ((self isDone) not).
	^ builder build.
! !

!Todo methodsFor: 'comparing'!

= aTodo
	^ (self id = aTodo id).
! !

!Todo methodsFor: 'initializing'!

initialize
	self initializeWithText: 'Untitled' done: false id: (Date now asNumber * Math random) ceiling.
!

initializeWithText: aString done: aBoolean id: anId
	super initialize.
	id := anId.
	text := aString.
	isDone := aBoolean.
! !

!Todo class methodsFor: 'creation'!

newWithDictionary: aDict
	| builder |
	builder := TodoBuilder newWithDictionary: aDict.
	^ builder build.
! !

!Todo class methodsFor: 'initialization'!

newWithText: aString done: aBoolean id: anId
	^ self basicNew initializeWithText: aString done: aBoolean id: anId.
! !

Object subclass: #TodoBuilder
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Models'!

!TodoBuilder methodsFor: 'building'!

addIsDone: aBoolean
	todo := Todo newWithText: (todo text) done: aBoolean id: (todo id).
!

addText: aString
	todo := Todo newWithText: aString done: (todo isDone) id: (todo id).
!

build
	^ Todo newWithText: (todo text) done: (todo isDone) id: (todo id).
! !

!TodoBuilder methodsFor: 'initialization'!

initialize
	super initialize.
	todo := Todo new.
!

initializeWithDictionary: aDict
	super initialize.
	todo := Todo newWithText: (aDict at: 'text') done: (aDict at: 'isDone') id: ((aDict at: 'id') asNumber).
!

initializeWithTodo: aTodo
	super initialize.
	todo := Todo newWithText: (aTodo text) done: (aTodo isDone) id: (aTodo id).
! !

!TodoBuilder class methodsFor: 'initialization'!

newWithDictionary: aDict
	^ self basicNew initializeWithDictionary: aDict.
!

newWithTodo: aTodo
	^ self basicNew initializeWithTodo: aTodo.
! !

Object subclass: #TodoStorage
	instanceVariableNames: 'name items'
	package: 'Examples-ToDo-Models'!

!TodoStorage methodsFor: 'accessing'!

items
	^ items.
!

items: anArray
	items := anArray.
!

name
	^ name.
! !

!TodoStorage methodsFor: 'initialization'!

initialize
	self initializeWithName: 'todos-amber'.
!

initializeStorage
	" Initialize localStorage with an empty Dictionary"
	localStorage setItem: (self name) value: (Array new) asJSONString.
	^ Array new.
!

initializeWithName: aString
	super initialize.
	name := aString.
	items := (self load).
!

load
	"Loads the serialized items from localStorage"
	| aJSONArray anArray |
	aJSONArray := localStorage getItem: (self name).
	aJSONArray
		ifNil: [ self items: (self initializeStorage). ] 
		ifNotNil: [ self items: (Smalltalk readJSObject: (JSON parse: aJSONArray)) ].
	^ (self items) collect: [ :each | Todo newWithDictionary: each ].
! !

!TodoStorage methodsFor: 'persistence'!

add: anObject
	^ items add: anObject.
!

remove: anObject
	| item |
	item := self items detect: [ :each | each asJSON = anObject asJSON ]. 
	self items remove: item.
!

save
	localStorage setItem: (self name) value: (self items asJSONString).
! !

!TodoStorage class methodsFor: 'initialization'!

newWithName: aString
	^ self basicNew initializeWithName: aString.
! !

