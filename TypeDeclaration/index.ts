export = {}

/* 类型声明 */
/**
 * 声明文件可以让我们不需要将JS重构为TS，只需要加上声明文件就可以使用系统
 * 类型声明在编译的时候都会被删除，不会影响真正的代码
 */

// 1.普通类型声明
declare const $: (selector: string) => { // 变量
  click(): void
  width(length: number): void
}
$("#root").click();
console.log($("#root").width);
