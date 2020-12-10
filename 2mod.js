const awesomeModule =require('./2awesomeModule')

var obj={};

awesomeModule.danceMixin(obj);

obj.dance();

awesomeModule.isCoolMixin(obj);

console.log(obj.isCool());
