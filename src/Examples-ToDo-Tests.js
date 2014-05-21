define("Examples/Examples-ToDo-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Tests');
smalltalk.packages["Examples-ToDo-Tests"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoAppTest', globals.TestCase, [], 'Examples-ToDo-Tests');


smalltalk.addClass('TodoBuilderTest', globals.TestCase, [], 'Examples-ToDo-Tests');
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
