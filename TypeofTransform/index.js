"use strict";
var p = {
    name: "a",
    fly: function () { },
    talk: function () { }
};
var p1 = {
    name: "a",
    age: 18,
    gender: 1
};
//先定义变量，再定义类型
var p2 = {
    name: "b",
    age: 18,
    gender: 0
};
function getName(p) {
    return p.name;
}
console.log(getName(p2));
var FrontEndJob = {
    name: "前端工程师"
};
var interestsLevel = 2;
console.log(FrontEndJob, interestsLevel);
function getValueByKey(p, key) {
    return p[key];
}
var val = getValueByKey({ name: "c", age: 18, gender: "male" }, "age");
console.log(val);
var p3 = {};
var p4 = {};
var a = {};
var b = {
    b1: '1',
    b2: 12,
    b3: true
};
module.exports = {};
// 6.3.Readonly 
