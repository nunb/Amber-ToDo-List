define("Examples/Examples-ToDo-Announcements", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Announcements"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Announcements');
smalltalk.packages["Examples-ToDo-Announcements"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoAnnouncer', globals.Announcer, [], 'Examples-ToDo-Announcements');

globals.TodoAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=($ctx1.supercall = true, globals.TodoAnnouncer.klass.superclass.fn.prototype._new.apply(_st(self), []));
$ctx1.supercall = false;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.TodoAnnouncer.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.TodoAnnouncer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.TodoAnnouncer.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.TodoAnnouncer.klass);


smalltalk.addClass('TodoStorageAnnouncement', globals.SystemAnnouncement, [], 'Examples-ToDo-Announcements');


smalltalk.addClass('TodoAdded', globals.TodoStorageAnnouncement, ['todo'], 'Examples-ToDo-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoAdded.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoAdded)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "todo",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@todo"];
return $1;
},
args: [],
source: "todo\x0a\x09^ todo",
messageSends: [],
referencedClasses: []
}),
globals.TodoAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "todo:",
protocol: 'accessing',
fn: function (aTodo){
var self=this;
self["@todo"]=aTodo;
return self},
args: ["aTodo"],
source: "todo: aTodo\x0a\x09\x22The Todo that was added\x22\x0a\x09todo := aTodo.",
messageSends: [],
referencedClasses: []
}),
globals.TodoAdded);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._todo_(aTodo);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoAdded.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self new todo: aTodo",
messageSends: ["todo:", "new"],
referencedClasses: []
}),
globals.TodoAdded.klass);


smalltalk.addClass('TodoDeleted', globals.TodoStorageAnnouncement, ['todo'], 'Examples-ToDo-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoDeleted.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoDeleted)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoDeleted);

smalltalk.addMethod(
smalltalk.method({
selector: "todo",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@todo"];
return $1;
},
args: [],
source: "todo\x0a\x09^ todo",
messageSends: [],
referencedClasses: []
}),
globals.TodoDeleted);

smalltalk.addMethod(
smalltalk.method({
selector: "todo:",
protocol: 'accessing',
fn: function (aTodo){
var self=this;
self["@todo"]=aTodo;
return self},
args: ["aTodo"],
source: "todo: aTodo\x0a\x09\x22The Todo that was added\x22\x0a\x09todo := aTodo.",
messageSends: [],
referencedClasses: []
}),
globals.TodoDeleted);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._todo_(aTodo);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoDeleted.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self new todo: aTodo",
messageSends: ["todo:", "new"],
referencedClasses: []
}),
globals.TodoDeleted.klass);


smalltalk.addClass('TodoFiltered', globals.TodoStorageAnnouncement, ['todo'], 'Examples-ToDo-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoFiltered.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoFiltered)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoFiltered);



smalltalk.addClass('TodoSaved', globals.TodoStorageAnnouncement, ['todo'], 'Examples-ToDo-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoSaved.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoSaved)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoSaved);



smalltalk.addClass('TodoUpdated', globals.TodoStorageAnnouncement, ['todo'], 'Examples-ToDo-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoUpdated.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoUpdated)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoUpdated);

smalltalk.addMethod(
smalltalk.method({
selector: "todo",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@todo"];
return $1;
},
args: [],
source: "todo\x0a\x09^ todo.",
messageSends: [],
referencedClasses: []
}),
globals.TodoUpdated);

smalltalk.addMethod(
smalltalk.method({
selector: "todo:",
protocol: 'accessing',
fn: function (aTodo){
var self=this;
self["@todo"]=aTodo;
return self},
args: ["aTodo"],
source: "todo: aTodo\x0a\x09\x22The Todo that was added\x22\x0a\x09todo := aTodo.",
messageSends: [],
referencedClasses: []
}),
globals.TodoUpdated);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._todo_(aTodo);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoUpdated.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self new todo: aTodo",
messageSends: ["todo:", "new"],
referencedClasses: []
}),
globals.TodoUpdated.klass);

});
