angular.module("myapp").factory("myService",function(){
    var myobj = {};
    myobj.myfct = function (){
        return 'nizar ajroud';
    };
    return myobj;
});
