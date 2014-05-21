define("Examples/Examples-ToDo-Models", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Models');
smalltalk.packages["Examples-ToDo-Models"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('Todo', globals.Object, ['isDone', 'text', 'id'], 'Examples-ToDo-Models');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._id();
$ctx1.sendIdx["id"]=1;
$1=_st($2).__eq(_st(aTodo)._id());
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aTodo:aTodo},globals.Todo)})},
args: ["aTodo"],
source: "= aTodo\x0a\x09^ (self id = aTodo id).",
messageSends: ["=", "id"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;
},
args: [],
source: "id\x0a\x09^ id",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
self._initializeWithText_done_id_("Untitled",false,_st(_st(_st(_st($Date())._now())._asNumber()).__star(_st($Math())._random()))._ceiling());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Todo)})},
args: [],
source: "initialize\x0a\x09self initializeWithText: 'Untitled' done: false id: (Date now asNumber * Math random) ceiling.",
messageSends: ["initializeWithText:done:id:", "ceiling", "*", "asNumber", "now", "random"],
referencedClasses: ["Date", "Math"]
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithText:done:id:",
protocol: 'initializing',
fn: function (aString,aBoolean,anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Todo.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@id"]=anId;
self["@text"]=aString;
self["@isDone"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithText:done:id:",{aString:aString,aBoolean:aBoolean,anId:anId},globals.Todo)})},
args: ["aString", "aBoolean", "anId"],
source: "initializeWithText: aString done: aBoolean id: anId\x0a\x09super initialize.\x0a\x09id := anId.\x0a\x09text := aString.\x0a\x09isDone := aBoolean.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@isDone"];
return $1;
},
args: [],
source: "isDone\x0a\x09^ isDone",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@text"];
return $1;
},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleIsDone",
protocol: 'accessing',
fn: function (){
var self=this;
var builder;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
_st(console)._log_(self);
$ctx1.sendIdx["log:"]=1;
builder=_st($TodoBuilder())._newWithTodo_(self);
_st(console)._log_(builder);
$ctx1.sendIdx["log:"]=2;
$1=console;
$3=self._isDone();
$ctx1.sendIdx["isDone"]=1;
$2=_st($3)._not();
$ctx1.sendIdx["not"]=1;
_st($1)._log_($2);
_st(builder)._addIsDone_(_st(self._isDone())._not());
$4=_st(builder)._build();
return $4;
}, function($ctx1) {$ctx1.fill(self,"toggleIsDone",{builder:builder},globals.Todo)})},
args: [],
source: "toggleIsDone\x0a\x09| builder |\x0a\x09console log: self.\x0a\x09builder := TodoBuilder newWithTodo: self.\x0a\x09console log: builder.\x0a\x09console log: ((self isDone) not).\x0a\x09builder addIsDone: ((self isDone) not).\x0a\x09^ builder build.\x0a\x09",
messageSends: ["log:", "newWithTodo:", "not", "isDone", "addIsDone:", "build"],
referencedClasses: ["TodoBuilder"]
}),
globals.Todo);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithDictionary:",
protocol: 'creation',
fn: function (aDict){
var self=this;
var builder;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
builder=_st($TodoBuilder())._newWithDictionary_(aDict);
$1=_st(builder)._build();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithDictionary:",{aDict:aDict,builder:builder},globals.Todo.klass)})},
args: ["aDict"],
source: "newWithDictionary: aDict\x0a\x09| builder |\x0a\x09builder := TodoBuilder newWithDictionary: aDict.\x0a\x09^ builder build.",
messageSends: ["newWithDictionary:", "build"],
referencedClasses: ["TodoBuilder"]
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithText:done:id:",
protocol: 'creation',
fn: function (aString,aBoolean,anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithText_done_id_(aString,aBoolean,anId);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithText:done:id:",{aString:aString,aBoolean:aBoolean,anId:anId},globals.Todo.klass)})},
args: ["aString", "aBoolean", "anId"],
source: "newWithText: aString done: aBoolean id: anId\x0a\x09^ self basicNew initializeWithText: aString done: aBoolean id: anId.",
messageSends: ["initializeWithText:done:id:", "basicNew"],
referencedClasses: []
}),
globals.Todo.klass);


smalltalk.addClass('TodoBuilder', globals.Object, ['todo'], 'Examples-ToDo-Models');
smalltalk.addMethod(
smalltalk.method({
selector: "addIsDone:",
protocol: 'building',
fn: function (aBoolean){
var self=this;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
self["@todo"]=_st($Todo())._newWithText_done_id_(_st(self["@todo"])._text(),aBoolean,_st(self["@todo"])._id());
return self}, function($ctx1) {$ctx1.fill(self,"addIsDone:",{aBoolean:aBoolean},globals.TodoBuilder)})},
args: ["aBoolean"],
source: "addIsDone: aBoolean\x0a\x09todo := Todo newWithText: (todo text) done: aBoolean id: (todo id).",
messageSends: ["newWithText:done:id:", "text", "id"],
referencedClasses: ["Todo"]
}),
globals.TodoBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addText:",
protocol: 'building',
fn: function (aString){
var self=this;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
self["@todo"]=_st($Todo())._newWithText_done_id_(aString,_st(self["@todo"])._isDone(),_st(self["@todo"])._id());
return self}, function($ctx1) {$ctx1.fill(self,"addText:",{aString:aString},globals.TodoBuilder)})},
args: ["aString"],
source: "addText: aString\x0a\x09todo := Todo newWithText: aString done: (todo isDone) id: (todo id).",
messageSends: ["newWithText:done:id:", "isDone", "id"],
referencedClasses: ["Todo"]
}),
globals.TodoBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "build",
protocol: 'building',
fn: function (){
var self=this;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Todo())._newWithText_done_id_(_st(self["@todo"])._text(),_st(self["@todo"])._isDone(),_st(self["@todo"])._id());
return $1;
}, function($ctx1) {$ctx1.fill(self,"build",{},globals.TodoBuilder)})},
args: [],
source: "build\x0a\x09^ Todo newWithText: (todo text) done: (todo isDone) id: (todo id).",
messageSends: ["newWithText:done:id:", "text", "isDone", "id"],
referencedClasses: ["Todo"]
}),
globals.TodoBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoBuilder.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todo"]=_st($Todo())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09todo := Todo new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Todo"]
}),
globals.TodoBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithDictionary:",
protocol: 'initialization',
fn: function (aDict){
var self=this;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
($ctx1.supercall = true, globals.TodoBuilder.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st(aDict)._at_("text");
$ctx1.sendIdx["at:"]=1;
$2=_st(aDict)._at_("isDone");
$ctx1.sendIdx["at:"]=2;
self["@todo"]=_st($Todo())._newWithText_done_id_($1,$2,_st(_st(aDict)._at_("id"))._asNumber());
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithDictionary:",{aDict:aDict},globals.TodoBuilder)})},
args: ["aDict"],
source: "initializeWithDictionary: aDict\x0a\x09super initialize.\x0a\x09todo := Todo newWithText: (aDict at: 'text') done: (aDict at: 'isDone') id: ((aDict at: 'id') asNumber).",
messageSends: ["initialize", "newWithText:done:id:", "at:", "asNumber"],
referencedClasses: ["Todo"]
}),
globals.TodoBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoBuilder.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todo"]=_st($Todo())._newWithText_done_id_(_st(aTodo)._text(),_st(aTodo)._isDone(),_st(aTodo)._id());
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithTodo:",{aTodo:aTodo},globals.TodoBuilder)})},
args: ["aTodo"],
source: "initializeWithTodo: aTodo\x0a\x09super initialize.\x0a\x09todo := Todo newWithText: (aTodo text) done: (aTodo isDone) id: (aTodo id).",
messageSends: ["initialize", "newWithText:done:id:", "text", "isDone", "id"],
referencedClasses: ["Todo"]
}),
globals.TodoBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithDictionary:",
protocol: 'initialization',
fn: function (aDict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithDictionary_(aDict);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithDictionary:",{aDict:aDict},globals.TodoBuilder.klass)})},
args: ["aDict"],
source: "newWithDictionary: aDict\x0a\x09^ self basicNew initializeWithDictionary: aDict.",
messageSends: ["initializeWithDictionary:", "basicNew"],
referencedClasses: []
}),
globals.TodoBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithTodo_(aTodo);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoBuilder.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self basicNew initializeWithTodo: aTodo.",
messageSends: ["initializeWithTodo:", "basicNew"],
referencedClasses: []
}),
globals.TodoBuilder.klass);


smalltalk.addClass('TodoStorage', globals.Object, ['name', 'items'], 'Examples-ToDo-Models');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'persistence',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@items"])._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.TodoStorage)})},
args: ["anObject"],
source: "add: anObject\x0a\x09^ items add: anObject.",
messageSends: ["add:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeWithName_("todos-amber");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoStorage)})},
args: [],
source: "initialize\x0a\x09self initializeWithName: 'todos-amber'.",
messageSends: ["initializeWithName:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeStorage",
protocol: 'initialization',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=localStorage;
$2=self._name();
$4=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
$3=_st($4)._asJSONString();
_st($1)._setItem_value_($2,$3);
$5=_st($Array())._new();
return $5;
}, function($ctx1) {$ctx1.fill(self,"initializeStorage",{},globals.TodoStorage)})},
args: [],
source: "initializeStorage\x0a\x09\x22 Initialize localStorage with an empty Dictionary\x22\x0a\x09localStorage setItem: (self name) value: (Array new) asJSONString.\x0a\x09^ Array new.",
messageSends: ["setItem:value:", "name", "asJSONString", "new"],
referencedClasses: ["Array"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithName:",
protocol: 'initialization',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoStorage.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@name"]=aString;
self["@items"]=self._load();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithName:",{aString:aString},globals.TodoStorage)})},
args: ["aString"],
source: "initializeWithName: aString\x0a\x09super initialize.\x0a\x09name := aString.\x0a\x09items := (self load).",
messageSends: ["initialize", "load"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@items"];
return $1;
},
args: [],
source: "items\x0a\x09^ items.",
messageSends: [],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "items:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
self["@items"]=anArray;
return self},
args: ["anArray"],
source: "items: anArray\x0a\x09items := anArray.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
protocol: 'initialization',
fn: function (){
var self=this;
var aJSONArray,anArray;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
aJSONArray=_st(localStorage)._getItem_(self._name());
$1=aJSONArray;
if(($receiver = $1) == null || $receiver.isNil){
self._items_(self._initializeStorage());
$ctx1.sendIdx["items:"]=1;
} else {
self._items_(_st($Smalltalk())._readJSObject_(_st($JSON())._parse_(aJSONArray)));
};
$2=_st(self._items())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($Todo())._newWithDictionary_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"load",{aJSONArray:aJSONArray,anArray:anArray},globals.TodoStorage)})},
args: [],
source: "load\x0a\x09\x22Loads the serialized items from localStorage\x22\x0a\x09| aJSONArray anArray |\x0a\x09aJSONArray := localStorage getItem: (self name).\x0a\x09aJSONArray\x0a\x09\x09ifNil: [ self items: (self initializeStorage). ] \x0a\x09\x09ifNotNil: [ self items: (Smalltalk readJSObject: (JSON parse: aJSONArray)) ].\x0a\x09^ (self items) collect: [ :each | Todo newWithDictionary: each ].",
messageSends: ["getItem:", "name", "ifNil:ifNotNil:", "items:", "initializeStorage", "readJSObject:", "parse:", "collect:", "items", "newWithDictionary:"],
referencedClasses: ["Smalltalk", "JSON", "Todo"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;
},
args: [],
source: "name\x0a\x09^ name.",
messageSends: [],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'persistence',
fn: function (anObject){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._items();
$ctx1.sendIdx["items"]=1;
item=_st($1)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._asJSON();
$ctx2.sendIdx["asJSON"]=1;
return _st($2).__eq(_st(anObject)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self._items())._remove_(item);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject,item:item},globals.TodoStorage)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09| item |\x0a\x09item := self items detect: [ :each | each asJSON = anObject asJSON ]. \x0a\x09self items remove: item.",
messageSends: ["detect:", "items", "=", "asJSON", "remove:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "save",
protocol: 'persistence',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(localStorage)._setItem_value_(self._name(),_st(self._items())._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"save",{},globals.TodoStorage)})},
args: [],
source: "save\x0a\x09localStorage setItem: (self name) value: (self items asJSONString).",
messageSends: ["setItem:value:", "name", "asJSONString", "items"],
referencedClasses: []
}),
globals.TodoStorage);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithName:",
protocol: 'initialization',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithName_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithName:",{aString:aString},globals.TodoStorage.klass)})},
args: ["aString"],
source: "newWithName: aString\x0a\x09^ self basicNew initializeWithName: aString.",
messageSends: ["initializeWithName:", "basicNew"],
referencedClasses: []
}),
globals.TodoStorage.klass);

});
