export = {};

/* 类型声明 */
/**
 * 声明文件可以让我们不需要将JS重构为TS，只需要加上声明文件就可以使用系统
 * 类型声明在编译的时候都会被删除，不会影响真正的代码
 */

// 1.普通类型声明
declare const $: (
  selector: string
) => {
  // 变量
  click(): void;
  width(length: number): void;
};
$("#root").click();
console.log($("#root").width);
declare let name: string; // 变量
declare let age: number; // 变量
declare function getName(): string; // 方法
declare class Animal {
  name: string;
} // 类
console.log(name, age);
getName();
new Animal();

// 2.外部枚举
/**
 * 外部枚举是使用declare enum定义的枚举类型
 * 外部枚举用来描述已经存在的枚举类型的形状
 */
declare enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter
}

let seasons = [Seasons.Spring, Seasons.Summer, Seasons.Autumn, Seasons.Winter];
console.log(seasons);

// declare 定义的类型只会用于编译时的检查，编译结果中会被删除。上例的编译结果如下
/* var seasons = [
  Seasons.Spring,
  Seasons.Summer,
  Seasons.Autumn,
  Seasons.Winter
]; */

// 也可以同时使用declare 和 const
declare const enum Seasons1 {
  Spring,
  Summer,
  Autumn,
  Winter
}

let seasons1 = [Seasons.Spring, Seasons.Summer, Seasons.Autumn, Seasons.Winter];

// 3.namespace
/**
 * 如果一个全局变量包括了很多子属性，可能使用namespace
 * 在声明文件中的namespace表示一个全局变量包含很多子属性
 * 在命名空间内部不需要使用 declare 声明属性或方法
 */
declare namespace $1 {
  function ajax(url: string, setting: any): void;
  let name: string;
  namespace fn {
    function extend(object: any): void;
  }
}
$1.ajax("/api/users", {});
$1.fn.extend({
  log: function(message: any) {
    console.log(message);
  }
});

// 4.类型声明文件
/**
 * 我们可以把类型声明放在一个单独的类型声明文件中
 * 可以在类型声明文件中使用类型声明
 * 文件命名规范为*.d.ts
 * 观看类型声明文件有助于了解库的使用方式
 */
