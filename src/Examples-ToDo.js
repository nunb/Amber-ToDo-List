define("Examples/Examples-ToDo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo');
smalltalk.packages["Examples-ToDo"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('FooterCount', globals.Widget, ['count'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "count",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@count"];
return $1;
},
args: [],
source: "count\x0a\x09^ count",
messageSends: [],
referencedClasses: []
}),
globals.FooterCount);

smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
protocol: 'rendering',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aNumber).__eq((1));
if(smalltalk.assert($1)){
"1 item left";
} else {
_st(_st(aNumber)._asString()).__comma(" items left");
};
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{aNumber:aNumber},globals.FooterCount)});},
args: ["aNumber"],
source: "decorate: aNumber\x0a\x09aNumber = 1\x0a\x09\x09ifTrue: [ '1 item left' ]\x0a\x09\x09ifFalse: [ aNumber asString, ' items left' ].",
messageSends: ["ifTrue:ifFalse:", "=", ",", "asString"],
referencedClasses: []
}),
globals.FooterCount);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.FooterCount.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@count"]=_st(_st(_st($TodoStorage())._singleton())._items())._size();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FooterCount)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09count := TodoStorage singleton items size.",
messageSends: ["initialize", "size", "items", "singleton"],
referencedClasses: ["TodoStorage"]
}),
globals.FooterCount);

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
$2=_st($1)._with_("1 item left");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FooterCount)})},
args: ["html"],
source: "renderOn: html\x0a\x09html span\x0a\x09\x09id: 'todo-count';\x0a\x09\x09with: '1 item left'.\x0a\x09",
messageSends: ["id:", "span", "with:"],
referencedClasses: []
}),
globals.FooterCount);


smalltalk.addMethod(
smalltalk.method({
selector: "singleton",
protocol: 'initialization',
fn: function () {
var self=this;
var UniqueInstance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=UniqueInstance;
if(($receiver = $1) == null || $receiver.isNil){
UniqueInstance=_st(self._basicNew())._initialize();
UniqueInstance;
} else {
$1;
};
$2=UniqueInstance;
return $2;
}, function($ctx1) {$ctx1.fill(self,"singleton",{UniqueInstance:UniqueInstance},globals.FooterCount.klass)});},
args: [],
source: "singleton\x0a\x09| UniqueInstance |\x0a\x09UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].\x0a    ^ UniqueInstance.",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
globals.FooterCount.klass);


smalltalk.addClass('FooterSection', globals.Widget, [], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.FooterSection.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FooterSection)});},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.FooterSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
function $FooterCount(){return globals.FooterCount||(typeof FooterCount=="undefined"?nil:FooterCount)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$7,$6,$5,$4,$3,$8;
$1=_st(html)._footer();
_st($1)._id_("footer");
$2=$1;
$7=_st($TodoStorage())._singleton();
$ctx1.sendIdx["singleton"]=1;
$6=_st($7)._items();
$5=_st($6)._size();
$4=_st($5).__eq((0));
if(smalltalk.assert($4)){
$3="display: none;";
};
_st($2)._style_($3);
$8=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st($FooterCount())._singleton())._renderOn_(html);
return self._renderTodoFiltersOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FooterSection)})},
args: ["html"],
source: "renderOn: html\x0a\x09html footer\x0a\x09\x09id: 'footer';\x0a\x09\x09style: ((TodoStorage singleton items size = 0) ifTrue: [ 'display: none;' ]);\x0a\x09\x09with: [\x0a\x09\x09\x09FooterCount singleton renderOn: html.\x0a\x09\x09\x09self renderTodoFiltersOn: html.]",
messageSends: ["id:", "footer", "style:", "ifTrue:", "=", "size", "items", "singleton", "with:", "renderOn:", "renderTodoFiltersOn:"],
referencedClasses: ["TodoStorage", "FooterCount"]
}),
globals.FooterSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodoFiltersOn:",
protocol: 'rendering',
fn: function (html) {
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
_st($3)._href_("#/");
$ctx3.sendIdx["href:"]=1;
$4=_st($3)._with_("All");
$ctx3.sendIdx["with:"]=2;
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["li:"]=1;
_st(html)._li_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._a();
$ctx3.sendIdx["a"]=2;
_st($5)._href_("#/active");
$ctx3.sendIdx["href:"]=2;
$6=_st($5)._with_("Active");
$ctx3.sendIdx["with:"]=3;
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["li:"]=2;
return _st(html)._li_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
_st($7)._href_("#/completed");
$8=_st($7)._with_("Completed");
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTodoFiltersOn:",{html:html},globals.FooterSection)});},
args: ["html"],
source: "renderTodoFiltersOn: html\x0a\x09html ul\x0a\x09\x09id: 'filters';\x0a\x09\x09with: [\x0a\x09\x09\x09html li: [ html a href: '#/'; with: 'All'. ].\x0a\x09\x09\x09html li: [ html a href: '#/active'; with: 'Active'. ].\x0a\x09\x09\x09html li: [ html a href: '#/completed'; with: 'Completed'. ]].",
messageSends: ["id:", "ul", "with:", "li:", "href:", "a"],
referencedClasses: []
}),
globals.FooterSection);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#footer"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.FooterSection)})},
args: [],
source: "show\x0a\x09'#footer' asJQuery show.",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
globals.FooterSection);


smalltalk.addMethod(
smalltalk.method({
selector: "singleton",
protocol: 'initialization',
fn: function (){
var self=this;
var UniqueInstance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=UniqueInstance;
if(($receiver = $1) == null || $receiver.isNil){
UniqueInstance=_st(self._basicNew())._initialize();
UniqueInstance;
} else {
$1;
};
$2=UniqueInstance;
return $2;
}, function($ctx1) {$ctx1.fill(self,"singleton",{UniqueInstance:UniqueInstance},globals.FooterSection.klass)})},
args: [],
source: "singleton\x0a\x09| UniqueInstance |\x0a\x09UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].\x0a    ^ UniqueInstance.",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
globals.FooterSection.klass);


smalltalk.addClass('MainSection', globals.Widget, [], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "appendTodoListItem:",
protocol: 'rendering',
fn: function (todo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show();
_st(todo)._appendToJQuery_("#todo-list"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendTodoListItem:",{todo:todo},globals.MainSection)})},
args: ["todo"],
source: "appendTodoListItem: todo\x0a\x09\x22Adds a list item to the end of list items\x22\x0a\x09self show.\x0a\x09todo appendToJQuery: '#todo-list' asJQuery.",
messageSends: ["show", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.MainSection);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.MainSection.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MainSection)});},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.MainSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=_st(html)._section();
_st($1)._id_("main");
$2=$1;
$4=_st(_st(_st(_st($TodoStorage())._singleton())._items())._size()).__eq((0));
if(smalltalk.assert($4)){
$3="display: none;";
};
_st($2)._style_($3);
$5=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderToggleTodosOn_(html);
return self._renderTodoListItemsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MainSection)})},
args: ["html"],
source: "renderOn: html\x0a\x09html section\x0a\x09\x09id: 'main';\x0a\x09\x09style: ((TodoStorage singleton items size = 0) ifTrue: [ 'display: none;' ]);\x0a\x09\x09with: [\x0a\x09\x09\x09self renderToggleTodosOn: html.\x0a            self renderTodoListItemsOn: html. ].",
messageSends: ["id:", "section", "style:", "ifTrue:", "=", "size", "items", "singleton", "with:", "renderToggleTodosOn:", "renderTodoListItemsOn:"],
referencedClasses: ["TodoStorage"]
}),
globals.MainSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodoListItemsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var todos;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
todos=_st(_st($TodoStorage())._singleton())._items();
$1=_st(html)._ul();
_st($1)._id_("todo-list");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(todos)._do_((function(aTodo){
return smalltalk.withContext(function($ctx3) {
return _st(aTodo)._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({aTodo:aTodo},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTodoListItemsOn:",{html:html,todos:todos},globals.MainSection)})},
args: ["html"],
source: "renderTodoListItemsOn: html\x0a\x09| todos |\x0a\x09todos := TodoStorage singleton items.\x0a\x09html ul\x0a\x09\x09id: 'todo-list';\x0a\x09\x09with: [ todos do: [ :aTodo | aTodo renderOn: html ]].",
messageSends: ["items", "singleton", "id:", "ul", "with:", "do:", "renderOn:"],
referencedClasses: ["TodoStorage"]
}),
globals.MainSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderToggleTodosOn:",
protocol: 'rendering',
fn: function (html) {
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
return self}, function($ctx1) {$ctx1.fill(self,"renderToggleTodosOn:",{html:html,input:input,label:label},globals.MainSection)});},
args: ["html"],
source: "renderToggleTodosOn: html\x0a\x09| input label |\x0a\x09input := html input\x0a\x09\x09\x09\x09    id: 'toggle-all';\x0a                  \x09type: 'checkbox'.\x0a\x09label := html label\x0a\x09\x09\x09\x09\x09for: 'toggle-all';\x0a\x09\x09\x09\x09\x09with: 'Mark all as complete'.\x0a\x09input element.\x0a\x09label element.",
messageSends: ["id:", "input", "type:", "for:", "label", "with:", "element"],
referencedClasses: []
}),
globals.MainSection);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#main"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.MainSection)})},
args: [],
source: "show\x0a\x09'#main' asJQuery show. ",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
globals.MainSection);


smalltalk.addMethod(
smalltalk.method({
selector: "singleton",
protocol: 'initialization',
fn: function () {
var self=this;
var UniqueInstance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=UniqueInstance;
if(($receiver = $1) == null || $receiver.isNil){
UniqueInstance=_st(self._basicNew())._initialize();
UniqueInstance;
} else {
$1;
};
$2=UniqueInstance;
return $2;
}, function($ctx1) {$ctx1.fill(self,"singleton",{UniqueInstance:UniqueInstance},globals.MainSection.klass)});},
args: [],
source: "singleton\x0a\x09| UniqueInstance |\x0a\x09UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].\x0a    ^ UniqueInstance.",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
globals.MainSection.klass);


smalltalk.addClass('Todo', globals.Widget, ['isDone', 'text', 'id'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'testing',
fn: function (aTodo) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._id();
$ctx1.sendIdx["id"]=1;
$1=_st($2).__eq(_st(aTodo)._id());
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aTodo:aTodo},globals.Todo)});},
args: ["aTodo"],
source: "= aTodo\x0a\x09^ self id = aTodo id",
messageSends: ["=", "id"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function () {
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
selector: "id:",
protocol: 'accessing',
fn: function (aString) {
var self=this;
self["@id"]=aString;
return self;},
args: ["aString"],
source: "id: aString\x0a\x09id := aString",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function () {
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Todo.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@id"]=_st(_st($Date())._now())._asNumber();
self["@isDone"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Todo)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09id := Date now asNumber.\x0a\x09isDone := false.",
messageSends: ["initialize", "asNumber", "now"],
referencedClasses: ["Date"]
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone",
protocol: 'accessing',
fn: function () {
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
selector: "isDone:",
protocol: 'accessing',
fn: function (aBool) {
var self=this;
self["@isDone"]=aBool;
return self;},
args: ["aBool"],
source: "isDone: aBool\x0a\x09isDone := aBool.",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCompletedCheckboxOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._input();
_st($1)._type_("checkbox");
_st($1)._class_("toggle");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._toggleCompleted();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderCompletedCheckboxOn:",{html:html},globals.Todo)});},
args: ["html"],
source: "renderCompletedCheckboxOn: html\x0a\x09html input\x0a    \x09type: 'checkbox';\x0a\x09\x09class: 'toggle';\x0a\x09\x09onClick: [ self toggleCompleted ].",
messageSends: ["type:", "input", "class:", "onClick:", "toggleCompleted"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDeleteButtonOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("destroy");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(console)._log_("delete me");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderDeleteButtonOn:",{html:html},globals.Todo)});},
args: ["html"],
source: "renderDeleteButtonOn: html\x0a\x09html button\x0a\x09\x09class: 'destroy';\x0a\x09\x09onClick: [ console log: 'delete me'. ].",
messageSends: ["class:", "button", "onClick:", "log:"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
var label;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$7,$5;
$1=_st(html)._li();
$2=$1;
$4=self._isDone();
if(smalltalk.assert($4)){
} else {
$3="";
};
_st($2)._class_($3);
$ctx1.sendIdx["class:"]=1;
_st($1)._id_(self._id());
$5=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._div();
_st($6)._class_("view");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderCompletedCheckboxOn_(html);
label=_st(_st(html)._label())._with_(self._text());
label;
return self._renderDeleteButtonOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=2;
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,label:label},globals.Todo)});},
args: ["html"],
source: "renderOn: html\x0a\x09| label |\x0a\x09html li \x0a\x09\x09class: (self isDone ifTrue: [ \x22completed\x22 ] ifFalse: [''] );\x0a\x09\x09id: self id;\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'view';\x0a\x09\x09\x09\x09with: [\x0a                  \x09self renderCompletedCheckboxOn: html.\x0a\x09\x09\x09\x09\x09label := html label with: self text.\x0a\x09\x09\x09\x09\x09self renderDeleteButtonOn: html. ]].",
messageSends: ["class:", "li", "ifTrue:ifFalse:", "isDone", "id:", "id", "with:", "div", "renderCompletedCheckboxOn:", "label", "text", "renderDeleteButtonOn:"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
protocol: 'accessing',
fn: function () {
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
selector: "text:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@text"]=anObject;
return self;},
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleCompleted",
protocol: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._toggleIsDone();
_st(_st("#".__comma(self._id()))._asJQuery())._toggleClass_("completed");
return self}, function($ctx1) {$ctx1.fill(self,"toggleCompleted",{},globals.Todo)});},
args: [],
source: "toggleCompleted\x0a\x09\x22Toggles whether this Todo isDone\x22\x0a\x09self toggleIsDone.\x0a\x09('#', self id) asJQuery toggleClass: 'completed'.\x0a\x09",
messageSends: ["toggleIsDone", "toggleClass:", "asJQuery", ",", "id"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleIsDone",
protocol: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isDone_(_st(self["@isDone"])._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleIsDone",{},globals.Todo)});},
args: [],
source: "toggleIsDone\x0a\x09self isDone: isDone not.",
messageSends: ["isDone:", "not"],
referencedClasses: []
}),
globals.Todo);


smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:",
protocol: 'not yet classified',
fn: function (aDict) {
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
todo=self._new();
$1=todo;
$2=_st(aDict)._at_("id");
$ctx1.sendIdx["at:"]=1;
_st($1)._id_($2);
$3=todo;
$4=_st(aDict)._at_("text");
$ctx1.sendIdx["at:"]=2;
_st($3)._text_($4);
_st(todo)._isDone_(_st(aDict)._at_("isDone"));
$5=todo;
return $5;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:",{aDict:aDict,todo:todo},globals.Todo.klass)});},
args: ["aDict"],
source: "fromDictionary: aDict\x0a\x09| todo |\x0a\x09todo := self new.\x0a\x09todo id: (aDict at: 'id').\x0a\x09todo text: (aDict at: 'text').\x0a\x09todo isDone: (aDict at: 'isDone').\x0a\x09^ todo",
messageSends: ["new", "id:", "at:", "text:", "isDone:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:withCallback:",
protocol: 'not yet classified',
fn: function (aDict, aBlock) {
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=self._fromDictionary_(aDict);
_st(todo)._onTodoChangedDo_(aBlock);
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withCallback:",{aDict:aDict,aBlock:aBlock,todo:todo},globals.Todo.klass)});},
args: ["aDict", "aBlock"],
source: "fromDictionary: aDict withCallback: aBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09^ todo",
messageSends: ["fromDictionary:", "onTodoChangedDo:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",
protocol: 'not yet classified',
fn: function (aDict, aBlock, oBlock) {
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=self._fromDictionary_(aDict);
_st(todo)._onTodoChangedDo_(aBlock);
_st(todo)._onDeleteClickedDo_(oBlock);
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",{aDict:aDict,aBlock:aBlock,oBlock:oBlock,todo:todo},globals.Todo.klass)});},
args: ["aDict", "aBlock", "oBlock"],
source: "fromDictionary: aDict withTodoChangedCallback: aBlock withDeleteClickedCallback: oBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09todo onDeleteClickedDo: oBlock.\x0a\x09^ todo",
messageSends: ["fromDictionary:", "onTodoChangedDo:", "onDeleteClickedDo:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithText:",
protocol: 'initialization',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithText:",{aString:aString},globals.Todo.klass)});},
args: ["aString"],
source: "newWithText: aString\x0a\x09^ self new text: aString",
messageSends: ["text:", "new"],
referencedClasses: []
}),
globals.Todo.klass);


smalltalk.addClass('TodoApp', globals.Widget, ['storage'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "addTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
_st(self["@storage"])._add_(aTodo);
$1=_st(self["@storage"])._save();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._renderTodo_(aTodo);
};
return self}, function($ctx1) {$ctx1.fill(self,"addTodo:",{aTodo:aTodo},globals.TodoApp)})},
args: ["aTodo"],
source: "addTodo: aTodo\x0a\x09\x22Adds a Todo and tells storage to save it\x22\x0a    storage add: aTodo.\x0a\x09storage save\x0a\x09\x09ifNotNil: [ self renderTodo: aTodo. ].",
messageSends: ["add:", "ifNotNil:", "save", "renderTodo:"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInput:",
protocol: 'events',
fn: function (anEvent) {
var self=this;
var text,todo;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
text=_st(_st(anEvent)._target())._value();
todo=_st($Todo())._newWithText_(text);
self._addTodo_(todo);
return self}, function($ctx1) {$ctx1.fill(self,"handleInput:",{anEvent:anEvent,text:text,todo:todo},globals.TodoApp)});},
args: ["anEvent"],
source: "handleInput: anEvent\x0a\x09| text todo |\x0a    text := anEvent target value.\x0a    todo := Todo newWithText: text.\x0a \x09self addTodo: todo.",
messageSends: ["value", "target", "newWithText:", "addTodo:"],
referencedClasses: ["Todo"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function () {
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoApp.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@storage"]=_st($TodoStorage())._singleton();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoApp)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09storage := TodoStorage singleton.",
messageSends: ["initialize", "singleton"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTodo:",
protocol: 'adding/removing',
fn: function (aTodo) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@storage"])._remove_(aTodo);
return self}, function($ctx1) {$ctx1.fill(self,"removeTodo:",{aTodo:aTodo},globals.TodoApp)});},
args: ["aTodo"],
source: "removeTodo: aTodo\x0a\x09storage remove: aTodo.",
messageSends: ["remove:"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._section();
_st($1)._id_("todoapp");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderFormOn_(html);
return self._renderTodosOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html},globals.TodoApp)});},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html section\x0a\x09\x09id: 'todoapp';\x0a\x09\x09with: [\x0a                  self renderFormOn: html.\x0a                  self renderTodosOn: html ]",
messageSends: ["id:", "section", "with:", "renderFormOn:", "renderTodosOn:"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFooterOn:",
protocol: 'rendering',
fn: function (html) {
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
_st(_st(html)._p())._with_("Written by rbistolfi");
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
return self}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html},globals.TodoApp)});},
args: ["html"],
source: "renderFooterOn: html\x0a\x09html footer\x0a\x09\x09id: 'info';\x0a\x09\x09with: [ \x0a\x09\x09\x09html p with: 'Double-click to edit a todo'.\x0a\x09\x09\x09html p with: 'Written by rbistolfi'.\x0a\x09\x09\x09html p: [\x0a\x09\x09\x09\x09html with: 'Part of '.\x0a\x09\x09\x09\x09html a href: 'http://todomvc.com'; with: 'TodoMVC']].",
messageSends: ["id:", "footer", "with:", "p", "p:", "href:", "a"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html) {
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
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html,input:input,defaultText:defaultText},globals.TodoApp)});},
args: ["html"],
source: "renderFormOn: html\x0a\x09| input defaultText |\x0a\x09defaultText := 'What needs to be done?'.\x0a\x09html header\x0a\x09\x09id: 'header';\x0a\x09\x09with: [\x0a\x09\x09\x09\x09   html h1: 'todos'.\x0a                   input := html input\x0a\x09\x09\x09\x09    id: 'new-todo';\x0a                  \x09type: 'text';\x0a\x09\x09\x09\x09\x09autofocus;\x0a                  \x09onKeyUp: [ :event |\x0a                                  (event keyCode = 13) ifTrue: [\x0a                                    \x09self handleInput: event.\x0a                                    \x09input asJQuery val: '' ] ] ].\x0a\x09input element placeholder: defaultText.",
messageSends: ["id:", "header", "with:", "h1:", "input", "type:", "autofocus", "onKeyUp:", "ifTrue:", "=", "keyCode", "handleInput:", "val:", "asJQuery", "placeholder:", "element"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderBodyOn_(html);
self._renderFooterOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoApp)});},
args: ["html"],
source: "renderOn: html\x0a\x09self renderBodyOn: html.\x0a    self renderFooterOn: html.",
messageSends: ["renderBodyOn:", "renderFooterOn:"],
referencedClasses: []
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodo:",
protocol: 'rendering',
fn: function (aTodo){
var self=this;
function $MainSection(){return globals.MainSection||(typeof MainSection=="undefined"?nil:MainSection)}
function $FooterSection(){return globals.FooterSection||(typeof FooterSection=="undefined"?nil:FooterSection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MainSection())._singleton();
$ctx1.sendIdx["singleton"]=1;
_st($1)._appendTodoListItem_(aTodo);
_st(_st($FooterSection())._singleton())._show();
return self}, function($ctx1) {$ctx1.fill(self,"renderTodo:",{aTodo:aTodo},globals.TodoApp)})},
args: ["aTodo"],
source: "renderTodo: aTodo\x0a\x09MainSection singleton appendTodoListItem: aTodo.\x0a\x09FooterSection singleton show.",
messageSends: ["appendTodoListItem:", "singleton", "show"],
referencedClasses: ["MainSection", "FooterSection"]
}),
globals.TodoApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodosOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MainSection(){return globals.MainSection||(typeof MainSection=="undefined"?nil:MainSection)}
function $FooterSection(){return globals.FooterSection||(typeof FooterSection=="undefined"?nil:FooterSection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MainSection())._singleton();
$ctx1.sendIdx["singleton"]=1;
_st($1)._renderOn_(html);
$ctx1.sendIdx["renderOn:"]=1;
_st(_st($FooterSection())._singleton())._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderTodosOn:",{html:html},globals.TodoApp)})},
args: ["html"],
source: "renderTodosOn: html\x0a\x09MainSection singleton renderOn: html.\x0a\x09FooterSection singleton renderOn: html.",
messageSends: ["renderOn:", "singleton"],
referencedClasses: ["MainSection", "FooterSection"]
}),
globals.TodoApp);


smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"run",{},globals.TodoApp.klass)});},
args: [],
source: "run\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.TodoApp.klass);


smalltalk.addClass('TodoStorage', globals.Object, ['items'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@items"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.TodoStorage)});},
args: ["anObject"],
source: "add: anObject\x0a\x09items add: anObject.",
messageSends: ["add:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (anIndex) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._at_(anIndex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},globals.TodoStorage)});},
args: ["anIndex"],
source: "at: anIndex\x0a\x09^ array at: anIndex",
messageSends: ["at:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex, anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._at_put_(anIndex,anObject);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},globals.TodoStorage)});},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09array at: anIndex put: anObject.\x0a\x09self save",
messageSends: ["at:put:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
protocol: 'iterating',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._collect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},globals.TodoStorage)});},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^ array collect: aBlock",
messageSends: ["collect:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
protocol: 'iterating',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._detect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},globals.TodoStorage)});},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ array detect: aBlock",
messageSends: ["detect:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'iterating',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_(aBlock);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.TodoStorage)});},
args: ["aBlock"],
source: "do: aBlock\x0a\x09array do: aBlock.\x0a\x09self save.",
messageSends: ["do:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "fetch",
protocol: 'persistence',
fn: function () {
var self=this;
var storedTodos,todos;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=_st(localStorage)._getItem_("todos-amber");
if(($receiver = $1) == null || $receiver.isNil){
todos=self._initializeStorage();
storedTodos=todos;
} else {
todos=self._load();
storedTodos=todos;
};
$2=todos;
return $2;
}, function($ctx1) {$ctx1.fill(self,"fetch",{storedTodos:storedTodos,todos:todos},globals.TodoStorage)});},
args: [],
source: "fetch\x0a\x09| storedTodos todos |\x0a\x09storedTodos := (localStorage getItem: 'todos-amber')\x0a\x09\x09ifNil: [ todos := self initializeStorage ]\x0a\x09\x09ifNotNil: [ todos := self load ].\x0a\x09^ todos.",
messageSends: ["ifNil:ifNotNil:", "getItem:", "initializeStorage", "load"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._indexOf_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},globals.TodoStorage)});},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09^ array indexOf: anObject",
messageSends: ["indexOf:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=self._fetch();
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoStorage)});},
args: [],
source: "initialize\x0a\x09items := self fetch.\x0a\x09^ self.",
messageSends: ["fetch"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeStorage",
protocol: 'initializing',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
$1=localStorage;
$3=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
$2=_st($3)._asJSONString();
_st($1)._setItem_value_("todos-amber",$2);
$4=_st($Array())._new();
return $4;
}, function($ctx1) {$ctx1.fill(self,"initializeStorage",{},globals.TodoStorage)});},
args: [],
source: "initializeStorage\x0a\x09\x22 Initialize localStorage with an empty Array\x22\x0a\x09localStorage setItem: 'todos-amber' value: (Array new) asJSONString.\x0a\x09^ Array new.",
messageSends: ["setItem:value:", "asJSONString", "new"],
referencedClasses: ["Array"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@items"];
return $1;
},
args: [],
source: "items\x0a\x09^ items",
messageSends: [],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
protocol: 'persistence',
fn: function () {
var self=this;
var str,todos;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1;
str=_st(localStorage)._getItem_("todos-amber");
todos=_st($Smalltalk())._readJSObject_(_st($JSON())._parse_(str));
$1=_st(todos)._collect_((function(todo){
return smalltalk.withContext(function($ctx2) {
return _st($Todo())._fromDictionary_(todo);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"load",{str:str,todos:todos},globals.TodoStorage)});},
args: [],
source: "load\x0a\x09\x22Loads the serialized items from localStorage\x22\x0a\x09| str todos |\x0a\x09str := (localStorage getItem: 'todos-amber').\x0a\x09todos := Smalltalk readJSObject: (JSON parse: str).\x0a\x09^ todos collect: [ :todo | Todo fromDictionary: todo ].\x0a\x09",
messageSends: ["getItem:", "readJSObject:", "parse:", "collect:", "fromDictionary:"],
referencedClasses: ["Smalltalk", "JSON", "Todo"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject) {
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { 
var $1;
d=_st(self["@items"])._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._asJSON();
$ctx2.sendIdx["asJSON"]=1;
return _st($1).__eq(_st(anObject)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self["@items"])._remove_(d);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject,d:d},globals.TodoStorage)});},
args: ["anObject"],
source: "remove: anObject\x0a\x09| d |\x0a\x09d := items detect: [ :each | each asJSON = anObject asJSON ]. \x0a\x09items remove: d.",
messageSends: ["detect:", "=", "asJSON", "remove:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "save",
protocol: 'persistence',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(localStorage)._setItem_value_("todos-amber",_st(self["@items"])._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"save",{},globals.TodoStorage)});},
args: [],
source: "save\x0a\x09localStorage setItem: 'todos-amber' value: items asJSONString.",
messageSends: ["setItem:value:", "asJSONString"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'iterating',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},globals.TodoStorage)});},
args: ["aBlock"],
source: "select: aBlock\x0a\x09^ array select: aBlock",
messageSends: ["select:"],
referencedClasses: []
}),
globals.TodoStorage);


globals.TodoStorage.klass.iVarNames = ['singleton'];
smalltalk.addMethod(
smalltalk.method({
selector: "singleton",
protocol: 'initialization',
fn: function () {
var self=this;
var UniqueInstance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=UniqueInstance;
if(($receiver = $1) == null || $receiver.isNil){
UniqueInstance=_st(self._basicNew())._initialize();
UniqueInstance;
} else {
$1;
};
$2=UniqueInstance;
return $2;
}, function($ctx1) {$ctx1.fill(self,"singleton",{UniqueInstance:UniqueInstance},globals.TodoStorage.klass)});},
args: [],
source: "singleton\x0a\x09| UniqueInstance |\x0a\x09UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].\x0a    ^ UniqueInstance.",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
globals.TodoStorage.klass);

});
