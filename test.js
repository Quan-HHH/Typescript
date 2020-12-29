function greeter(person) {
    return 'hello ' + person.lastName + person.firstName;
}
console.log(greeter({ lastName: 'xiao', firstName: 'huahua' }));
var arr = [1, 2, 3];
console.log('hello'.substr(1));
var Huangyichao;
(function (Huangyichao) {
    Huangyichao[Huangyichao["h"] = 0] = "h";
    Huangyichao[Huangyichao["y"] = 1] = "y";
    Huangyichao[Huangyichao["c"] = 2] = "c";
})(Huangyichao || (Huangyichao = {}));
var hyc = Huangyichao.c;
console.log(hyc);
