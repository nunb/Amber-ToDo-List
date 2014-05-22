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
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoUpdated(){return globals.TodoUpdated||(typeof TodoUpdated=="undefined"?nil:TodoUpdated)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoApp.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._seed();
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._on_do_($TodoUpdated(),(function(aTodoUpdated){
return smalltalk.withContext(function($ctx2) {
return self._update_(_st(aTodoUpdated)._todo());
}, function($ctx2) {$ctx2.fillBlock({aTodoUpdated:aTodoUpdated},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{announcer:announcer},globals.TodoApp)})},
args: [],
source: "initialize\x0a\x09| announcer |\x0a\x09super initialize.\x0a\x09self seed.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer on: TodoUpdated do: [ :aTodoUpdated | self update: (aTodoUpdated todo) ].",
messageSends: ["initialize", "seed", "current", "on:do:", "update:", "todo"],
referencedClasses: ["TodoAnnouncer", "TodoUpdated"]
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

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
protocol: 'state',
fn: function (aTodo){
var self=this;
var old;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5;
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2)._todos();
$ctx1.sendIdx["todos"]=1;
old=_st($1)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(aTodo);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$4=self._class();
$ctx1.sendIdx["class"]=2;
$3=_st($4)._todos();
$ctx1.sendIdx["todos"]=2;
_st($3)._remove_(old);
$6=self._class();
$ctx1.sendIdx["class"]=3;
$5=_st($6)._todos();
$ctx1.sendIdx["todos"]=3;
_st($5)._add_(aTodo);
_st(console)._log_(_st(self._class())._todos());
return aTodo;
}, function($ctx1) {$ctx1.fill(self,"update:",{aTodo:aTodo,old:old},globals.TodoApp)})},
args: ["aTodo"],
source: "update: aTodo\x0a\x09| old |\x0a\x09old := (self class todos) detect: [ :each | each = aTodo ].\x0a\x09(self class todos) remove: old.\x0a\x09(self class todos) add: aTodo.\x0a\x09console log: (self class todos).\x0a\x09^ aTodo.",
messageSends: ["detect:", "todos", "class", "=", "remove:", "add:", "log:"],
referencedClasses: []
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
self["@todos"]=_st(_st($TodoStorage())._newWithName_("todos-amber"))._load();
$1=self["@todos"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"todos",{},globals.TodoApp.klass)})},
args: [],
source: "todos\x0a\x09^ todos ifNil: [ todos := (TodoStorage newWithName: 'todos-amber') load. ]",
messageSends: ["ifNil:", "load", "newWithName:"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoApp.klass);

});
