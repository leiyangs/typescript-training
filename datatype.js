"use strict";
/**
 * 数据类型
 */
// 布尔类型(boolean) #
let married = false;
// 数字类型(number) #
let num = 10;
// 字符串类型(string) #
let str = 'yang';
// 数组类型(array)
let arr1 = [1, 2, 3];
let arr2 = ['1', '2', '3'];
let arr3 = [{ a: 1, b: 2, c: 3 }];
// 元组类型(tuple) #
// 在 TypeScript 的基础类型中，元组（ Tuple ）表示一个已知数量和类型的数组, 每一项可以是不同的类型，有长度预定，数组没有。
let tuple = [10, 'yang'];
tuple[0].toFixed(2);
tuple[1].length;
// 枚举类型(enum) #
// 事先考虑某一个变量的所有的可能的值，尽量用自然语言中的单词表示它的每一个值
// - 普通枚举 #
var Gender;
(function (Gender) {
    Gender[Gender["girl"] = 0] = "girl";
    Gender[Gender["boy"] = 1] = "boy";
})(Gender || (Gender = {}));
let boy = Gender.boy;
console.log('我是' + boy);
var Week;
(function (Week) {
    Week[Week["monday"] = 1] = "monday";
    Week[Week["tuesday"] = 2] = "tuesday";
})(Week || (Week = {}));
console.log(`今天是星期${Week.monday}`);
// - 常数枚举 #
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
// 假如包含了计算成员，则会在编译阶段报错
