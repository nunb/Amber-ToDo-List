define("Examples/Examples-ToDo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo');
smalltalk.packages["Examples-ToDo"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('FooterSection', globals.Widget, [], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
protocol: 'rendering',
fn: function (num){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(num).__eq((1));
if(smalltalk.assert($1)){
"1 item left";
} else {
_st(num).__comma(" items left");
};
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{num:num},globals.FooterSection)})},
args: ["num"],
source: "decorate: num\x0a\x09num = 1\x0a\x09\x09ifTrue: [ '1 item left' ]\x0a\x09\x09ifFalse: [ num, ' items left' ].\x0a\x09",
messageSends: ["ifTrue:ifFalse:", "=", ","],
referencedClasses: []
}),
globals.FooterSection);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.FooterSection.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FooterSection)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._footer();
_st($1)._id_("footer");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderTodoCountOn_(html);
return self._renderTodoFiltersOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FooterSection)})},
args: ["html"],
source: "renderOn: html\x0a\x09html footer\x0a\x09\x09id: 'footer';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderTodoCountOn: html.\x0a\x09\x09\x09self renderTodoFiltersOn: html.]",
messageSends: ["id:", "footer", "with:", "renderTodoCountOn:", "renderTodoFiltersOn:"],
referencedClasses: []
}),
globals.FooterSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodoCountOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._id_("todo-count");
$2=_st($1)._with_("1 item left");
return self}, function($ctx1) {$ctx1.fill(self,"renderTodoCountOn:",{html:html},globals.FooterSection)})},
args: ["html"],
source: "renderTodoCountOn: html\x0a\x09\x22Renders the count of Todos that are not done in the footer\x22\x0a\x09html span\x0a\x09\x09id: 'todo-count';\x0a\x09\x09with: '1 item left'.",
messageSends: ["id:", "span", "with:"],
referencedClasses: []
}),
globals.FooterSection);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodoFiltersOn:",
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
_st($7)._href_("#/selected");
$8=_st($7)._with_("Selected");
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTodoFiltersOn:",{html:html},globals.FooterSection)})},
args: ["html"],
source: "renderTodoFiltersOn: html\x0a\x09html ul\x0a\x09\x09id: 'filters';\x0a\x09\x09with: [\x0a\x09\x09\x09html li: [ html a href: '#/'; with: 'All'. ].\x0a\x09\x09\x09html li: [ html a href: '#/active'; with: 'Active'. ].\x0a\x09\x09\x09html li: [ html a href: '#/selected'; with: 'Selected'. ]].",
messageSends: ["id:", "ul", "with:", "li:", "href:", "a"],
referencedClasses: []
}),
globals.FooterSection);



smalltalk.addClass('MainSection', globals.Widget, [], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.MainSection.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MainSection)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._section();
_st($1)._id_("main");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderToggleTodosOn_(html);
return self._renderTodoListItemsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MainSection)})},
args: ["html"],
source: "renderOn: html\x0a\x09html section\x0a\x09\x09id: 'main';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderToggleTodosOn: html.\x0a            self renderTodoListItemsOn: html. ].",
messageSends: ["id:", "section", "with:", "renderToggleTodosOn:", "renderTodoListItemsOn:"],
referencedClasses: []
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
return self}, function($ctx1) {$ctx1.fill(self,"renderToggleTodosOn:",{html:html,input:input,label:label},globals.MainSection)})},
args: ["html"],
source: "renderToggleTodosOn: html\x0a\x09| input label |\x0a\x09input := html input\x0a\x09\x09\x09\x09    id: 'toggle-all';\x0a                  \x09type: 'checkbox'.\x0a\x09label := html label\x0a\x09\x09\x09\x09\x09for: 'toggle-all';\x0a\x09\x09\x09\x09\x09with: 'Mark all as complete'.\x0a\x09input element.\x0a\x09label element.",
messageSends: ["id:", "input", "type:", "for:", "label", "with:", "element"],
referencedClasses: []
}),
globals.MainSection);



smalltalk.addClass('Todo', globals.Widget, ['isDone', 'text', 'id'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'testing',
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
source: "= aTodo\x0a\x09^ self id = aTodo id",
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
selector: "id:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@id"]=aString;
return self},
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
fn: function (){
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Todo.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@id"]=_st(_st($Date())._now())._asNumber();
self["@isDone"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Todo)})},
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
selector: "isDone:",
protocol: 'accessing',
fn: function (aBool){
var self=this;
self["@isDone"]=aBool;
return self},
args: ["aBool"],
source: "isDone: aBool\x0a\x09isDone := aBool.",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "onDeleteClickedDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onDeleteClicked"]=aBlock;
return self},
args: ["aBlock"],
source: "onDeleteClickedDo: aBlock\x0a\x09onDeleteClicked := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "onTodoChangedDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onTodoChanged"]=aBlock;
return self},
args: ["aBlock"],
source: "onTodoChangedDo: aBlock\x0a\x09onTodoChanged := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var input,label,delete_;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
_st(html)._li_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("view");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._input();
_st($3)._type_("checkbox");
_st($3)._class_("toggle");
$ctx3.sendIdx["class:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(console)._log_("mark me as done");
$ctx4.sendIdx["log:"]=1;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["onClick:"]=1;
input=$4;
input;
label=_st(_st(html)._label())._with_(self._text());
label;
$5=_st(html)._button();
_st($5)._class_("destroy");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(console)._log_("delete me");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
delete_=$6;
return delete_;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,input:input,label:label,delete_:delete_},globals.Todo)})},
args: ["html"],
source: "renderOn: html\x0a\x09| input label delete |\x0a\x09html li: [\x0a\x09\x09html div\x0a\x09\x09\x09class: 'view';\x0a\x09\x09\x09with: [\x0a                  \x09input := html input\x0a                  \x09\x09type: 'checkbox';\x0a\x09\x09\x09\x09\x09\x09class: 'toggle';\x0a\x09\x09\x09\x09\x09\x09onClick: [ console log: 'mark me as done'. ].\x0a\x09\x09\x09\x09\x09label := html label with: self text.\x0a\x09\x09\x09\x09\x09delete := html button\x0a\x09\x09\x09\x09\x09\x09class: 'destroy';\x0a\x09\x09\x09\x09\x09\x09onClick: [ console log: 'delete me'. ]]].",
messageSends: ["li:", "class:", "div", "with:", "type:", "input", "onClick:", "log:", "label", "text", "button"],
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
selector: "text:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@text"]=anObject;
return self},
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
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
return smalltalk.withContext(function($ctx1) { 
self._isDone_(_st(self["@isDone"])._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleIsDone",{},globals.Todo)})},
args: [],
source: "toggleIsDone\x0a\x09self isDone: isDone not",
messageSends: ["isDone:", "not"],
referencedClasses: []
}),
globals.Todo);


smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:",
protocol: 'not yet classified',
fn: function (aDict){
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
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:",{aDict:aDict,todo:todo},globals.Todo.klass)})},
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
fn: function (aDict,aBlock){
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=self._fromDictionary_(aDict);
_st(todo)._onTodoChangedDo_(aBlock);
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withCallback:",{aDict:aDict,aBlock:aBlock,todo:todo},globals.Todo.klass)})},
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
fn: function (aDict,aBlock,oBlock){
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=self._fromDictionary_(aDict);
_st(todo)._onTodoChangedDo_(aBlock);
_st(todo)._onDeleteClickedDo_(oBlock);
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",{aDict:aDict,aBlock:aBlock,oBlock:oBlock,todo:todo},globals.Todo.klass)})},
args: ["aDict", "aBlock", "oBlock"],
source: "fromDictionary: aDict withTodoChangedCallback: aBlock withDeleteClickedCallback: oBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09todo onDeleteClickedDo: oBlock.\x0a\x09^ todo",
messageSends: ["fromDictionary:", "onTodoChangedDo:", "onDeleteClickedDo:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithText:",
protocol: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithText:",{aString:aString},globals.Todo.klass)})},
args: ["aString"],
source: "newWithText: aString\x0a\x09^ self new text: aString",
messageSends: ["text:", "new"],
referencedClasses: []
}),
globals.Todo.klass);


smalltalk.addClass('TodoList', globals.Widget, ['storage'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "addTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTodo)._onTodoChangedDo_((function(todo){
return smalltalk.withContext(function($ctx2) {
return _st(self["@storage"])._at_put_(_st(self["@storage"])._indexOf_(todo),todo);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,1)})}));
_st(aTodo)._onDeleteClickedDo_((function(todo){
return smalltalk.withContext(function($ctx2) {
return self._removeTodo_(todo);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,2)})}));
_st(self["@storage"])._add_(aTodo);
return self}, function($ctx1) {$ctx1.fill(self,"addTodo:",{aTodo:aTodo},globals.TodoList)})},
args: ["aTodo"],
source: "addTodo: aTodo\x0a\x09aTodo onTodoChangedDo: [ :todo | storage at: (storage indexOf: todo) put: todo ].\x0a\x09aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].\x0a    storage add: aTodo.",
messageSends: ["onTodoChangedDo:", "at:put:", "indexOf:", "onDeleteClickedDo:", "removeTodo:", "add:"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInput:",
protocol: 'events',
fn: function (anEvent){
var self=this;
var text,todo;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
text=_st(_st(anEvent)._target())._value();
todo=_st($Todo())._newWithText_(text);
self._addTodo_(todo);
return self}, function($ctx1) {$ctx1.fill(self,"handleInput:",{anEvent:anEvent,text:text,todo:todo},globals.TodoList)})},
args: ["anEvent"],
source: "handleInput: anEvent\x0a\x09| text todo |\x0a    text := anEvent target value.\x0a    todo := Todo newWithText: text.\x0a \x09self addTodo: todo.",
messageSends: ["value", "target", "newWithText:", "addTodo:"],
referencedClasses: ["Todo"]
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TodoList.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@storage"]=_st($TodoStorage())._singleton();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoList)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09storage := TodoStorage singleton.",
messageSends: ["initialize", "singleton"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@storage"])._remove_(aTodo);
_st(_st("li#".__comma(_st(aTodo)._id()))._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeTodo:",{aTodo:aTodo},globals.TodoList)})},
args: ["aTodo"],
source: "removeTodo: aTodo\x0a\x09storage remove: aTodo.\x0a\x09('li#', aTodo id) asJQuery remove",
messageSends: ["remove:", "remove", "asJQuery", ",", "id"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
protocol: 'rendering',
fn: function (html){
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
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html section\x0a\x09\x09id: 'todoapp';\x0a\x09\x09with: [\x0a                  self renderFormOn: html.\x0a                  self renderTodosOn: html ]",
messageSends: ["id:", "section", "with:", "renderFormOn:", "renderTodosOn:"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFooterOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderFooterOn: html\x0a\x09html footer\x0a\x09\x09id: 'info';\x0a\x09\x09with: [ \x0a\x09\x09\x09html p with: 'Double-click to edit a todo'.\x0a\x09\x09\x09html p with: 'Written by rbistolfi'.\x0a\x09\x09\x09html p: [\x0a\x09\x09\x09\x09html with: 'Part of '.\x0a\x09\x09\x09\x09html a href: 'http://todomvc.com'; with: 'TodoMVC']].",
messageSends: ["id:", "footer", "with:", "p", "p:", "href:", "a"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
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
self._renderMainAndFooterSectionsOn_(html);
self._handleInput_(event);
return _st(_st(input)._asJQuery())._val_("");
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,2)})}));
input=$4;
return input;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(_st(input)._element())._placeholder_(defaultText);
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html,input:input,defaultText:defaultText},globals.TodoList)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09| input defaultText |\x0a\x09defaultText := 'What needs to be done?'.\x0a\x09html header\x0a\x09\x09id: 'header';\x0a\x09\x09with: [\x0a\x09\x09\x09\x09   html h1: 'todos'.\x0a                   input := html input\x0a\x09\x09\x09\x09    id: 'new-todo';\x0a                  \x09type: 'text';\x0a\x09\x09\x09\x09\x09autofocus;\x0a                  \x09onKeyUp: [ :event |\x0a                                  (event keyCode = 13) ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09    self renderMainAndFooterSectionsOn: html.\x0a                                    \x09self handleInput: event.\x0a                                    \x09input asJQuery val: '' ] ] ].\x0a\x09input element placeholder: defaultText.",
messageSends: ["id:", "header", "with:", "h1:", "input", "type:", "autofocus", "onKeyUp:", "ifTrue:", "=", "keyCode", "renderMainAndFooterSectionsOn:", "handleInput:", "val:", "asJQuery", "placeholder:", "element"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainAndFooterSectionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var footer,main;
function $FooterSection(){return globals.FooterSection||(typeof FooterSection=="undefined"?nil:FooterSection)}
function $MainSection(){return globals.MainSection||(typeof MainSection=="undefined"?nil:MainSection)}
return smalltalk.withContext(function($ctx1) { 
footer=_st($FooterSection())._new();
$ctx1.sendIdx["new"]=1;
main=_st($MainSection())._new();
_st(main)._renderOn_(html);
$ctx1.sendIdx["renderOn:"]=1;
_st(footer)._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderMainAndFooterSectionsOn:",{html:html,footer:footer,main:main},globals.TodoList)})},
args: ["html"],
source: "renderMainAndFooterSectionsOn: html\x0a\x09| footer main |\x0a\x09footer := FooterSection new.\x0a\x09main := MainSection new.\x0a\x09main renderOn: html.\x0a\x09footer renderOn: html.",
messageSends: ["new", "renderOn:"],
referencedClasses: ["FooterSection", "MainSection"]
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderBodyOn_(html);
self._renderFooterOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderBodyOn: html.\x0a    self renderFooterOn: html.",
messageSends: ["renderBodyOn:", "renderFooterOn:"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodosOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var todos;
return smalltalk.withContext(function($ctx1) { 
var $1;
todos=_st(self["@storage"])._items();
$1=_st(_st(todos)._size()).__eq((0));
if(! smalltalk.assert($1)){
self._renderMainAndFooterSectionsOn_(html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderTodosOn:",{html:html,todos:todos},globals.TodoList)})},
args: ["html"],
source: "renderTodosOn: html\x0a\x09| todos |\x0a\x09todos := storage items.\x0a\x09todos size = 0\x0a\x09\x09ifFalse: [ self renderMainAndFooterSectionsOn: html ]",
messageSends: ["items", "ifFalse:", "=", "size", "renderMainAndFooterSectionsOn:"],
referencedClasses: []
}),
globals.TodoList);


smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"run",{},globals.TodoList.klass)})},
args: [],
source: "run\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.TodoList.klass);


smalltalk.addClass('TodoStorage', globals.Object, ['items'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@items"])._add_(anObject);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.TodoStorage)})},
args: ["anObject"],
source: "add: anObject\x0a\x09items add: anObject.\x0a\x09self save.",
messageSends: ["add:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._at_(anIndex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},globals.TodoStorage)})},
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
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._at_put_(anIndex,anObject);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},globals.TodoStorage)})},
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
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._collect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},globals.TodoStorage)})},
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
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._detect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},globals.TodoStorage)})},
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
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_(aBlock);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.TodoStorage)})},
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
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"fetch",{storedTodos:storedTodos,todos:todos},globals.TodoStorage)})},
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
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._indexOf_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},globals.TodoStorage)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=self._fetch();
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoStorage)})},
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
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"initializeStorage",{},globals.TodoStorage)})},
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
fn: function (){
var self=this;
var todos;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1;
todos=self._parseTodoItems_(_st(localStorage)._getItem_("todos-amber"));
$1=_st(todos)._collect_((function(todo){
return smalltalk.withContext(function($ctx2) {
return _st($Todo())._fromDictionary_(todo);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{todos:todos},globals.TodoStorage)})},
args: [],
source: "items\x0a\x09\x22Returns an Array of all Todos in TodoStorage\x22\x0a\x09| todos |\x0a\x09todos := self parseTodoItems: (localStorage getItem: 'todos-amber' ).\x0a\x09^ todos collect: [ :todo | Todo fromDictionary: todo ].",
messageSends: ["parseTodoItems:", "getItem:", "collect:", "fromDictionary:"],
referencedClasses: ["Todo"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "length",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"length",{},globals.TodoStorage)})},
args: [],
source: "length\x0a\x09^ self size",
messageSends: ["size"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
protocol: 'persistence',
fn: function (){
var self=this;
var str;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
str=_st(localStorage)._getItem_("todos-amber");
_st($Smalltalk())._readJSObject_(_st($JSON())._parse_(str));
return self}, function($ctx1) {$ctx1.fill(self,"load",{str:str},globals.TodoStorage)})},
args: [],
source: "load\x0a\x09\x22Loads the serialized items from localStorage\x22\x0a\x09| str |\x0a\x09str := (localStorage getItem: 'todos-amber').\x0a\x09Smalltalk readJSObject: (JSON parse: str).\x0a\x09",
messageSends: ["getItem:", "readJSObject:", "parse:"],
referencedClasses: ["Smalltalk", "JSON"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "parseTodoItems:",
protocol: 'accessing',
fn: function (json){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Smalltalk())._readJSObject_(_st($JSON())._parse_(json));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseTodoItems:",{json:json},globals.TodoStorage)})},
args: ["json"],
source: "parseTodoItems: json\x0a\x09\x22Parses serialized JSON todos in localStorage and returns an Array of Todo objects\x22\x0a\x09^ Smalltalk readJSObject: (JSON parse: json).",
messageSends: ["readJSObject:", "parse:"],
referencedClasses: ["Smalltalk", "JSON"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
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
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject,d:d},globals.TodoStorage)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09| d |\x0a\x09d := items detect: [ :each | each asJSON = anObject asJSON ]. \x0a\x09items remove: d.\x0a\x09self save",
messageSends: ["detect:", "=", "asJSON", "remove:", "save"],
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
_st(localStorage)._setItem_value_("todos-amber",_st(self["@items"])._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"save",{},globals.TodoStorage)})},
args: [],
source: "save\x0a\x09localStorage setItem: 'todos-amber' value: items asJSONString",
messageSends: ["setItem:value:", "asJSONString"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'iterating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},globals.TodoStorage)})},
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
}, function($ctx1) {$ctx1.fill(self,"singleton",{UniqueInstance:UniqueInstance},globals.TodoStorage.klass)})},
args: [],
source: "singleton\x0a\x09| UniqueInstance |\x0a\x09UniqueInstance ifNil: [ UniqueInstance := self basicNew initialize ].\x0a    ^ UniqueInstance.",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
globals.TodoStorage.klass);

});
