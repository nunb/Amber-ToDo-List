define("Examples/Examples-ToDo-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Tests');
smalltalk.packages["Examples-ToDo-Tests"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoAppTest', globals.TestCase, [], 'Examples-ToDo-Tests');


smalltalk.addClass('TodoBuilderTest', globals.TestCase, [], 'Examples-ToDo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAddIsDone",
protocol: 'tests',
fn: function (){
var self=this;
var builder,d;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($TodoBuilder())._new();
_st(builder)._addIsDone_(true);
self._assert_(_st(_st(_st(builder)._build())._isDone()).__eq(true));
return self}, function($ctx1) {$ctx1.fill(self,"testAddIsDone",{builder:builder,d:d},globals.TodoBuilderTest)})},
args: [],
source: "testAddIsDone\x0a\x09| builder d |\x0a\x09builder := TodoBuilder new.\x0a\x09builder addIsDone: true.\x0a\x09self assert: ((builder build) isDone = true).",
messageSends: ["new", "addIsDone:", "assert:", "=", "isDone", "build"],
referencedClasses: ["TodoBuilder"]
}),
globals.TodoBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddText",
protocol: 'tests',
fn: function (){
var self=this;
var builder,d;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($TodoBuilder())._new();
_st(builder)._addText_("Hello");
self._assert_(_st(_st(_st(builder)._build())._text()).__eq("Hello"));
return self}, function($ctx1) {$ctx1.fill(self,"testAddText",{builder:builder,d:d},globals.TodoBuilderTest)})},
args: [],
source: "testAddText\x0a\x09| builder d |\x0a\x09builder := TodoBuilder new.\x0a\x09builder addText: 'Hello'.\x0a\x09self assert: ((builder build) text = 'Hello').",
messageSends: ["new", "addText:", "assert:", "=", "text", "build"],
referencedClasses: ["TodoBuilder"]
}),
globals.TodoBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBuild",
protocol: 'tests',
fn: function (){
var self=this;
var builder,d;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($TodoBuilder())._new();
self._assert_(_st(_st(_st(builder)._build())._class()).__eq($Todo()));
return self}, function($ctx1) {$ctx1.fill(self,"testBuild",{builder:builder,d:d},globals.TodoBuilderTest)})},
args: [],
source: "testBuild\x0a\x09| builder d |\x0a\x09builder := TodoBuilder new.\x0a\x09self assert: ((builder build) class = Todo).",
messageSends: ["new", "assert:", "=", "class", "build"],
referencedClasses: ["TodoBuilder", "Todo"]
}),
globals.TodoBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithDictionary",
protocol: 'tests',
fn: function (){
var self=this;
var builder,d;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
d=_st($Dictionary())._new();
$1=d;
_st($1)._at_put_("text","Hello");
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("isDone",true);
$ctx1.sendIdx["at:put:"]=2;
$2=_st($1)._at_put_("id",(12345));
builder=_st($TodoBuilder())._newWithDictionary_(d);
self._assert_(_st(_st(_st(builder)._build())._class()).__eq($Todo()));
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithDictionary",{builder:builder,d:d},globals.TodoBuilderTest)})},
args: [],
source: "testNewWithDictionary\x0a\x09| builder d |\x0a\x09d := Dictionary new.\x0a\x09d at: 'text' put: 'Hello'; at: 'isDone' put: true; at: 'id' put: 12345.\x0a\x09builder := TodoBuilder newWithDictionary: d.\x0a\x09self assert: ((builder build) class = Todo).",
messageSends: ["new", "at:put:", "newWithDictionary:", "assert:", "=", "class", "build"],
referencedClasses: ["Dictionary", "TodoBuilder", "Todo"]
}),
globals.TodoBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithTodo",
protocol: 'tests',
fn: function (){
var self=this;
var b,t1;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
return smalltalk.withContext(function($ctx1) { 
t1=_st($Todo())._new();
b=_st($TodoBuilder())._newWithTodo_(t1);
self._assert_(_st(_st(_st(b)._build())._class()).__eq($Todo()));
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithTodo",{b:b,t1:t1},globals.TodoBuilderTest)})},
args: [],
source: "testNewWithTodo\x0a\x09| b t1 |\x0a\x09t1 := Todo new.\x0a\x09b := TodoBuilder newWithTodo: t1.\x0a\x09self assert: ((b build) class) = Todo.",
messageSends: ["new", "newWithTodo:", "assert:", "=", "class", "build"],
referencedClasses: ["Todo", "TodoBuilder"]
}),
globals.TodoBuilderTest);



smalltalk.addClass('TodoStorageTest', globals.TestCase, [], 'Examples-ToDo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAdd",
protocol: 'tests',
fn: function (){
var self=this;
var s,t1;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
s=_st($TodoStorage())._newWithName_("todos-amber-test");
_st(s)._load();
t1=_st($Todo())._new();
_st(s)._add_(t1);
self._assert_(_st(_st(_st(s)._items())._size()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{s:s,t1:t1},globals.TodoStorageTest)})},
args: [],
source: "testAdd\x0a\x09| s t1 |\x0a\x09s := TodoStorage newWithName: 'todos-amber-test'.\x0a\x09s load.\x0a\x09t1 := Todo new.\x0a\x09s add: t1.\x0a\x09self assert: (s items size = 1).",
messageSends: ["newWithName:", "load", "new", "add:", "assert:", "=", "size", "items"],
referencedClasses: ["TodoStorage", "Todo"]
}),
globals.TodoStorageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitializeStorage",
protocol: 'tests',
fn: function (){
var self=this;
var s;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
s=_st($TodoStorage())._new();
self._assert_(_st(_st(_st(s)._initializeStorage())._class()).__eq($Array()));
return self}, function($ctx1) {$ctx1.fill(self,"testInitializeStorage",{s:s},globals.TodoStorageTest)})},
args: [],
source: "testInitializeStorage\x0a\x09| s |\x0a\x09s := TodoStorage new.\x0a\x09self assert: (s initializeStorage class = Array).",
messageSends: ["new", "assert:", "=", "class", "initializeStorage"],
referencedClasses: ["TodoStorage", "Array"]
}),
globals.TodoStorageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLoad",
protocol: 'tests',
fn: function (){
var self=this;
var s;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
s=_st($TodoStorage())._newWithName_("todos-amber-test");
_st(s)._load();
self._assert_(_st(_st(_st(s)._items())._class()).__eq($Array()));
return self}, function($ctx1) {$ctx1.fill(self,"testLoad",{s:s},globals.TodoStorageTest)})},
args: [],
source: "testLoad\x0a\x09| s |\x0a\x09s := TodoStorage newWithName: 'todos-amber-test'.\x0a\x09s load.\x0a\x09self assert: (s items class = Array).",
messageSends: ["newWithName:", "load", "assert:", "=", "class", "items"],
referencedClasses: ["TodoStorage", "Array"]
}),
globals.TodoStorageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithName",
protocol: 'tests',
fn: function (){
var self=this;
var s;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
s=_st($TodoStorage())._newWithName_("todos-amber-storage");
self._assert_(_st(_st(s)._name()).__eq("todos-amber-storage"));
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithName",{s:s},globals.TodoStorageTest)})},
args: [],
source: "testNewWithName\x0a\x09| s |\x0a\x09s := TodoStorage newWithName: 'todos-amber-storage'.\x0a\x09self assert: (s name = 'todos-amber-storage').",
messageSends: ["newWithName:", "assert:", "=", "name"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoStorageTest);



smalltalk.addClass('TodoTest', globals.TestCase, [], 'Examples-ToDo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testEqual",
protocol: 'tests',
fn: function (){
var self=this;
var t1,t2;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
t1=_st($Todo())._new();
$ctx1.sendIdx["new"]=1;
t2=_st($Todo())._new();
self._deny_(_st(t1).__eq(t2));
return self}, function($ctx1) {$ctx1.fill(self,"testEqual",{t1:t1,t2:t2},globals.TodoTest)})},
args: [],
source: "testEqual\x0a\x09| t1 t2 |\x0a\x09t1 := Todo new.\x0a\x09t2 := Todo new.\x0a\x09self deny: (t1 = t2).",
messageSends: ["new", "deny:", "="],
referencedClasses: ["Todo"]
}),
globals.TodoTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNew",
protocol: 'tests',
fn: function (){
var self=this;
var t1;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
t1=_st($Todo())._new();
self._assert_(_st(_st(t1)._text()).__eq("Untitled"));
return self}, function($ctx1) {$ctx1.fill(self,"testNew",{t1:t1},globals.TodoTest)})},
args: [],
source: "testNew\x0a\x09| t1 |\x0a\x09t1 := Todo new.\x0a\x09self assert: (t1 text = 'Untitled').",
messageSends: ["new", "assert:", "=", "text"],
referencedClasses: ["Todo"]
}),
globals.TodoTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewIsDone",
protocol: 'tests',
fn: function (){
var self=this;
var t1;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
t1=_st($Todo())._new();
self._assert_(_st(_st(t1)._isDone()).__eq(false));
return self}, function($ctx1) {$ctx1.fill(self,"testNewIsDone",{t1:t1},globals.TodoTest)})},
args: [],
source: "testNewIsDone\x0a\x09| t1 |\x0a\x09t1 := Todo new.\x0a\x09self assert: (t1 isDone = false).",
messageSends: ["new", "assert:", "=", "isDone"],
referencedClasses: ["Todo"]
}),
globals.TodoTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithDictionary",
protocol: 'tests',
fn: function (){
var self=this;
var t1,d;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
d=_st($Dictionary())._new();
$1=d;
_st($1)._at_put_("text","Hello");
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("isDone",true);
$ctx1.sendIdx["at:put:"]=2;
$2=_st($1)._at_put_("id",(12345));
t1=_st($Todo())._newWithDictionary_(d);
self._assert_(_st(_st(t1)._text()).__eq("Hello"));
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithDictionary",{t1:t1,d:d},globals.TodoTest)})},
args: [],
source: "testNewWithDictionary\x0a\x09| t1 d |\x0a\x09d := Dictionary new.\x0a\x09d at: 'text' put: 'Hello'; at: 'isDone' put: true; at: 'id' put: 12345.\x0a\x09t1 := Todo newWithDictionary: d.\x0a\x09self assert: (t1 text = 'Hello').",
messageSends: ["new", "at:put:", "newWithDictionary:", "assert:", "=", "text"],
referencedClasses: ["Dictionary", "Todo"]
}),
globals.TodoTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithTextDoneId",
protocol: 'tests',
fn: function (){
var self=this;
var t1;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
t1=_st($Todo())._newWithText_done_id_("Hello",false,(12345));
self._assert_(_st(_st(t1)._class()).__eq($Todo()));
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithTextDoneId",{t1:t1},globals.TodoTest)})},
args: [],
source: "testNewWithTextDoneId\x0a\x09| t1 |\x0a\x09t1 := Todo newWithText: 'Hello' done: false id: 12345.\x0a\x09self assert: (t1 class = Todo).",
messageSends: ["newWithText:done:id:", "assert:", "=", "class"],
referencedClasses: ["Todo"]
}),
globals.TodoTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testToggleIsDone",
protocol: 'tests',
fn: function (){
var self=this;
var t1,t2;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
t1=_st($Todo())._new();
t2=_st(t1)._toggleIsDone();
$2=_st(t1)._isDone();
$ctx1.sendIdx["isDone"]=1;
$1=_st($2).__eq(false);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(t2)._isDone()).__eq(true));
return self}, function($ctx1) {$ctx1.fill(self,"testToggleIsDone",{t1:t1,t2:t2},globals.TodoTest)})},
args: [],
source: "testToggleIsDone\x0a\x09| t1 t2 |\x0a\x09t1 := Todo new.\x0a\x09t2 := t1 toggleIsDone.\x0a\x09self assert: (t1 isDone = false).\x0a\x09self assert: (t2 isDone = true).",
messageSends: ["new", "toggleIsDone", "assert:", "=", "isDone"],
referencedClasses: ["Todo"]
}),
globals.TodoTest);


});
