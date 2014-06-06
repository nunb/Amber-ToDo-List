define("Examples/Examples-ToDo-Benchmarks", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Benchmarks');
smalltalk.packages["Examples-ToDo-Benchmarks"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoBench', globals.Object, [], 'Examples-ToDo-Benchmarks');

smalltalk.addMethod(
smalltalk.method({
selector: "benchmark1",
protocol: 'benchmarks',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
result=self._createTodos_((200));
_st(console)._log_("createTodos => ".__comma(result));
return self}, function($ctx1) {$ctx1.fill(self,"benchmark1",{result:result},globals.TodoBench.klass)})},
args: [],
source: "benchmark1\x0a\x0a\x09| result |\x0a\x09result := self createTodos: 200.\x0a\x09console log: 'createTodos => ' , result",
messageSends: ["createTodos:", "log:", ","],
referencedClasses: []
}),
globals.TodoBench.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "createTodos:",
protocol: 'accessories',
fn: function (aNumber){
var self=this;
var aTodo;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
function $TodoApp(){return globals.TodoApp||(typeof TodoApp=="undefined"?nil:TodoApp)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Date())._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aNumber)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
aTodo=_st($Todo())._newWithText_done_id_("foo",false,(123));
aTodo;
return _st(_st($TodoApp())._current())._add_(aTodo);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createTodos:",{aNumber:aNumber,aTodo:aTodo},globals.TodoBench.klass)})},
args: ["aNumber"],
source: "createTodos: aNumber\x0a\x09| aTodo |\x0a\x09^ Date millisecondsToRun: [\x0a\x09\x09aNumber timesRepeat: [ \x0a\x09\x09\x09aTodo := Todo newWithText: 'foo' done: false id: 123.\x0a\x09\x09\x09TodoApp current add: aTodo.]].",
messageSends: ["millisecondsToRun:", "timesRepeat:", "newWithText:done:id:", "add:", "current"],
referencedClasses: ["Date", "Todo", "TodoApp"]
}),
globals.TodoBench.klass);

});
