// void 함수는 retrun 하지 않는다.
// undefined는 리턴이 가능함.
var func;
(function (func) {
    function a1() {
        return undefined;
    }
    func.a1 = a1;
    var b = a1();
    // void function을 선언
    var Ffunction = function () { };
    func.a2 = {
        talk: function () {
            //이때, 3이 리턴되는 것을 그냥 무시한다.
            return 3;
        }
    };
})(func || (func = {}));
console.log(func.a2.talk());
