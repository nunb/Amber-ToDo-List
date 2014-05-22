define("Examples/Examples-ToDo-Views", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Views');
smalltalk.packages["Examples-ToDo-Views"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoAppSection', globals.Widget, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoAppSection.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoAppSection)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoAppSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TodoInput(){return globals.TodoInput||(typeof TodoInput=="undefined"?nil:TodoInput)}
function $TodoMain(){return globals.TodoMain||(typeof TodoMain=="undefined"?nil:TodoMain)}
function $TodoFooter(){return globals.TodoFooter||(typeof TodoFooter=="undefined"?nil:TodoFooter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._section();
_st($1)._id_("todoapp");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st($TodoInput())._new();
$ctx2.sendIdx["new"]=1;
_st($3)._renderOn_(html);
$ctx2.sendIdx["renderOn:"]=1;
$4=_st($TodoMain())._new();
$ctx2.sendIdx["new"]=2;
_st($4)._renderOn_(html);
$ctx2.sendIdx["renderOn:"]=2;
return _st(_st($TodoFooter())._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoAppSection)})},
args: ["html"],
source: "renderOn: html\x0a\x09html section\x0a\x09\x09id: 'todoapp';\x0a\x09\x09with: [\x0a                  TodoInput new renderOn: html.\x0a                  TodoMain new renderOn: html.\x0a\x09\x09\x09\x09  TodoFooter new renderOn: html. ].",
messageSends: ["id:", "section", "with:", "renderOn:", "new"],
referencedClasses: ["TodoInput", "TodoMain", "TodoFooter"]
}),
globals.TodoAppSection);



smalltalk.addClass('TodoCheckbox', globals.Widget, ['todo'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoCheckbox.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoCheckbox)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoCheckbox);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoCheckbox.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todo"]=aTodo;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithTodo:",{aTodo:aTodo},globals.TodoCheckbox)})},
args: ["aTodo"],
source: "initializeWithTodo: aTodo\x0a\x09super initialize.\x0a\x09todo := aTodo.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoCheckbox);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._input();
_st($1)._type_("checkbox");
_st($1)._class_("toggle");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateTodo_(self._todo());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoCheckbox)})},
args: ["html"],
source: "renderOn: html\x0a\x09html input\x0a    \x09type: 'checkbox';\x0a\x09\x09class: 'toggle';\x0a\x09\x09onClick: [ self updateTodo: (self todo) ].",
messageSends: ["type:", "input", "class:", "onClick:", "updateTodo:", "todo"],
referencedClasses: []
}),
globals.TodoCheckbox);

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
globals.TodoCheckbox);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTodo:",
protocol: 'events',
fn: function (aTodo){
var self=this;
var announcer,builder,newTodo;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoUpdated(){return globals.TodoUpdated||(typeof TodoUpdated=="undefined"?nil:TodoUpdated)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($TodoBuilder())._newWithTodo_(aTodo);
$ctx1.sendIdx["newWithTodo:"]=1;
_st(builder)._addIsDone_(_st(_st(aTodo)._isDone())._not());
newTodo=_st(builder)._build();
self["@todo"]=newTodo;
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoUpdated())._newWithTodo_(newTodo));
return self}, function($ctx1) {$ctx1.fill(self,"updateTodo:",{aTodo:aTodo,announcer:announcer,builder:builder,newTodo:newTodo},globals.TodoCheckbox)})},
args: ["aTodo"],
source: "updateTodo: aTodo\x0a\x09| announcer builder newTodo |\x0a\x09builder := TodoBuilder newWithTodo: aTodo.\x0a\x09builder addIsDone: (aTodo isDone) not.\x0a\x09newTodo := builder build.\x0a\x09todo := newTodo.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: (TodoUpdated newWithTodo: newTodo).",
messageSends: ["newWithTodo:", "addIsDone:", "not", "isDone", "build", "current", "announce:"],
referencedClasses: ["TodoBuilder", "TodoAnnouncer", "TodoUpdated"]
}),
globals.TodoCheckbox);


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
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoCheckbox.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self basicNew initializeWithTodo: aTodo.",
messageSends: ["initializeWithTodo:", "basicNew"],
referencedClasses: []
}),
globals.TodoCheckbox.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithTodo:callback:",
protocol: 'initialization',
fn: function (aTodo,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithTodo_callback_(aTodo,aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:callback:",{aTodo:aTodo,aString:aString},globals.TodoCheckbox.klass)})},
args: ["aTodo", "aString"],
source: "newWithTodo: aTodo callback: aString\x0a\x09^ self basicNew initializeWithTodo: aTodo callback: aString.",
messageSends: ["initializeWithTodo:callback:", "basicNew"],
referencedClasses: []
}),
globals.TodoCheckbox.klass);


smalltalk.addClass('TodoClearButton', globals.Widget, ['root'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "announceClearCompleted",
protocol: 'announcing',
fn: function (){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoClearCompleted(){return globals.TodoClearCompleted||(typeof TodoClearCompleted=="undefined"?nil:TodoClearCompleted)}
return smalltalk.withContext(function($ctx1) { 
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._announce_(_st($TodoClearCompleted())._new());
return self}, function($ctx1) {$ctx1.fill(self,"announceClearCompleted",{announcer:announcer},globals.TodoClearButton)})},
args: [],
source: "announceClearCompleted\x0a\x09| announcer |\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer announce: TodoClearCompleted new.",
messageSends: ["current", "announce:", "new"],
referencedClasses: ["TodoAnnouncer", "TodoClearCompleted"]
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "decorate",
protocol: 'rendering',
fn: function (){
var self=this;
var items;
return smalltalk.withContext(function($ctx1) { 
var $1;
items=(1);
$1=_st("Clear completed (".__comma(items)).__comma(")");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"decorate",{items:items},globals.TodoClearButton)})},
args: [],
source: "decorate\x0a\x09|items|\x0a\x09\x22FIXME: State!\x22\x0a\x09items := 1.\x0a\x09^ 'Clear completed (', items, ')'.",
messageSends: [","],
referencedClasses: []
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoClearButton.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoClearButton)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#clear-completed"._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.TodoClearButton)})},
args: [],
source: "remove\x0a\x09'#clear-completed' asJQuery remove.",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._id_("clear-completed");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._decorate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_("clear completed");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self["@root"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoClearButton)})},
args: ["html"],
source: "renderOn: html\x0a\x09root := html button\x0a\x09\x09id: 'clear-completed';\x0a\x09\x09with: [ self decorate ];\x0a\x09\x09onClick: [ console log: 'clear completed' ].",
messageSends: ["id:", "button", "with:", "decorate", "onClick:", "log:"],
referencedClasses: []
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;
},
args: [],
source: "root\x0a\x09^ root.",
messageSends: [],
referencedClasses: []
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
protocol: 'accessing',
fn: function (aTagBrush){
var self=this;
self["@root"]=aTagBrush;
return self},
args: ["aTagBrush"],
source: "root: aTagBrush\x0a\x09root := aTagBrush.",
messageSends: [],
referencedClasses: []
}),
globals.TodoClearButton);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("show me");
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.TodoClearButton)})},
args: [],
source: "show\x0a\x09\x22[ :html | self renderOn: html ] appendToJQuery: ('#footer' asJQuery).\x22\x0a\x09console log: 'show me'.",
messageSends: ["log:"],
referencedClasses: []
}),
globals.TodoClearButton);



smalltalk.addClass('TodoCount', globals.Widget, ['root', 'count'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "count",
protocol: 'accessing',
fn: function (){
var self=this;
var active;
function $TodoApp(){return globals.TodoApp||(typeof TodoApp=="undefined"?nil:TodoApp)}
return smalltalk.withContext(function($ctx1) { 
var $1;
active=_st(_st($TodoApp())._todos())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isDone()).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=_st(active)._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"count",{active:active},globals.TodoCount)})},
args: [],
source: "count\x0a\x09| active |\x0a\x09active := TodoApp todos select: [ :each | each isDone = false ].\x0a\x09^ active size.",
messageSends: ["select:", "todos", "=", "isDone", "size"],
referencedClasses: ["TodoApp"]
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
protocol: 'rendering',
fn: function (aNumber){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aNumber).__eq((1));
if(smalltalk.assert($1)){
str=" item left";
} else {
str=" items left";
};
$2=str;
return $2;
}, function($ctx1) {$ctx1.fill(self,"decorate:",{aNumber:aNumber,str:str},globals.TodoCount)})},
args: ["aNumber"],
source: "decorate: aNumber\x0a\x09| str |\x0a\x09str := aNumber = 1\x0a\x09\x09ifTrue: [ ' item left' ]\x0a\x09\x09ifFalse: [ ' items left' ].\x0a\x09^ str.",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoAdded(){return globals.TodoAdded||(typeof TodoAdded=="undefined"?nil:TodoAdded)}
function $TodoUpdated(){return globals.TodoUpdated||(typeof TodoUpdated=="undefined"?nil:TodoUpdated)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoCount.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._on_do_($TodoAdded(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._refresh();
$ctx2.sendIdx["refresh"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(announcer)._on_do_($TodoUpdated(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._refresh();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{announcer:announcer},globals.TodoCount)})},
args: [],
source: "initialize\x0a\x09| announcer |\x0a\x09super initialize.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer on: TodoAdded do: [ self refresh ].\x0a\x09announcer on: TodoUpdated do: [ self refresh ].",
messageSends: ["initialize", "current", "on:do:", "refresh"],
referencedClasses: ["TodoAnnouncer", "TodoAdded", "TodoUpdated"]
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}))._appendToJQuery_(_st(_st(self["@root"])._asJQuery())._empty());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.TodoCount)})},
args: [],
source: "refresh\x0a\x09[:html | self renderContentOn: html ] appendToJQuery: (root asJQuery empty).\x0a\x09",
messageSends: ["appendToJQuery:", "renderContentOn:", "empty", "asJQuery"],
referencedClasses: []
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._count();
$ctx2.sendIdx["count"]=1;
_st(html)._strong_($1);
return _st(html)._with_(self._decorate_(self._count()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.TodoCount)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: [\x0a\x09\x09html strong: (self count).\x0a\x09\x09html with: (self decorate: (self count)) ].\x0a\x09",
messageSends: ["with:", "strong:", "count", "decorate:"],
referencedClasses: []
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._id_("todo-count");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@root"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoCount)})},
args: ["html"],
source: "renderOn: html\x0a\x09root := html span\x0a\x09\x09id: 'todo-count';\x0a\x09\x09with: [ \x0a\x09\x09\x09self renderContentOn: html ].\x0a\x09",
messageSends: ["id:", "span", "with:", "renderContentOn:"],
referencedClasses: []
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;
},
args: [],
source: "root\x0a\x09^ root",
messageSends: [],
referencedClasses: []
}),
globals.TodoCount);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
protocol: 'accessing',
fn: function (aTagBrush){
var self=this;
self["@root"]=aTagBrush;
return self},
args: ["aTagBrush"],
source: "root: aTagBrush\x0a\x09root := aTagBrush",
messageSends: [],
referencedClasses: []
}),
globals.TodoCount);



smalltalk.addClass('TodoDeleteButton', globals.Widget, ['todo', 'root'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "deleteTodo:",
protocol: 'events',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("delete");
return self}, function($ctx1) {$ctx1.fill(self,"deleteTodo:",{aTodo:aTodo},globals.TodoDeleteButton)})},
args: ["aTodo"],
source: "deleteTodo: aTodo\x0a\x09\x22FIXME: State!\x22\x0a\x09console log: 'delete'",
messageSends: ["log:"],
referencedClasses: []
}),
globals.TodoDeleteButton);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoDeleteButton.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoDeleteButton)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoDeleteButton);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoDeleteButton.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todo"]=aTodo;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithTodo:",{aTodo:aTodo},globals.TodoDeleteButton)})},
args: ["aTodo"],
source: "initializeWithTodo: aTodo\x0a\x09super initialize.\x0a\x09todo := aTodo.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoDeleteButton);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("destroy");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_("delete todo");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoDeleteButton)})},
args: ["html"],
source: "renderOn: html\x0a\x09html button\x0a\x09\x09class: 'destroy';\x0a\x09\x09onClick: [ console log: 'delete todo' ].",
messageSends: ["class:", "button", "onClick:", "log:"],
referencedClasses: []
}),
globals.TodoDeleteButton);

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
globals.TodoDeleteButton);


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
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoDeleteButton.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self basicNew initializeWithTodo: aTodo.",
messageSends: ["initializeWithTodo:", "basicNew"],
referencedClasses: []
}),
globals.TodoDeleteButton.klass);


smalltalk.addClass('TodoFilters', globals.Widget, ['root'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoFilters.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoFilters)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoFilters);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=_st(html)._ul();
_st($1)._id_("filters");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._li_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._a();
$ctx3.sendIdx["a"]=1;
_st($3)._href_("#");
$ctx3.sendIdx["href:"]=1;
_st($3)._class_("selected");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(console)._log_("All");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$4=_st($3)._with_("All");
$ctx3.sendIdx["with:"]=2;
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["li:"]=1;
_st(html)._li_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._a();
$ctx3.sendIdx["a"]=2;
_st($5)._href_("#");
$ctx3.sendIdx["href:"]=2;
$6=_st($5)._with_("Active");
$ctx3.sendIdx["with:"]=3;
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["li:"]=2;
return _st(html)._li_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
_st($7)._href_("#");
$8=_st($7)._with_("Completed");
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoFilters)})},
args: ["html"],
source: "renderOn: html\x0a\x09html ul\x0a\x09\x09id: 'filters';\x0a\x09\x09with: [\x0a\x09\x09\x09html li: [ html a href: '#'; class: 'selected'; onClick: [ console log: 'All' ]; with: 'All'. ].\x0a\x09\x09\x09html li: [ html a href: '#'; with: 'Active'. ].\x0a\x09\x09\x09html li: [ html a href: '#'; with: 'Completed'. ]].",
messageSends: ["id:", "ul", "with:", "li:", "href:", "a", "class:", "onClick:", "log:"],
referencedClasses: []
}),
globals.TodoFilters);



smalltalk.addClass('TodoFooter', globals.Widget, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoAdded(){return globals.TodoAdded||(typeof TodoAdded=="undefined"?nil:TodoAdded)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoFooter.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._on_do_($TodoAdded(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._show();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{announcer:announcer},globals.TodoFooter)})},
args: [],
source: "initialize\x0a\x09| announcer |\x0a\x09super initialize.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer on: TodoAdded do: [ self show ].",
messageSends: ["initialize", "current", "on:do:", "show"],
referencedClasses: ["TodoAnnouncer", "TodoAdded"]
}),
globals.TodoFooter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TodoApp(){return globals.TodoApp||(typeof TodoApp=="undefined"?nil:TodoApp)}
function $TodoCount(){return globals.TodoCount||(typeof TodoCount=="undefined"?nil:TodoCount)}
function $TodoFilters(){return globals.TodoFilters||(typeof TodoFilters=="undefined"?nil:TodoFilters)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5;
$1=_st(html)._footer();
_st($1)._id_("footer");
$2=$1;
$4=_st(_st(_st($TodoApp())._todos())._size()).__gt((0));
if(smalltalk.assert($4)){
$3="";
} else {
$3="display: none;";
};
_st($2)._style_($3);
$5=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st($TodoCount())._new();
$ctx2.sendIdx["new"]=1;
_st($6)._renderOn_(html);
$ctx2.sendIdx["renderOn:"]=1;
return _st(_st($TodoFilters())._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoFooter)})},
args: ["html"],
source: "renderOn: html\x0a\x09html footer\x0a\x09\x09id: 'footer';\x0a\x09\x09style: ((TodoApp todos size > 0) ifTrue: [ '' ] ifFalse: [ 'display: none;' ]);\x0a\x09\x09with: [\x0a\x09\x09\x09TodoCount new renderOn: html.\x0a\x09\x09\x09TodoFilters new renderOn: html.]",
messageSends: ["id:", "footer", "style:", "ifTrue:ifFalse:", ">", "size", "todos", "with:", "renderOn:", "new"],
referencedClasses: ["TodoApp", "TodoCount", "TodoFilters"]
}),
globals.TodoFooter);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#footer"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.TodoFooter)})},
args: [],
source: "show\x0a\x09'#footer' asJQuery show.",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
globals.TodoFooter);



smalltalk.addClass('TodoInfo', globals.Object, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoInfo.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoInfo)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoInfo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=_st(html)._footer();
_st($1)._id_("info");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
_st($3)._with_("Double-click to edit a todo");
$ctx2.sendIdx["with:"]=2;
_st(_st(html)._p())._with_("Written by rbistolfi, @statonjr, & others");
$ctx2.sendIdx["with:"]=3;
return _st(html)._p_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Part of ");
$ctx3.sendIdx["with:"]=4;
$4=_st(html)._a();
_st($4)._href_("http://todomvc.com");
$5=_st($4)._with_("TodoMVC");
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoInfo)})},
args: ["html"],
source: "renderOn: html\x0a\x09html footer\x0a\x09\x09id: 'info';\x0a\x09\x09with: [ \x0a\x09\x09\x09html p with: 'Double-click to edit a todo'.\x0a\x09\x09\x09html p with: 'Written by rbistolfi, @statonjr, & others'.\x0a\x09\x09\x09html p: [\x0a\x09\x09\x09\x09html with: 'Part of '.\x0a\x09\x09\x09\x09html a href: 'http://todomvc.com'; with: 'TodoMVC']].",
messageSends: ["id:", "footer", "with:", "p", "p:", "href:", "a"],
referencedClasses: []
}),
globals.TodoInfo);



smalltalk.addClass('TodoInput', globals.Widget, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "addTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("Adding todo:");
$ctx1.sendIdx["log:"]=1;
_st(console)._log_(aTodo);
return self}, function($ctx1) {$ctx1.fill(self,"addTodo:",{aTodo:aTodo},globals.TodoInput)})},
args: ["aTodo"],
source: "addTodo: aTodo\x0a\x09\x22Adds a Todo\x22\x0a\x09\x22FIXME: State!\x22\x0a\x09console log: 'Adding todo:'.\x0a\x09console log: aTodo.",
messageSends: ["log:"],
referencedClasses: []
}),
globals.TodoInput);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInput:",
protocol: 'events',
fn: function (anEvent){
var self=this;
var text,builder;
function $TodoBuilder(){return globals.TodoBuilder||(typeof TodoBuilder=="undefined"?nil:TodoBuilder)}
return smalltalk.withContext(function($ctx1) { 
text=_st(_st(anEvent)._target())._value();
builder=_st(_st($TodoBuilder())._new())._addText_(text);
self._addTodo_(_st(builder)._build());
return self}, function($ctx1) {$ctx1.fill(self,"handleInput:",{anEvent:anEvent,text:text,builder:builder},globals.TodoInput)})},
args: ["anEvent"],
source: "handleInput: anEvent\x0a\x09| text builder |\x0a    text := anEvent target value.\x0a    builder := (TodoBuilder new) addText: text.\x0a \x09self addTodo: (builder build).",
messageSends: ["value", "target", "addText:", "new", "addTodo:", "build"],
referencedClasses: ["TodoBuilder"]
}),
globals.TodoInput);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoInput.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoInput)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var input,defaultText;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2;
defaultText="What needs to be done?";
$1=_st(html)._header();
_st($1)._id_("header");
$ctx1.sendIdx["id:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h1_("todos");
$3=_st(html)._input();
_st($3)._id_("new-todo");
_st($3)._type_("text");
_st($3)._autofocus();
$4=_st($3)._onKeyUp_((function(event){
return smalltalk.withContext(function($ctx3) {
$5=_st(_st(event)._keyCode()).__eq((13));
if(smalltalk.assert($5)){
self._handleInput_(event);
return _st(_st(input)._asJQuery())._val_("");
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,2)})}));
input=$4;
return input;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(_st(input)._element())._placeholder_(defaultText);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,input:input,defaultText:defaultText},globals.TodoInput)})},
args: ["html"],
source: "renderOn: html\x0a\x09| input defaultText |\x0a\x09defaultText := 'What needs to be done?'.\x0a\x09html header\x0a\x09\x09id: 'header';\x0a\x09\x09with: [\x0a\x09\x09\x09\x09   html h1: 'todos'.\x0a                   input := html input\x0a\x09\x09\x09\x09    id: 'new-todo';\x0a                  \x09type: 'text';\x0a\x09\x09\x09\x09\x09autofocus;\x0a                  \x09onKeyUp: [ :event |\x0a                                  (event keyCode = 13) ifTrue: [\x0a                                    \x09self handleInput: event.\x0a                                    \x09input asJQuery val: '' ] ] ].\x0a\x09input element placeholder: defaultText.",
messageSends: ["id:", "header", "with:", "h1:", "input", "type:", "autofocus", "onKeyUp:", "ifTrue:", "=", "keyCode", "handleInput:", "val:", "asJQuery", "placeholder:", "element"],
referencedClasses: []
}),
globals.TodoInput);



smalltalk.addClass('TodoLabel', globals.Object, ['todo'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoLabel.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoLabel)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoLabel.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todo"]=aTodo;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithTodo:",{aTodo:aTodo},globals.TodoLabel)})},
args: ["aTodo"],
source: "initializeWithTodo: aTodo\x0a\x09super initialize.\x0a\x09todo := aTodo.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._label())._with_(_st(self["@todo"])._text());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoLabel)})},
args: ["html"],
source: "renderOn: html\x0a\x09html label with: (todo text).",
messageSends: ["with:", "label", "text"],
referencedClasses: []
}),
globals.TodoLabel);

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
globals.TodoLabel);


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
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoLabel.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self basicNew initializeWithTodo: aTodo.",
messageSends: ["initializeWithTodo:", "basicNew"],
referencedClasses: []
}),
globals.TodoLabel.klass);


smalltalk.addClass('TodoList', globals.Widget, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "appendTodoListItem:",
protocol: 'rendering',
fn: function (todoListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(todoListItem)._appendToJQuery_("#todo-list"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendTodoListItem:",{todoListItem:todoListItem},globals.TodoList)})},
args: ["todoListItem"],
source: "appendTodoListItem: todoListItem\x0a\x09\x22Adds a list item to the end of list items\x22\x0a\x09todoListItem appendToJQuery: '#todo-list' asJQuery.",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "clearCompleted",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_("Remove completed items!");
return self}, function($ctx1) {$ctx1.fill(self,"clearCompleted",{},globals.TodoList)})},
args: [],
source: "clearCompleted\x0a\x09console log: 'Remove completed items!'",
messageSends: ["log:"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoAdded(){return globals.TodoAdded||(typeof TodoAdded=="undefined"?nil:TodoAdded)}
function $TodoListItem(){return globals.TodoListItem||(typeof TodoListItem=="undefined"?nil:TodoListItem)}
function $TodoDeleted(){return globals.TodoDeleted||(typeof TodoDeleted=="undefined"?nil:TodoDeleted)}
function $TodoClearCompleted(){return globals.TodoClearCompleted||(typeof TodoClearCompleted=="undefined"?nil:TodoClearCompleted)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.TodoList.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._on_do_($TodoAdded(),(function(aTodoAdded){
return smalltalk.withContext(function($ctx2) {
$2=_st(aTodoAdded)._todo();
$ctx2.sendIdx["todo"]=1;
$1=_st($TodoListItem())._newWithTodo_($2);
return self._appendTodoListItem_($1);
}, function($ctx2) {$ctx2.fillBlock({aTodoAdded:aTodoAdded},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(announcer)._on_do_($TodoDeleted(),(function(aTodoDeleted){
return smalltalk.withContext(function($ctx2) {
return self._removeFromList_(_st(aTodoDeleted)._todo());
}, function($ctx2) {$ctx2.fillBlock({aTodoDeleted:aTodoDeleted},$ctx1,2)})}));
$ctx1.sendIdx["on:do:"]=2;
_st(announcer)._on_do_($TodoClearCompleted(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._clearCompleted();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{announcer:announcer},globals.TodoList)})},
args: [],
source: "initialize\x0a\x09| announcer |\x0a\x09super initialize.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer on: TodoAdded do: [ :aTodoAdded | self appendTodoListItem: (TodoListItem newWithTodo: (aTodoAdded todo)) ].\x0a\x09announcer on: TodoDeleted do: [ :aTodoDeleted | self removeFromList: (aTodoDeleted todo). ].\x0a\x09announcer on: TodoClearCompleted do: [ self clearCompleted. ].",
messageSends: ["initialize", "current", "on:do:", "appendTodoListItem:", "newWithTodo:", "todo", "removeFromList:", "clearCompleted"],
referencedClasses: ["TodoAnnouncer", "TodoAdded", "TodoListItem", "TodoDeleted", "TodoClearCompleted"]
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromList:",
protocol: 'rendering',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st("#".__comma(_st(aTodo)._id()))._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeFromList:",{aTodo:aTodo},globals.TodoList)})},
args: ["aTodo"],
source: "removeFromList: aTodo\x0a\x09\x22Removes a list item from the list of items\x22\x0a\x09('#', (aTodo id)) asJQuery remove.",
messageSends: ["remove", "asJQuery", ",", "id"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var todos;
function $TodoApp(){return globals.TodoApp||(typeof TodoApp=="undefined"?nil:TodoApp)}
function $TodoListItem(){return globals.TodoListItem||(typeof TodoListItem=="undefined"?nil:TodoListItem)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
todos=_st($TodoApp())._todos();
$1=_st(html)._ul();
_st($1)._id_("todo-list");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(todos)._do_((function(aTodo){
return smalltalk.withContext(function($ctx3) {
return _st(_st($TodoListItem())._newWithTodo_(aTodo))._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({aTodo:aTodo},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,todos:todos},globals.TodoList)})},
args: ["html"],
source: "renderOn: html\x0a\x09| todos |\x0a\x09todos := TodoApp todos.\x0a\x09html ul\x0a\x09\x09id: 'todo-list';\x0a\x09\x09with: [ todos do: [ :aTodo | (TodoListItem newWithTodo: aTodo) renderOn: html ]].",
messageSends: ["todos", "id:", "ul", "with:", "do:", "renderOn:", "newWithTodo:"],
referencedClasses: ["TodoApp", "TodoListItem"]
}),
globals.TodoList);



smalltalk.addClass('TodoListItem', globals.Widget, ['todo', 'checkbox', 'label', 'button'], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "button",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@button"];
return $1;
},
args: [],
source: "button\x0a\x09^ button.",
messageSends: [],
referencedClasses: []
}),
globals.TodoListItem);

smalltalk.addMethod(
smalltalk.method({
selector: "checkbox",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@checkbox"];
return $1;
},
args: [],
source: "checkbox\x0a\x09^ checkbox.",
messageSends: [],
referencedClasses: []
}),
globals.TodoListItem);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeWithTodo_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoListItem)})},
args: [],
source: "initialize\x0a\x09\x22FIXME: Raise an error\x22\x0a\x09self initializeWithTodo: nil.",
messageSends: ["initializeWithTodo:"],
referencedClasses: []
}),
globals.TodoListItem);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithTodo:",
protocol: 'initialization',
fn: function (aTodo){
var self=this;
var announcer;
function $TodoCheckbox(){return globals.TodoCheckbox||(typeof TodoCheckbox=="undefined"?nil:TodoCheckbox)}
function $TodoDeleteButton(){return globals.TodoDeleteButton||(typeof TodoDeleteButton=="undefined"?nil:TodoDeleteButton)}
function $TodoLabel(){return globals.TodoLabel||(typeof TodoLabel=="undefined"?nil:TodoLabel)}
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoUpdated(){return globals.TodoUpdated||(typeof TodoUpdated=="undefined"?nil:TodoUpdated)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoListItem.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todo"]=aTodo;
self["@checkbox"]=_st($TodoCheckbox())._newWithTodo_(aTodo);
$ctx1.sendIdx["newWithTodo:"]=1;
self["@button"]=_st($TodoDeleteButton())._newWithTodo_(aTodo);
$ctx1.sendIdx["newWithTodo:"]=2;
self["@label"]=_st($TodoLabel())._newWithTodo_(aTodo);
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._on_do_($TodoUpdated(),(function(aTodoUpdated){
return smalltalk.withContext(function($ctx2) {
return self._updateTodo_(_st(aTodoUpdated)._todo());
}, function($ctx2) {$ctx2.fillBlock({aTodoUpdated:aTodoUpdated},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithTodo:",{aTodo:aTodo,announcer:announcer},globals.TodoListItem)})},
args: ["aTodo"],
source: "initializeWithTodo: aTodo\x0a\x09| announcer |\x0a\x09super initialize.\x0a\x09todo := aTodo.\x0a\x09checkbox := TodoCheckbox newWithTodo: aTodo.\x0a\x09button := TodoDeleteButton newWithTodo: aTodo.\x0a\x09label := TodoLabel newWithTodo: aTodo.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer on: TodoUpdated do: [ :aTodoUpdated | self updateTodo: (aTodoUpdated todo) ].",
messageSends: ["initialize", "newWithTodo:", "current", "on:do:", "updateTodo:", "todo"],
referencedClasses: ["TodoCheckbox", "TodoDeleteButton", "TodoLabel", "TodoAnnouncer", "TodoUpdated"]
}),
globals.TodoListItem);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;
},
args: [],
source: "label\x0a\x09^ label.",
messageSends: [],
referencedClasses: []
}),
globals.TodoListItem);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$7,$5;
$1=_st(html)._li();
$2=$1;
$4=_st(self["@todo"])._isDone();
if(smalltalk.assert($4)){
} else {
$3="";
};
_st($2)._class_($3);
$ctx1.sendIdx["class:"]=1;
_st($1)._id_(_st(self["@todo"])._id());
$5=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._div();
_st($6)._class_("view");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self["@checkbox"])._renderOn_(html);
$ctx3.sendIdx["renderOn:"]=1;
_st(self["@label"])._renderOn_(html);
$ctx3.sendIdx["renderOn:"]=2;
return _st(self["@button"])._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoListItem)})},
args: ["html"],
source: "renderOn: html\x0a\x09html li \x0a\x09\x09\x22FIXME: State!\x22\x0a\x09\x09class: ((todo isDone) ifTrue: [ \x22completed\x22 ] ifFalse: [''] );\x0a\x09\x09id: (todo id);\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'view';\x0a\x09\x09\x09\x09with: [\x0a                  \x09checkbox renderOn: html.\x0a\x09\x09\x09\x09\x09label renderOn: html.\x0a\x09\x09\x09\x09\x09button renderOn: html. ]].",
messageSends: ["class:", "li", "ifTrue:ifFalse:", "isDone", "id:", "id", "with:", "div", "renderOn:"],
referencedClasses: []
}),
globals.TodoListItem);

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
globals.TodoListItem);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTodo:",
protocol: 'rendering',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
_st(console)._log_(aTodo);
$1=_st(aTodo)._isDone();
if(smalltalk.assert($1)){
$4=_st(aTodo)._id();
$ctx1.sendIdx["id"]=1;
$3="#".__comma($4);
$ctx1.sendIdx[","]=1;
$2=_st($3)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._addClass_("completed");
} else {
_st(_st("#".__comma(_st(aTodo)._id()))._asJQuery())._removeClass_("completed");
};
return self}, function($ctx1) {$ctx1.fill(self,"updateTodo:",{aTodo:aTodo},globals.TodoListItem)})},
args: ["aTodo"],
source: "updateTodo: aTodo\x0a\x09\x22Toggles whether this Todo isDone\x22\x0a\x09console log: aTodo.\x0a\x09aTodo isDone\x0a\x09\x09ifTrue: [ ('#', aTodo id) asJQuery addClass: 'completed'. ]\x0a\x09\x09ifFalse: [ ('#', aTodo id) asJQuery removeClass: 'completed' ].",
messageSends: ["log:", "ifTrue:ifFalse:", "isDone", "addClass:", "asJQuery", ",", "id", "removeClass:"],
referencedClasses: []
}),
globals.TodoListItem);


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
}, function($ctx1) {$ctx1.fill(self,"newWithTodo:",{aTodo:aTodo},globals.TodoListItem.klass)})},
args: ["aTodo"],
source: "newWithTodo: aTodo\x0a\x09^ self basicNew initializeWithTodo: aTodo.",
messageSends: ["initializeWithTodo:", "basicNew"],
referencedClasses: []
}),
globals.TodoListItem.klass);


smalltalk.addClass('TodoMain', globals.Widget, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var announcer;
function $TodoAnnouncer(){return globals.TodoAnnouncer||(typeof TodoAnnouncer=="undefined"?nil:TodoAnnouncer)}
function $TodoAdded(){return globals.TodoAdded||(typeof TodoAdded=="undefined"?nil:TodoAdded)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoMain.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
announcer=_st($TodoAnnouncer())._current();
_st(announcer)._on_do_($TodoAdded(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._show();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{announcer:announcer},globals.TodoMain)})},
args: [],
source: "initialize\x0a\x09| announcer |\x0a\x09super initialize.\x0a\x09announcer := TodoAnnouncer current.\x0a\x09announcer on: TodoAdded do: [ self show ].",
messageSends: ["initialize", "current", "on:do:", "show"],
referencedClasses: ["TodoAnnouncer", "TodoAdded"]
}),
globals.TodoMain);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TodoApp(){return globals.TodoApp||(typeof TodoApp=="undefined"?nil:TodoApp)}
function $TodoToggle(){return globals.TodoToggle||(typeof TodoToggle=="undefined"?nil:TodoToggle)}
function $TodoList(){return globals.TodoList||(typeof TodoList=="undefined"?nil:TodoList)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5;
$1=_st(html)._section();
_st($1)._id_("main");
$2=$1;
$4=_st(_st(_st($TodoApp())._todos())._size()).__gt((0));
if(smalltalk.assert($4)){
$3="";
} else {
$3="display: none;";
};
_st($2)._style_($3);
$5=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st($TodoToggle())._new();
$ctx2.sendIdx["new"]=1;
_st($6)._renderOn_(html);
$ctx2.sendIdx["renderOn:"]=1;
return _st(_st($TodoList())._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoMain)})},
args: ["html"],
source: "renderOn: html\x0a\x09html section\x0a\x09\x09id: 'main';\x0a\x09\x09style: ((TodoApp todos size > 0) ifTrue: [''] ifFalse: [ 'display: none;' ]);\x0a\x09\x09with: [\x0a\x09\x09\x09TodoToggle new renderOn: html.\x0a            TodoList new renderOn: html. ].",
messageSends: ["id:", "section", "style:", "ifTrue:ifFalse:", ">", "size", "todos", "with:", "renderOn:", "new"],
referencedClasses: ["TodoApp", "TodoToggle", "TodoList"]
}),
globals.TodoMain);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#main"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.TodoMain)})},
args: [],
source: "show\x0a\x09'#main' asJQuery show. ",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
globals.TodoMain);



smalltalk.addClass('TodoToggle', globals.Object, [], 'Examples-ToDo-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoToggle.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoToggle)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TodoToggle);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var input,label;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._input();
_st($1)._id_("toggle-all");
$2=_st($1)._type_("checkbox");
input=$2;
$3=_st(html)._label();
_st($3)._for_("toggle-all");
$4=_st($3)._with_("Mark all as complete");
label=$4;
_st(input)._element();
$ctx1.sendIdx["element"]=1;
_st(label)._element();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,input:input,label:label},globals.TodoToggle)})},
args: ["html"],
source: "renderOn: html\x0a\x09| input label |\x0a\x09input := html input\x0a\x09\x09\x09\x09    id: 'toggle-all';\x0a                  \x09type: 'checkbox'.\x0a\x09label := html label\x0a\x09\x09\x09\x09\x09for: 'toggle-all';\x0a\x09\x09\x09\x09\x09with: 'Mark all as complete'.\x0a\x09input element.\x0a\x09label element.",
messageSends: ["id:", "input", "type:", "for:", "label", "with:", "element"],
referencedClasses: []
}),
globals.TodoToggle);


});
