var isCoolMixin = function (obj) {
    obj.isCool = function () {
        return true;
    }
}
var danceMixin = function (obj) {
    obj.dance = function () {
        console.log("Dancing a lot");
    };
};

module.exports= { 
    isCoolMixin,
    danceMixin
}