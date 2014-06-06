define("Examples/Examples-ToDo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo');
smalltalk.packages["Examples-ToDo"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoApp', globals.Widget, ['todos', 'filter'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "activeTodos",
protocol: 'filtering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@todos"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isDone()).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTodos",{},globals.TodoApp)})},
args: [],
source: "activeTodos\x0a\x09^ todos select: [ :each | each isDone = false ].",
messageSends: ["select:", "=", "isDone"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'state',
fn: function (aTodo){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoAdded(){return globals.TodoAdded||(typeof TodoAdded=="undefined"?nil:TodoAdded)}
return smalltalk.withContext(function($ctx1) { 
_st(self._todos())._add_(aTodo);
self._save();
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoAdded())._new());
return aTodo;
}, function($ctx1) {$ctx1.fill(self,"add:",{aTodo:aTodo,announcer:announcer},globals.TodoApp)})},
args: ["aTodo"],
source: "add: aTodo\x0a\x09| announcer |\x0a\x09(self todos) add: aTodo.\x0a\x09self save.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: TodoAdded new.\x0a\x09^ aTodo.",
messageSends: ["add:", "todos", "save", "current", "announce:", "new"],
referencedClasses: ["TodoAnnouncer", "TodoAdded"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "allTodos",
protocol: 'filtering',
fn: function (){
var self=this;
var $1;
$1=self["@todos"];
return $1;
},
args: [],
source: "allTodos\x0a\x09^ todos.",
messageSends: [],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "completedTodos",
protocol: 'filtering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@todos"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isDone()).__eq(true);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"completedTodos",{},globals.TodoApp)})},
args: [],
source: "completedTodos\x0a\x09^ todos select: [ :each | each isDone = true ].",
messageSends: ["select:", "=", "isDone"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "filter",
protocol: 'filtering',
fn: function (){
var self=this;
var $1;
$1=self["@filter"];
return $1;
},
args: [],
source: "filter\x0a\x09^ filter",
messageSends: [],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "filter:",
protocol: 'filtering',
fn: function (aString){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoFiltered(){return globals.TodoFiltered||(typeof TodoFiltered=="undefined"?nil:TodoFiltered)}
return smalltalk.withContext(function($ctx1) { 
self["@filter"]=aString;
self._perform_(_st(aString).__comma("Todos"));
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoFiltered())._new());
return self}, function($ctx1) {$ctx1.fill(self,"filter:",{aString:aString,announcer:announcer},globals.TodoApp)})},
args: ["aString"],
source: "filter: aString\x0a\x09| announcer |\x0a\x09filter := aString.\x0a\x09self perform: (aString, 'Todos').\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: TodoFiltered new.",
messageSends: ["perform:", ",", "current", "announce:", "new"],
referencedClasses: ["TodoAnnouncer", "TodoFiltered"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "filteredTodos",
protocol: 'state',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_(_st(self._filter()).__comma("Todos"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"filteredTodos",{},globals.TodoApp)})},
args: [],
source: "filteredTodos\x0a\x09^ self perform: ((self filter), 'Todos').",
messageSends: ["perform:", ",", "filter"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoApp.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@filter"]="all";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoApp)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22self seed.\x22\x0a\x09filter := 'all'.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'state',
fn: function (aTodo){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoDeleted(){return globals.TodoDeleted||(typeof TodoDeleted=="undefined"?nil:TodoDeleted)}
return smalltalk.withContext(function($ctx1) { 
_st(self._todos())._remove_(aTodo);
self._save();
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoDeleted())._new());
return aTodo;
}, function($ctx1) {$ctx1.fill(self,"remove:",{aTodo:aTodo,announcer:announcer},globals.TodoApp)})},
args: ["aTodo"],
source: "remove: aTodo\x0a\x09| announcer |\x0a\x09(self todos) remove: aTodo.\x0a\x09self save.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: TodoDeleted new.\x0a\x09^ aTodo.",
messageSends: ["remove:", "todos", "save", "current", "announce:", "new"],
referencedClasses: ["TodoAnnouncer", "TodoDeleted"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'state',
fn: function (){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoDeleted(){return globals.TodoDeleted||(typeof TodoDeleted=="undefined"?nil:TodoDeleted)}
return smalltalk.withContext(function($ctx1) { 
_st(self._todos())._removeAll();
self._save();
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoDeleted())._new());
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{announcer:announcer},globals.TodoApp)})},
args: [],
source: "removeAll\x0a\x09| announcer |\x0a\x09(self todos) removeAll.\x0a\x09self save.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: TodoDeleted new.",
messageSends: ["removeAll", "todos", "save", "current", "announce:", "new"],
referencedClasses: ["TodoAnnouncer", "TodoDeleted"]
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
selector: "save",
protocol: 'state',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(localStorage)._setItem_value_("todos-amber",_st(self["@todos"])._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"save",{},globals.TodoApp)})},
args: [],
source: "save\x0a\x09localStorage setItem: 'todos-amber' value: todos asJSONString.",
messageSends: ["setItem:value:", "asJSONString"],
referencedClasses: []
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
selector: "sortedTodos",
protocol: 'filtering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._filteredTodos())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._id();
$ctx2.sendIdx["id"]=1;
return _st($2).__lt(_st(b)._id());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedTodos",{},globals.TodoApp)})},
args: [],
source: "sortedTodos\x0a\x09^ (self filteredTodos) sort: [ :a :b | (a id) < (b id) ]",
messageSends: ["sort:", "filteredTodos", "<", "id"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "todos",
protocol: 'state',
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
}, function($ctx1) {$ctx1.fill(self,"todos",{},globals.TodoApp)})},
args: [],
source: "todos\x0a\x09^ todos ifNil: [ todos := (TodoStorage newWithName: 'todos-amber') load. ]",
messageSends: ["ifNil:", "load", "newWithName:"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
protocol: 'state',
fn: function (aTodo){
var self=this;
var old,announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoUpdated(){return globals.TodoUpdated||(typeof TodoUpdated=="undefined"?nil:TodoUpdated)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._todos();
$ctx1.sendIdx["todos"]=1;
old=_st($1)._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(aTodo);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=self._todos();
$ctx1.sendIdx["todos"]=2;
_st($2)._remove_(old);
_st(self._todos())._add_(aTodo);
self._save();
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoUpdated())._new());
return aTodo;
}, function($ctx1) {$ctx1.fill(self,"update:",{aTodo:aTodo,old:old,announcer:announcer},globals.TodoApp)})},
args: ["aTodo"],
source: "update: aTodo\x0a\x09| old announcer |\x0a\x09old := (self todos) detect: [ :each | each = aTodo ].\x0a\x09(self todos) remove: old.\x0a\x09(self todos) add: aTodo.\x0a\x09self save.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: TodoUpdated new.\x0a\x09^ aTodo.",
messageSends: ["detect:", "todos", "=", "remove:", "add:", "save", "current", "announce:", "new"],
referencedClasses: ["TodoAnnouncer", "TodoUpdated"]
}),
globals.TodoApp);


globals.TodoApp.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'lifecycle',
fn: function (){
var self=this;
function $TodoApp(){return globals.TodoApp||(typeof TodoApp=="undefined"?nil:TodoApp)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=_st($TodoApp())._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.TodoApp.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := TodoApp new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["TodoApp"]
}),
globals.TodoApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'lifecycle',
fn: function (){
var self=this;
var routes,router;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Router(){return globals.Router||(typeof Router=="undefined"?nil:Router)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._current();
$ctx1.sendIdx["current"]=1;
_st($1)._appendToJQuery_("body"._asJQuery());
routes=_st($HashedCollection())._new();
_st(routes)._at_put_("/",(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._current();
$ctx2.sendIdx["current"]=2;
return _st($2)._filter_("all");
$ctx2.sendIdx["filter:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["at:put:"]=1;
_st(routes)._at_put_("/active",(function(){
return smalltalk.withContext(function($ctx2) {
$3=self._current();
$ctx2.sendIdx["current"]=3;
return _st($3)._filter_("active");
$ctx2.sendIdx["filter:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["at:put:"]=2;
_st(routes)._at_put_("/completed",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._current())._filter_("completed");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
router=_st($Router())._newValue_(routes);
_st(router)._init();
return self}, function($ctx1) {$ctx1.fill(self,"run",{routes:routes,router:router},globals.TodoApp.klass)})},
args: [],
source: "run\x0a\x09| routes router |\x0a\x09self current appendToJQuery: 'body' asJQuery.\x0a\x09routes := HashedCollection new.\x0a\x09routes at: '/' put: [ self current filter: 'all' ].\x0a\x09routes at: '/active' put:  [ self current filter: 'active' ].\x0a\x09routes at: '/completed' put:  [ self current filter: 'completed' ].\x0a\x0a\x09router := Router newValue: routes.\x0a\x09router init.",
messageSends: ["appendToJQuery:", "current", "asJQuery", "new", "at:put:", "filter:", "newValue:", "init"],
referencedClasses: ["HashedCollection", "Router"]
}),
globals.TodoApp.klass);

});
