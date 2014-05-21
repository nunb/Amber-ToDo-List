define("Examples/Examples-ToDo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo');
smalltalk.packages["Examples-ToDo"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoApp', globals.Widget, [], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoApp.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._seed();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoApp)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self seed.",
messageSends: ["initialize", "seed"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TodoAppSection(){return globals.TodoAppSection||(typeof TodoAppSection=="undefined"?nil:TodoAppSection)}
function $TodoInfo(){return globals.TodoInfo||(typeof TodoInfo=="undefined"?nil:TodoInfo)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TodoAppSection())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._renderOn_(html);
$ctx1.sendIdx["renderOn:"]=1;
_st(_st($TodoInfo())._new())._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09TodoAppSection new renderOn: html.\x0a    TodoInfo new renderOn: html.",
messageSends: ["renderOn:", "new"],
referencedClasses: ["TodoAppSection", "TodoInfo"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "seed",
protocol: 'initializing',
fn: function (){
var self=this;
var storage;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
storage=_st($TodoStorage())._newWithName_("todos-amber");
_st(storage)._add_(_st($Todo())._new());
_st(storage)._save();
return self}, function($ctx1) {$ctx1.fill(self,"seed",{storage:storage},globals.TodoApp)})},
args: [],
source: "seed\x0a\x09| storage |\x0a\x09storage := TodoStorage newWithName: 'todos-amber'.\x0a\x09storage add: Todo new.\x0a\x09storage save.",
messageSends: ["newWithName:", "add:", "new", "save"],
referencedClasses: ["TodoStorage", "Todo"]
}),
globals.TodoApp);


globals.TodoApp.klass.iVarNames = ['todos'];
smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'lifecycle',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"run",{},globals.TodoApp.klass)})},
args: [],
source: "run\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.TodoApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "todos",
protocol: 'accessing',
fn: function (){
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@todos"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(_st($TodoStorage())._newWithName_("todos-amber"))._load();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"todos",{},globals.TodoApp.klass)})},
args: [],
source: "todos\x0a\x09^ todos ifNil: [ (TodoStorage newWithName: 'todos-amber') load. ]",
messageSends: ["ifNil:", "load", "newWithName:"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoApp.klass);

});
