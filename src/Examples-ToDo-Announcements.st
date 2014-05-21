Smalltalk createPackage: 'Examples-ToDo-Announcements'!
Announcer subclass: #TodoAnnouncer
	instanceVariableNames: ''
	package: 'Examples-ToDo-Announcements'!

TodoAnnouncer class instanceVariableNames: 'current'!

!TodoAnnouncer class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
! !

!TodoAnnouncer class methodsFor: 'initialization'!

new
	self shouldNotImplement
! !

SystemAnnouncement subclass: #TodoStorageAnnouncement
	instanceVariableNames: ''
	package: 'Examples-ToDo-Announcements'!

TodoStorageAnnouncement subclass: #TodoAdded
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Announcements'!

!TodoAdded methodsFor: 'accessing'!

todo
	^ todo
!

todo: aTodo
	"The Todo that was added"
	todo := aTodo.
! !

!TodoAdded methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoAdded class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self new todo: aTodo
! !

TodoStorageAnnouncement subclass: #TodoDeleted
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Announcements'!

!TodoDeleted methodsFor: 'accessing'!

todo
	^ todo
!

todo: aTodo
	"The Todo that was added"
	todo := aTodo.
! !

!TodoDeleted methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoDeleted class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self new todo: aTodo
! !

TodoStorageAnnouncement subclass: #TodoSaved
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Announcements'!

!TodoSaved methodsFor: 'initialization'!

initialize
	super initialize.
! !

TodoStorageAnnouncement subclass: #TodoUpdated
	instanceVariableNames: 'todo'
	package: 'Examples-ToDo-Announcements'!

!TodoUpdated methodsFor: 'accessing'!

todo
	^ todo.
!

todo: aTodo
	"The Todo that was added"
	todo := aTodo.
! !

!TodoUpdated methodsFor: 'initialization'!

initialize
	super initialize.
! !

!TodoUpdated class methodsFor: 'initialization'!

newWithTodo: aTodo
	^ self new todo: aTodo
! !

SystemAnnouncement subclass: #TodoViewAnnouncement
	instanceVariableNames: ''
	package: 'Examples-ToDo-Announcements'!

TodoViewAnnouncement subclass: #TodoClearCompleted
	instanceVariableNames: ''
	package: 'Examples-ToDo-Announcements'!

!TodoClearCompleted methodsFor: 'initialization'!

initialize
	super initialize.
! !

