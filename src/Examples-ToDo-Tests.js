define("Examples/Examples-ToDo-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo-Tests');
smalltalk.packages["Examples-ToDo-Tests"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('TodoAppTest', globals.TestCase, [], 'Examples-ToDo-Tests');


smalltalk.addClass('TodoBuilderTest', globals.TestCase, [], 'Examples-ToDo-Tests');


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


});
